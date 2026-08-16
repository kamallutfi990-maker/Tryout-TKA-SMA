/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Mail, Lock, User, GraduationCap, X, AlertCircle } from 'lucide-react';
import { FirestoreSimulator } from '../lib/firestoreSimulator';
import { loginWithFirebaseEmail, registerWithFirebaseEmail, loginWithGoogle } from '../lib/firebaseAuth';

interface AuthModalProps {
  onClose: () => void;
  onAuthSuccess: (user: any) => void;
  initialMode?: 'login' | 'register';
}

export default function AuthModal({ onClose, onAuthSuccess, initialMode = 'login' }: AuthModalProps) {
  const [mode, setMode] = useState<'login' | 'register' | 'forgot' | 'verify'>(initialMode);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [role, setRole] = useState<'Siswa' | 'Guru' | 'Admin'>('Siswa');
  const [error, setError] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [loading, setLoading] = useState(false);

  // Prefilled presets for instant platform testing
  const presets = [
    { email: 'siswa@tkasma.id', role: 'Siswa' as const, label: 'Siswa (Demo)' },
    { email: 'kamallutfi990@gmail.com', role: 'Guru' as const, label: 'Guru (kamal)' },
    { email: 'kamallutfi990@gmail.com', role: 'Admin' as const, label: 'Admin (kamal)' }
  ];

  const handlePresetLogin = async (emailPreset: string, rolePreset: 'Siswa' | 'Guru' | 'Admin') => {
    setLoading(true);
    setError('');
    try {
      const passwordPreset = (rolePreset === 'Admin' || rolePreset === 'Guru') ? '12345678' : undefined;
      const user = passwordPreset 
        ? await loginWithFirebaseEmail(emailPreset, passwordPreset, rolePreset)
        : FirestoreSimulator.login(emailPreset, rolePreset);
      onAuthSuccess(user);
    } catch (err: any) {
      setError(err.message || 'Gagal login demo');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setLoading(true);
    setError('');
    try {
      const user = await loginWithGoogle(role);
      onAuthSuccess(user);
    } catch (err: any) {
      console.warn('Google sign-in error:', err);
      // Fallback to quick demo user if popup is blocked or fails
      handlePresetLogin('google-user@gmail.com', role);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccessMsg('');

    if (!email) {
      setError('Email wajib diisi.');
      return;
    }

    setLoading(true);

    if (mode === 'login') {
      try {
        const user = password 
          ? await loginWithFirebaseEmail(email, password, role)
          : FirestoreSimulator.login(email, role);
        onAuthSuccess(user);
      } catch (err: any) {
        setError(err.message || 'Gagal masuk.');
      } finally {
        setLoading(false);
      }
    } else if (mode === 'register') {
      if (!displayName) {
        setError('Nama lengkap wajib diisi.');
        setLoading(false);
        return;
      }
      if (password.length < 6) {
        setError('Sandi minimal 6 karakter.');
        setLoading(false);
        return;
      }
      try {
        // Validate credentials beforehand to catch restricted role access early
        FirestoreSimulator.validateRegistration(email, role, password);
        setMode('verify'); // Transition to email verification
      } catch (err: any) {
        setError(err.message || 'Gagal mendaftar.');
      } finally {
        setLoading(false);
      }
    } else if (mode === 'forgot') {
      setSuccessMsg(`Tautan pemulihan kata sandi telah dikirim ke ${email}. Silakan cek kotak masuk Anda.`);
      setLoading(false);
    }
  };

  const handleVerifySuccess = async () => {
    setLoading(true);
    try {
      // Complete registration with Firebase Auth and Firestore sync
      const user = await registerWithFirebaseEmail(email, password, displayName, role);
      onAuthSuccess(user);
    } catch (err: any) {
      setError(err.message || 'Gagal mendaftar.');
      setMode('register');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 dark:bg-slate-950/80 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-md bg-white dark:bg-slate-900 rounded-3xl shadow-2xl overflow-hidden border border-slate-100 dark:border-slate-800 flex flex-col animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center bg-slate-50/50 dark:bg-slate-900/50">
          <div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
              {mode === 'login' && 'Masuk Akun'}
              {mode === 'register' && 'Daftar Akun'}
              {mode === 'forgot' && 'Reset Kata Sandi'}
              {mode === 'verify' && 'Verifikasi Email'}
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Platform CBT & AKADEMIK TKA SMA</p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6 overflow-y-auto max-h-[80vh]">
          {error && (
            <div className="flex items-start gap-2.5 bg-red-50 text-red-700 p-3.5 rounded-xl text-xs border border-red-100">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
              <span>{error}</span>
            </div>
          )}

          {successMsg && (
            <div className="flex items-start gap-2.5 bg-emerald-50 text-emerald-700 p-3.5 rounded-xl text-xs border border-emerald-100">
              <span className="font-bold">✓</span>
              <span>{successMsg}</span>
            </div>
          )}

          {mode === 'verify' ? (
            <div className="text-center space-y-4 py-4">
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto text-3xl font-bold">
                ✉
              </div>
              <h3 className="text-lg font-bold text-slate-800">Kode Verifikasi Dikirim</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Kami telah menyimulasikan pengiriman tautan verifikasi ke email <span className="font-semibold text-slate-800">{email}</span>.
              </p>
              <button
                onClick={handleVerifySuccess}
                className="w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-lg shadow-blue-100 transition-colors cursor-pointer"
              >
                Simulasikan Klik Tautan Verifikasi & Lanjut
              </button>
              <button
                onClick={() => setMode('register')}
                className="text-xs text-slate-400 hover:text-slate-600 font-semibold transition-colors block mx-auto"
              >
                Kembali ke Daftar
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {mode === 'register' && (
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-600">Nama Lengkap</label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
                    <input
                      type="text"
                      required
                      placeholder="Contoh: Sarah Amelia"
                      value={displayName}
                      onChange={(e) => setDisplayName(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-100 transition-all"
                    />
                  </div>
                </div>
              )}

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-600">Alamat Email</label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
                  <input
                    type="email"
                    required
                    placeholder="nama@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-100 transition-all"
                  />
                </div>
              </div>

              {mode !== 'forgot' && (
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center">
                    <label className="text-xs font-bold text-slate-600">Kata Sandi</label>
                    {mode === 'login' && (
                      <button
                        type="button"
                        onClick={() => setMode('forgot')}
                        className="text-xs text-blue-600 hover:text-blue-800 font-semibold"
                      >
                        Lupa Sandi?
                      </button>
                    )}
                  </div>
                  <div className="relative">
                    <Lock className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
                    <input
                      type="password"
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-100 transition-all"
                    />
                  </div>
                </div>
              )}

              {/* Role Selector */}
              {mode !== 'forgot' && (
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-600 block">Pilih Role Akun</label>
                  <div className="grid grid-cols-3 gap-2">
                    {(['Siswa', 'Guru', 'Admin'] as const).map((r) => (
                      <button
                        key={r}
                        type="button"
                        onClick={() => setRole(r)}
                        className={`py-2 rounded-xl border text-xs font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                          role === r
                            ? 'bg-blue-50 border-blue-600 text-blue-700'
                            : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                        }`}
                      >
                        <GraduationCap className="w-3.5 h-3.5" />
                        {r}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold shadow-lg shadow-blue-100 transition-colors cursor-pointer text-sm disabled:opacity-50"
              >
                {loading ? 'Memproses...' : (
                  <>
                    {mode === 'login' && 'Masuk'}
                    {mode === 'register' && 'Daftar Sekarang'}
                    {mode === 'forgot' && 'Kirim Link Reset'}
                  </>
                )}
              </button>

              {/* Google Login */}
              {mode !== 'forgot' && (
                <button
                  type="button"
                  disabled={loading}
                  onClick={handleGoogleLogin}
                  className="w-full py-3 border border-slate-200 rounded-xl bg-slate-50/50 hover:bg-slate-50 text-slate-700 text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer disabled:opacity-50"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                  </svg>
                  <span>Lanjutkan dengan Google</span>
                </button>
              )}
            </form>
          )}

          {/* Preset logins helper */}
          {mode === 'login' && (
            <div className="border-t border-slate-100 pt-5 space-y-2.5">
              <div className="text-xs font-bold text-slate-500 uppercase tracking-widest text-center">
                Atau Masuk Cepat (Satu Klik):
              </div>
              <div className="grid grid-cols-3 gap-2">
                {presets.map((preset) => (
                  <button
                    key={preset.role}
                    onClick={() => handlePresetLogin(preset.email, preset.role)}
                    className="py-2.5 rounded-xl border border-dashed border-blue-300 hover:border-blue-500 bg-blue-50/30 hover:bg-blue-50 text-[10px] sm:text-xs font-bold text-blue-700 text-center transition-all cursor-pointer"
                  >
                    {preset.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Toggle login vs register */}
          {mode !== 'verify' && (
            <div className="text-center text-xs text-slate-500 border-t border-slate-100 pt-4">
              {mode === 'login' ? (
                <>
                  Belum punya akun?{' '}
                  <button onClick={() => setMode('register')} className="text-blue-600 hover:underline font-semibold">
                    Daftar di Sini
                  </button>
                </>
              ) : (
                <>
                  Sudah punya akun?{' '}
                  <button onClick={() => setMode('login')} className="text-blue-600 hover:underline font-semibold">
                    Masuk di Sini
                  </button>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
