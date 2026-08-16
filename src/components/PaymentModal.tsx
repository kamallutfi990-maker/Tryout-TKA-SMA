import React from 'react';
import { CreditCard, Landmark, Wallet } from 'lucide-react';

interface PaymentModalProps {
  onClose: () => void;
}

const PaymentModal: React.FC<PaymentModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-[100] bg-slate-950/80 backdrop-blur-sm p-4 flex items-center justify-center">
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 max-w-lg w-full shadow-2xl border border-slate-100 dark:border-slate-800">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4 text-center">Masa Gratis 14 Hari Berakhir</h2>
        <p className="text-slate-600 dark:text-slate-300 mb-6 text-center">
          Silakan lakukan pembayaran untuk melanjutkan akses ke semua fitur eksklusif kami.
        </p>

        <div className="space-y-4">
          <div className="p-4 border dark:border-slate-700 rounded-xl flex items-center gap-4">
            <Landmark className="text-blue-600 dark:text-blue-400 w-8 h-8" />
            <div>
              <p className="font-semibold text-slate-900 dark:text-slate-50">Transfer Bank</p>
              <p className="text-sm text-slate-500 dark:text-slate-400">BCA: 1234567890 a/n PT TKA Indonesia</p>
            </div>
          </div>
          
          <div className="p-4 border dark:border-slate-700 rounded-xl flex items-center gap-4">
            <Wallet className="text-emerald-600 dark:text-emerald-400 w-8 h-8" />
            <div>
              <p className="font-semibold text-slate-900 dark:text-slate-50">QRIS / E-Wallet</p>
              <p className="text-sm text-slate-500 dark:text-slate-400">Scan QR Code atau transfer ke DANA / GoPay: 081234567890</p>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-slate-500 dark:text-slate-400">
          Setelah melakukan pembayaran, silakan hubungi admin untuk aktivasi.
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;
