import React from 'react';
import { CreditCard, Landmark, Wallet, X, CheckCircle2 } from 'lucide-react';

interface PaymentModalProps {
  onClose: () => void;
}

const PaymentModal: React.FC<PaymentModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-[100] bg-slate-950/80 backdrop-blur-sm p-4 flex items-center justify-center animate-in fade-in duration-200">
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl border border-slate-100 dark:border-slate-800 relative">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors cursor-pointer"
          aria-label="Tutup"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-6">
          <div className="w-12 h-12 bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 rounded-2xl flex items-center justify-center mx-auto mb-3 border border-amber-200/60 dark:border-amber-800">
            <CreditCard className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-bold font-display text-slate-900 dark:text-slate-50 mb-2">Upgrade Akses Paket Premium</h2>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            Dapatkan akses penuh ke Try Out UTBK Paket 1, 2, 3, bank soal terkurasi, dan tutor AI 24/7.
          </p>
        </div>

        <div className="space-y-3">
          <div className="p-4 border border-slate-200 dark:border-slate-700/80 bg-slate-50/50 dark:bg-slate-800/60 rounded-2xl flex items-center gap-4 hover:border-blue-500/50 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
              <Landmark className="w-6 h-6" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-bold text-slate-900 dark:text-slate-50 text-sm">Transfer Virtual Account / Bank</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-mono mt-0.5">BCA / Mandiri / BNI / BRI</p>
            </div>
          </div>
          
          <div className="p-4 border border-slate-200 dark:border-slate-700/80 bg-slate-50/50 dark:bg-slate-800/60 rounded-2xl flex items-center gap-4 hover:border-emerald-500/50 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
              <Wallet className="w-6 h-6" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-bold text-slate-900 dark:text-slate-50 text-sm">QRIS & E-Wallet Instan</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-mono mt-0.5">GoPay, OVO, DANA, ShopeePay</p>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-4">
          <div className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
            <span>Aktivasi Otomatis Instan</span>
          </div>
          <button
            onClick={onClose}
            className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl shadow-md transition-all cursor-pointer"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;

