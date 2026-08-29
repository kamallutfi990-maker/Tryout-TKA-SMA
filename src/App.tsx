/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import SecurityWrapper from './components/SecurityWrapper';
import ThemeToggle from './components/ThemeToggle';
import DashboardSiswa from './components/DashboardSiswa';
import DashboardAdmin from './components/DashboardAdmin';
import DashboardGuru from './components/DashboardGuru';
import AiTutorSandbox from './components/AiTutorSandbox';
import { FirestoreSimulator } from './lib/firestoreSimulator';
import { UserProfile, UserRole } from './types';
import { Bot, Sparkles, X, UserCheck, Shield, GraduationCap, School } from 'lucide-react';

const DEFAULT_USER: UserProfile = {
  uid: 'u_siswa_indonesia',
  email: 'siswa@tkasmaindonesia.id',
  displayName: 'Siswa TKA Indonesia',
  role: 'Siswa',
  schoolName: 'SMA Negeri 1 Indonesia',
  targetPTN: 'Institut Teknologi Bandung',
  targetProdi: 'Teknik Informatika',
  xp: 1250,
  level: 5,
  streak: 7,
  isPremium: true,
  avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
  createdAt: new Date().toISOString()
};

export default function App() {
  const [currentUser, setCurrentUser] = useState<UserProfile>(() => {
    const session = FirestoreSimulator.getCurrentUser();
    if (session) {
      return {
        ...session,
        isPremium: true // Full access unlocked
      };
    }
    return DEFAULT_USER;
  });

  const [showTopAlert, setShowTopAlert] = useState(() => {
    return localStorage.getItem('dismissedTopAlert') !== 'true';
  });
  
  // Floating AI Tutor helper panel
  const [showAiFloating, setShowAiFloating] = useState(false);

  useEffect(() => {
    // Keep user state in sync with local storage
    localStorage.setItem('tka_current_user', JSON.stringify(currentUser));
  }, [currentUser]);

  const handleUpdateProfile = (updated: UserProfile) => {
    setCurrentUser(updated);
    localStorage.setItem('tka_current_user', JSON.stringify(updated));
  };

  const handleSwitchRole = (newRole: UserRole) => {
    const updated: UserProfile = {
      ...currentUser,
      role: newRole,
      displayName: newRole === 'Admin' 
        ? 'Administrator Utama' 
        : newRole === 'Guru' 
        ? 'Guru Pengajar TKA' 
        : currentUser.displayName || 'Siswa TKA Indonesia'
    };
    setCurrentUser(updated);
    localStorage.setItem('tka_current_user', JSON.stringify(updated));
  };

  return (
    <SecurityWrapper>
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 font-sans relative">
        {/* Quick Role & Theme Switcher Bar */}
        <div className="fixed top-3 right-4 z-[60] flex items-center gap-2">
          {/* Quick Role Switcher Pill (No login required) */}
          <div className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-md px-2 py-1 rounded-full border border-slate-200 dark:border-slate-800 shadow-md flex items-center gap-1 text-[11px] font-bold">
            <span className="text-slate-400 dark:text-slate-500 pl-1 pr-0.5 hidden sm:inline">Mode:</span>
            <button
              onClick={() => handleSwitchRole('Siswa')}
              className={`px-2 py-0.5 rounded-full transition-all cursor-pointer ${
                currentUser.role === 'Siswa'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-blue-600'
              }`}
              title="Tampilan Siswa (Try Out, Belajar, Prediksi Rapor)"
            >
              Siswa
            </button>
            <button
              onClick={() => handleSwitchRole('Guru')}
              className={`px-2 py-0.5 rounded-full transition-all cursor-pointer ${
                currentUser.role === 'Guru'
                  ? 'bg-purple-600 text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-purple-600'
              }`}
              title="Tampilan Guru Pengajar"
            >
              Guru
            </button>
            <button
              onClick={() => handleSwitchRole('Admin')}
              className={`px-2 py-0.5 rounded-full transition-all cursor-pointer ${
                currentUser.role === 'Admin'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-emerald-600'
              }`}
              title="Tampilan Administrator Utama"
            >
              Admin
            </button>
          </div>

          <ThemeToggle />
        </div>
        
        {/* Universal Sticky Top Alert / Quick Grade Notice */}
        {showTopAlert && (
          <div className="bg-blue-600 dark:bg-blue-800 text-white py-1.5 px-4 text-center text-xs font-semibold flex items-center justify-between gap-1.5 shadow-sm relative pr-24 sm:pr-40">
            <div className="flex items-center justify-center gap-1.5 w-full">
              <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
              <span>Akses Penuh Terbuka • Platform Simulasi & CBT TKA SMA Indonesia!</span>
            </div>
            <button
              onClick={() => {
                setShowTopAlert(false);
                localStorage.setItem('dismissedTopAlert', 'true');
              }}
              className="absolute right-24 sm:right-36 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-1 hover:bg-blue-700/50 rounded transition-colors cursor-pointer"
              title="Sembunyikan"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

        <div className="min-h-screen flex flex-col">
          {/* Main User Workspace according to active role without login barrier */}
          {currentUser.role === 'Siswa' && (
            <DashboardSiswa
              userProfile={currentUser}
              onLogout={() => handleSwitchRole('Siswa')}
              onUpdateProfile={handleUpdateProfile}
              onOpenAiSandbox={() => setShowAiFloating(true)}
            />
          )}

          {currentUser.role === 'Guru' && (
            <DashboardGuru
              userProfile={currentUser}
              onLogout={() => handleSwitchRole('Siswa')}
            />
          )}

          {currentUser.role === 'Admin' && (
            <DashboardAdmin
              userProfile={currentUser}
              onLogout={() => handleSwitchRole('Siswa')}
            />
          )}

          {/* Floating AI tutor trigger button for Siswa view */}
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
                  className="absolute top-4 right-4 z-50 bg-slate-800 hover:bg-slate-700 text-white p-1.5 rounded-full transition-colors cursor-pointer"
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
      </div>
    </SecurityWrapper>
  );
}
