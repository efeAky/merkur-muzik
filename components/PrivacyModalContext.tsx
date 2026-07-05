"use client";

import { createContext, useContext, useState } from "react";
import { LegalModal } from "@/components/LegalModal";
import { PrivacyPolicyContent } from "@/components/legal/PrivacyPolicyContent";

interface PrivacyModalContextValue {
  openPrivacyModal: () => void;
}

const PrivacyModalContext = createContext<PrivacyModalContextValue | null>(
  null,
);

export function PrivacyModalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <PrivacyModalContext.Provider
      value={{ openPrivacyModal: () => setIsOpen(true) }}
    >
      {children}
      <LegalModal
        title="Gizlilik ve Çerez Politikası"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <PrivacyPolicyContent />
      </LegalModal>
    </PrivacyModalContext.Provider>
  );
}

export function usePrivacyModal() {
  const context = useContext(PrivacyModalContext);
  if (!context) {
    throw new Error(
      "usePrivacyModal must be used within a PrivacyModalProvider",
    );
  }
  return context;
}
