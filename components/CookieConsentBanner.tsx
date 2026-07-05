"use client";

import { useSyncExternalStore } from "react";
import { usePrivacyModal } from "@/components/PrivacyModalContext";

const COOKIE_CONSENT_STORAGE_KEY = "cookie-consent";

type ConsentListener = () => void;
const consentListeners = new Set<ConsentListener>();

function subscribeToConsent(listener: ConsentListener) {
  consentListeners.add(listener);
  return () => consentListeners.delete(listener);
}

function getConsentSnapshot() {
  return localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY);
}

function getConsentServerSnapshot() {
  // Sunucuda localStorage yok; henüz bilinmiyor olarak işaretle (banner gizli kalır).
  return "unknown";
}

function setConsent(value: "accepted" | "rejected") {
  localStorage.setItem(COOKIE_CONSENT_STORAGE_KEY, value);
  consentListeners.forEach((listener) => listener());
}

export function CookieConsentBanner() {
  const { openPrivacyModal } = usePrivacyModal();
  const consent = useSyncExternalStore(
    subscribeToConsent,
    getConsentSnapshot,
    getConsentServerSnapshot,
  );
  const isVisible = consent === null;

  const handleAccept = () => {
    setConsent("accepted");

    // TODO: Kabul Et - Google Analytics'i burada başlatın.
    // Örnek: gtag('consent', 'update', { analytics_storage: 'granted' });
    // veya GA script tag'ini burada dinamik olarak enjekte edin.
  };

  const handleReject = () => {
    setConsent("rejected");

    // TODO: Reddet - Google Analytics'in devre dışı kaldığından emin olun.
    // Örnek: gtag('consent', 'update', { analytics_storage: 'denied' });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-90 border-t border-black/10 bg-white/95 p-5 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] backdrop-blur-md md:p-6">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 md:flex-row md:justify-between">
        <p className="text-center text-sm leading-relaxed text-black/70 md:text-left">
          Sitemizde kullanıcı deneyimini geliştirmek ve trafiği analiz etmek
          amacıyla zorunlu ve analitik çerezler kullanılmaktadır. Detaylı
          bilgi için{" "}
          <button
            type="button"
            onClick={openPrivacyModal}
            className="font-semibold text-orange-500 underline underline-offset-2 transition-colors hover:text-black"
          >
            Gizlilik ve Çerez Politikası
          </button>{" "}
          sayfamızı inceleyebilirsiniz.
        </p>

        <div className="flex shrink-0 gap-3">
          <button
            type="button"
            onClick={handleReject}
            className="rounded-sm border border-black/10 px-5 py-2 text-sm font-semibold text-black transition-colors hover:border-black/30"
          >
            Reddet
          </button>
          <button
            type="button"
            onClick={handleAccept}
            className="rounded-sm bg-orange-500 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-orange-600"
          >
            Kabul Et
          </button>
        </div>
      </div>
    </div>
  );
}
