/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { CreditCard, QrCode, Smartphone, X, ShieldCheck, CheckCircle } from 'lucide-react';
import { FirestoreSimulator } from '../lib/firestoreSimulator';

interface MidtransSimulatorProps {
  packageName: string;
  price: number;
  onClose: () => void;
  onPaymentSuccess: () => void;
}

export default function MidtransSimulator({ packageName, price, onClose, onPaymentSuccess }: MidtransSimulatorProps) {
  const [method, setMethod] = useState<'qris' | 'va' | 'ewallet' | null>(null);
  const [step, setStep] = useState<'select' | 'pay' | 'success'>('select');
  const [timeLeft, setTimeLeft] = useState(120); // 2 minutes countdown
  const [vaNumber, setVaNumber] = useState('');

  useEffect(() => {
    if (step === 'pay') {
      const interval = setInterval(() => {
        setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [step]);

  const handleSelectMethod = (selected: 'qris' | 'va' | 'ewallet') => {
    setMethod(selected);
    setStep('pay');
    if (selected === 'va') {
      // Generate standard VA number
      setVaNumber(`887608${Math.floor(1000000000 + Math.random() * 9000000000)}`);
    }
  };

  const handleSimulateSuccess = () => {
    try {
      FirestoreSimulator.processPayment(packageName, price, method || 'QRIS');
      setStep('success');
      setTimeout(() => {
        onPaymentSuccess();
      }, 2000);
    } catch (e) {
      alert('Gagal memproses pembayaran.');
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 backdrop-blur-sm p-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 flex flex-col animate-in fade-in zoom-in-95 duration-200">
        
        {/* Midtrans style header */}
        <div className="bg-slate-900 text-white p-5 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 text-white font-extrabold px-2.5 py-1 rounded text-sm">M</div>
            <div>
              <h3 className="text-sm font-extrabold tracking-wide">MIDTRANS GATEWAY</h3>
              <p className="text-[10px] text-slate-400">Pembayaran Aman & Instan</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Transaction Summary Info */}
        <div className="bg-blue-50 border-b border-blue-100 p-4 flex justify-between items-center text-xs">
          <div>
            <span className="text-slate-500 block">Paket Pilihan</span>
            <span className="font-bold text-slate-800 text-sm">{packageName}</span>
          </div>
          <div className="text-right">
            <span className="text-slate-500 block">Total Tagihan</span>
            <span className="font-extrabold text-blue-700 text-sm">Rp {price.toLocaleString('id-ID')}</span>
          </div>
        </div>

        {/* Payment Main Area */}
        <div className="p-6 flex-1 overflow-y-auto max-h-[70vh]">
          {step === 'select' && (
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-slate-700 mb-2">Pilih Metode Pembayaran:</h4>
              
              <button
                onClick={() => handleSelectMethod('qris')}
                className="w-full p-4 border border-slate-200 hover:border-blue-500 hover:bg-blue-50/20 rounded-2xl flex items-center gap-4 transition-all text-left cursor-pointer"
              >
                <div className="bg-orange-50 text-orange-600 p-3 rounded-xl">
                  <QrCode className="w-6 h-6" />
                </div>
                <div>
                  <span className="font-bold text-slate-800 text-sm block">QRIS (Gopay, OVO, ShopeePay, dll)</span>
                  <span className="text-xs text-slate-500">Bayar instan dengan scan kode QR</span>
                </div>
              </button>

              <button
                onClick={() => handleSelectMethod('va')}
                className="w-full p-4 border border-slate-200 hover:border-blue-500 hover:bg-blue-50/20 rounded-2xl flex items-center gap-4 transition-all text-left cursor-pointer"
              >
                <div className="bg-blue-50 text-blue-600 p-3 rounded-xl">
                  <CreditCard className="w-6 h-6" />
                </div>
                <div>
                  <span className="font-bold text-slate-800 text-sm block">Virtual Account (Transfer Bank)</span>
                  <span className="text-xs text-slate-500">BNI, Mandiri, BCA, BRI, dll</span>
                </div>
              </button>

              <button
                onClick={() => handleSelectMethod('ewallet')}
                className="w-full p-4 border border-slate-200 hover:border-blue-500 hover:bg-blue-50/20 rounded-2xl flex items-center gap-4 transition-all text-left cursor-pointer"
              >
                <div className="bg-emerald-50 text-emerald-600 p-3 rounded-xl">
                  <Smartphone className="w-6 h-6" />
                </div>
                <div>
                  <span className="font-bold text-slate-800 text-sm block">E-Wallet Direct Link</span>
                  <span className="text-xs text-slate-500">Aktivasi instan saldo dompet digital</span>
                </div>
              </button>

              <div className="flex justify-center items-center gap-1.5 pt-4 text-[10px] text-slate-400 uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Enkripsi 256-bit Terjamin Aman</span>
              </div>
            </div>
          )}

          {step === 'pay' && (
            <div className="text-center space-y-6 py-2">
              <div className="flex justify-between items-center bg-slate-50 p-3 rounded-xl text-xs">
                <span className="text-slate-500 font-semibold">Sisa Waktu Bayar</span>
                <span className="text-red-600 font-bold text-sm">{formatTime(timeLeft)}</span>
              </div>

              {method === 'qris' && (
                <div className="space-y-4">
                  <div className="border border-slate-100 p-4 rounded-2xl bg-white w-48 h-48 mx-auto shadow-inner flex items-center justify-center">
                    {/* Simulated elegant QR code visual */}
                    <div className="relative">
                      <div className="w-40 h-40 bg-slate-800 rounded flex flex-wrap p-1 gap-1">
                        {Array.from({ length: 16 }).map((_, i) => (
                          <div
                            key={i}
                            className={`w-9 h-9 rounded-sm ${
                              (i % 3 === 0 || i === 15 || i === 0 || i === 5) ? 'bg-white' : 'bg-slate-900 border border-slate-700'
                            }`}
                          ></div>
                        ))}
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="bg-blue-600 text-white font-extrabold px-1 text-[10px] rounded shadow-md">QRIS</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed max-w-xs mx-auto">
                    Silakan buka aplikasi e-wallet Anda (Gopay, OVO, Dana, LinkAja) atau m-Banking Anda, lalu scan QR code di atas.
                  </p>
                </div>
              )}

              {method === 'va' && (
                <div className="space-y-4">
                  <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 text-left">
                    <span className="text-[10px] text-slate-400 font-bold block uppercase tracking-wider mb-1">Nomor Virtual Account BNI</span>
                    <div className="flex justify-between items-center">
                      <span className="font-mono font-bold text-slate-800 text-lg tracking-widest">{vaNumber}</span>
                      <button
                        onClick={() => navigator.clipboard.writeText(vaNumber)}
                        className="text-xs text-blue-600 hover:text-blue-800 font-semibold cursor-pointer"
                      >
                        Salin No
                      </button>
                    </div>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed text-left max-w-sm mx-auto space-y-1">
                    <span className="font-bold block text-slate-700">Cara Pembayaran:</span>
                    <span>1. Buka m-Banking BNI Anda.</span>
                    <span>2. Pilih menu Transfer &gt; Virtual Account Billing.</span>
                    <span>3. Masukkan nomor VA di atas dan masukkan jumlah yang tepat.</span>
                  </p>
                </div>
              )}

              {method === 'ewallet' && (
                <div className="space-y-4">
                  <div className="space-y-2 max-w-xs mx-auto">
                    <input
                      type="tel"
                      placeholder="Masukkan No HP Terdaftar (e.g. 08123...)"
                      className="w-full text-center px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-blue-500"
                    />
                    <p className="text-[10px] text-slate-400">Notifikasi checkout instan akan dikirim langsung ke dompet digital Anda.</p>
                  </div>
                </div>
              )}

              <div className="space-y-3 pt-4">
                <button
                  onClick={handleSimulateSuccess}
                  className="w-full py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold shadow-lg shadow-emerald-100 transition-colors cursor-pointer text-sm"
                >
                  Simulasikan Klik Bayar Sukses
                </button>
                <button
                  onClick={() => setStep('select')}
                  className="text-xs text-slate-400 hover:text-slate-600 font-semibold cursor-pointer block mx-auto"
                >
                  Pilih Metode Lain
                </button>
              </div>
            </div>
          )}

          {step === 'success' && (
            <div className="text-center space-y-4 py-8 animate-bounce-short">
              <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h4 className="text-xl font-bold text-slate-800">Pembayaran Berhasil!</h4>
              <p className="text-sm text-slate-500 leading-relaxed">
                Terima kasih, pembayaran Anda telah divalidasi secara real-time. Akun Premium VIP Anda telah aktif!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
