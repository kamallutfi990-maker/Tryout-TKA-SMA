/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import LandingPage from './components/LandingPage';
import AuthModal from './components/AuthModal';
import DashboardSiswa from './components/DashboardSiswa';
import DashboardAdmin from './components/DashboardAdmin';
import DashboardGuru from './components/DashboardGuru';
import AiTutorSandbox from './components/AiTutorSandbox';
import { FirestoreSimulator } from './lib/firestoreSimulator';
import { subscribeAuthChange, logoutFirebase } from './lib/firebaseAuth';
import { UserProfile } from './types';
import { Bot, Sparkles, X, GraduationCap, ArrowUpRight } from 'lucide-react';

export default function App() {
  const [currentUser, setCurrentUser] = useState<UserProfile | null>(null);
  const [showAuth, setShowAuth] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');
  const [showTopAlert, setShowTopAlert] = useState(() => {
    return localStorage.getItem('dismissedTopAlert') !== 'true';
  });
  
  // Floating AI Tutor helper panel
  const [showAiFloating, setShowAiFloating] = useState(false);

  useEffect(() => {
    // Check if user session already exists in Simulator / LocalStorage
    const session = FirestoreSimulator.getCurrentUser();
    if (session) {
      if (session.role === 'Admin' || session.role === 'Guru') {
        const email = session.email.trim().toLowerCase();
        if (email !== 'kamallutfi990@gmail.com') {
          const designated = FirestoreSimulator.getDesignatedUsers();
          const isAllowed = designated.some(u => u.email.toLowerCase() === email && u.role === session.role);
          if (!isAllowed) {
            FirestoreSimulator.logout();
            setCurrentUser(null);
            return;
          }
        }
      }
      setCurrentUser(session);
    }

    const unsubscribe = subscribeAuthChange((profile) => {
      if (profile) {
        setCurrentUser(profile);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleAuthSuccess = (user: UserProfile) => {
    setCurrentUser(user);
    setShowAuth(false);
  };

  const handleLogout = () => {
    logoutFirebase();
    setCurrentUser(null);
  };

  const handleUpdateProfile = (updated: UserProfile) => {
    setCurrentUser(updated);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans relative">
      
      {/* Universal Sticky Top Alert / Quick Grade Notice */}
      {showTopAlert && (
        <div className="bg-blue-600 text-white py-1.5 px-4 text-center text-xs font-semibold flex items-center justify-between gap-1.5 shadow-sm relative pr-10">
          <div className="flex items-center justify-center gap-1.5 w-full">
            <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
            <span>Selamat Datang di Platform Simulasi & CBT TKA SMA Indonesia!</span>
          </div>
          <button
            onClick={() => {
              setShowTopAlert(false);
              localStorage.setItem('dismissedTopAlert', 'true');
            }}
            className="absolute right-2.5 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-1 hover:bg-blue-700/50 rounded transition-colors cursor-pointer"
            title="Sembunyikan"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Main routing depending on login status and role */}
      {!currentUser ? (
        <>
          <LandingPage
            onStartLearning={() => {
              setAuthMode('register');
              setShowAuth(true);
            }}
            onCobaGratis={() => {
              setAuthMode('login');
              setShowAuth(true);
            }}
          />
          {showAuth && (
            <AuthModal
              onClose={() => setShowAuth(false)}
              onAuthSuccess={handleAuthSuccess}
              initialMode={authMode}
            />
          )}
        </>
      ) : (
        <div className="min-h-screen flex flex-col">
          {/* Main User Workspace according to role */}
          {currentUser.role === 'Siswa' && (
            <DashboardSiswa
              userProfile={currentUser}
              onLogout={handleLogout}
              onUpdateProfile={handleUpdateProfile}
              onOpenAiSandbox={() => setShowAiFloating(true)}
            />
          )}

          {currentUser.role === 'Guru' && (
            <DashboardGuru
              userProfile={currentUser}
              onLogout={handleLogout}
            />
          )}

          {currentUser.role === 'Admin' && (
            <DashboardAdmin
              userProfile={currentUser}
              onLogout={handleLogout}
            />
          )}

          {/* Floating AI tutor trigger button for logged-in Siswa users */}
          {currentUser.role === 'Siswa' && !showAiFloating && (
            <button
              onClick={() => setShowAiFloating(true)}
              className="fixed bottom-6 right-6 z-40 bg-slate-900 hover:bg-slate-800 text-white p-4 rounded-full shadow-2xl flex items-center gap-2 hover:scale-105 active:scale-95 transition-all cursor-pointer border border-slate-700 font-bold text-xs"
            >
              <Bot className="w-5 h-5 text-blue-500 animate-bounce" />
              <span>Tanya AI Tutor</span>
            </button>
          )}

          {/* Floating AI sandbox Overlay panel */}
          {showAiFloating && (
            <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm p-4 flex items-center justify-center">
              <div className="relative w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-100 flex flex-col max-h-[90vh]">
                <button
                  onClick={() => setShowAiFloating(false)}
                  className="absolute top-4 right-4 z-50 bg-slate-800 hover:bg-slate-700 text-white p-1.5 rounded-full transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
                <div className="p-4 sm:p-6 overflow-hidden flex-1">
                  <AiTutorSandbox userProfile={currentUser} />
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
