"use client";

import { useEffect } from "react";

interface LegalModalProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export function LegalModal({
  title,
  isOpen,
  onClose,
  children,
}: LegalModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-100 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative max-h-[80vh] w-full max-w-2xl overflow-y-auto rounded-sm border border-black/10 bg-white p-8 md:p-10"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Kapat"
          className="absolute right-4 top-4 text-black/60 transition-colors hover:text-orange-500"
        >
          <span className="material-symbols-outlined text-2xl">close</span>
        </button>

        <h3 className="pr-8 font-display text-2xl text-black">{title}</h3>
        <div className="mt-3 h-1 w-16 bg-orange-500" />

        <div className="mt-6 space-y-4 text-sm leading-relaxed text-black/70">
          {children}
        </div>
      </div>
    </div>
  );
}
