export function ContactSection() {
  return (
    // Section background stays clean white
    <section
      id="contact"
      className="flex w-full items-center justify-center bg-white pb-24 pt-8"
    >
      <div className="mx-auto w-full max-w-7xl px-5 md:px-16">
        <div className="relative flex flex-col items-center overflow-hidden rounded-sm border border-black/10 bg-gray-50 p-12 text-center md:p-24">
          <div className="absolute left-0 top-0 h-1 w-full bg-linear-to-r from-transparent via-orange-500 to-transparent opacity-50" />

          <h2 className="mb-12 font-display text-4xl text-black md:text-5xl">
            İletişim
          </h2>

          <div className="grid w-full max-w-4xl grid-cols-1 gap-12 sm:grid-cols-2">
            {/* Phone */}
            <div className="space-y-4">
              <h3 className="flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-widest text-orange-500 sm:justify-start">
                <span className="material-symbols-outlined text-lg">call</span>
                Bize Ulaşın
              </h3>
              <p className="text-2xl text-black transition-colors hover:text-orange-500">
                <a href="tel:05514708202">0551 470 82 02</a>
              </p>
            </div>

            {/* Address */}
            <div className="space-y-4">
              <h3 className="flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-widest text-orange-500 sm:justify-start">
                <span className="material-symbols-outlined text-lg">
                  location_on
                </span>
                Adres
              </h3>
              <p className="text-black/80">
                Merkez, Nurtanesi Sokağı 11/A, 34782 Çekmeköy/İstanbul
              </p>
            </div>

            {/* Working Hours */}
            <div className="space-y-4">
              <h3 className="flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-widest text-orange-500 sm:justify-start">
                <span className="material-symbols-outlined text-lg">
                  schedule
                </span>
                Çalışma Saatleri
              </h3>
              <ul className="space-y-2 text-black/80">
                <li className="pt-2 font-bold text-orange-500">
                  PAZARTESİ GÜNÜ KAPALI
                </li>
                <li>
                  <span className="font-semibold text-black">Hafta İçi:</span>{" "}
                  10.30 - 20.00
                </li>
                <li>
                  <span className="font-semibold text-black">Hafta Sonu:</span>{" "}
                  10.00 - 20.00
                </li>
              </ul>
            </div>

            {/* Instagram */}
            <div className="space-y-4">
              <h3 className="flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-widest text-orange-500 sm:justify-start">
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
                Instagram
              </h3>
              <p className="text-lg text-black transition-colors hover:text-orange-500 sm:text-2xl">
                <a
                  href="https://www.instagram.com/merkurmuzikakademisi/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @merkurmuzikakademisi
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
