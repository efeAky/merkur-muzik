"use client";

import { useState } from "react";
import { LegalModal } from "@/components/LegalModal";
import { KvkkContent } from "@/components/legal/KvkkContent";
import { usePrivacyModal } from "@/components/PrivacyModalContext";

export function Footer() {
  const [isKvkkOpen, setIsKvkkOpen] = useState(false);
  const { openPrivacyModal } = usePrivacyModal();

  return (
    <footer className="mt-auto w-full border-t border-black/10 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-5 py-6 md:flex-row md:px-16">
        <div className="flex flex-col items-center gap-4 md:items-start">
          <div className="font-display text-lg text-black">Merkür Sanat</div>
          <p className="max-w-xs text-center text-sm text-black/60 md:text-left">
            Sanatın ve eğitimin buluştuğu nokta. Müzikle dolu bir gelecek için
            buradayız.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 text-sm">
          <button
            type="button"
            onClick={openPrivacyModal}
            className="text-black/60 transition-colors hover:text-orange-500"
          >
            Gizlilik ve Çerez Politikası
          </button>
          <button
            type="button"
            onClick={() => setIsKvkkOpen(true)}
            className="text-black/60 transition-colors hover:text-orange-500"
          >
            KVKK Aydınlatma Metni
          </button>
        </div>

        <div className="flex gap-4">
          <a
            href="https://www.instagram.com/merkurmuzikakademisi/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 text-black/60 transition-all hover:border-orange-500 hover:text-orange-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4.5 w-4.5"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>
        </div>
      </div>

      <div className="border-t border-black/10 py-6 text-center text-xs uppercase tracking-widest text-black/40">
        © 2026 Merkür Müzik Akademisi. Tüm Hakları Saklıdır.
      </div>

      <LegalModal
        title="KVKK Aydınlatma Metni"
        isOpen={isKvkkOpen}
        onClose={() => setIsKvkkOpen(false)}
      >
        <KvkkContent />
      </LegalModal>
    </footer>
  );
}
