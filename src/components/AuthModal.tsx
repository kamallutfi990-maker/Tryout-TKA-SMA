/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Mail, Lock, User, GraduationCap, X, AlertCircle } from 'lucide-react';
import { FirestoreSimulator } from '../lib/firestoreSimulator';

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

  // Prefilled presets for instant platform testing
  const presets = [
    { email: 'siswa@tkasma.id', role: 'Siswa' as const, label: 'Siswa (Demo)' },
    { email: 'kamallutfi990@gmail.com', role: 'Guru' as const, label: 'Guru (kamal)' },
    { email: 'kamallutfi990@gmail.com', role: 'Admin' as const, label: 'Admin (kamal)' }
  ];

  const handlePresetLogin = (emailPreset: string, rolePreset: 'Siswa' | 'Guru' | 'Admin') => {
    try {
      const passwordPreset = (rolePreset === 'Admin' || rolePreset === 'Guru') ? '12345678' : undefined;
      const user = FirestoreSimulator.login(emailPreset, rolePreset, passwordPreset);
      onAuthSuccess(user);
    } catch (err: any) {
      setError(err.message || 'Gagal login demo');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccessMsg('');

    if (!email) {
      setError('Email wajib diisi.');
      return;
    }

    if (mode === 'login') {
      try {
        const user = FirestoreSimulator.login(email, role, password);
        onAuthSuccess(user);
      } catch (err: any) {
        setError(err.message || 'Gagal masuk.');
      }
    } else if (mode === 'register') {
      if (!displayName) {
        setError('Nama lengkap wajib diisi.');
        return;
      }
      if (password.length < 6) {
        setError('Sandi minimal 6 karakter.');
        return;
      }
      try {
        // Validate credentials beforehand to catch restricted role access early
        FirestoreSimulator.validateRegistration(email, role, password);
        setMode('verify'); // Transition to email verification
      } catch (err: any) {
        setError(err.message || 'Gagal mendaftar.');
      }
    } else if (mode === 'forgot') {
      setSuccessMsg(`Tautan pemulihan kata sandi telah dikirim ke ${email}. Silakan cek kotak masuk Anda.`);
    }
  };

  const handleVerifySuccess = () => {
    try {
      // Complete registration with password passed
      const user = FirestoreSimulator.register(email, displayName, role, password);
      onAuthSuccess(user);
    } catch (err: any) {
      setError(err.message || 'Gagal mendaftar.');
      setMode('register');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 flex flex-col animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
          <div>
            <h2 className="text-xl font-bold text-slate-900">
              {mode === 'login' && 'Masuk Akun'}
              {mode === 'register' && 'Daftar Akun'}
              {mode === 'forgot' && 'Reset Kata Sandi'}
              {mode === 'verify' && 'Verifikasi Email'}
            </h2>
            <p className="text-xs text-slate-500 mt-1">Platform CBT & AKADEMIK TKA SMA</p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors"
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
                className="w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold shadow-lg shadow-blue-100 transition-colors cursor-pointer text-sm"
              >
                {mode === 'login' && 'Masuk'}
                {mode === 'register' && 'Daftar Sekarang'}
                {mode === 'forgot' && 'Kirim Link Reset'}
              </button>

              {/* Google Login Simulation */}
              {mode !== 'forgot' && (
                <button
                  type="button"
                  onClick={() => handlePresetLogin('google-user@gmail.com', 'Siswa')}
                  className="w-full py-3 border border-slate-200 rounded-xl bg-slate-50/50 hover:bg-slate-50 text-slate-700 text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <span className="text-lg">Google Login</span>
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
