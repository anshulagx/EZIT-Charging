"use client";

import { useEffect } from "react";

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  message: string;
}

export default function SuccessModal({ isOpen, onClose, message }: SuccessModalProps) {
  useEffect(() => {
    if (isOpen) {
      const t = setTimeout(onClose, 6000);
      return () => clearTimeout(t);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="bg-[#141414] border border-white/10 rounded-2xl p-8 max-w-md w-full shadow-2xl animate-fade-in-up"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col items-center text-center">
          <div className="w-14 h-14 rounded-2xl bg-ezit-green/15 flex items-center justify-center mb-5">
            <svg className="w-7 h-7 text-ezit-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">Submitted Successfully</h3>
          <p className="text-white/60 text-sm leading-relaxed">{message}</p>
          <button
            onClick={onClose}
            className="mt-6 w-full py-3 rounded-xl bg-white/[0.06] border border-white/10 text-white text-sm font-medium hover:bg-white/10 transition-all duration-300"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
