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
            <a href="tel:05514708202" className="group block space-y-4">
              <h3 className="flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-widest text-orange-500 sm:justify-start">
                <span className="material-symbols-outlined text-lg">call</span>
                Bize Ulaşın
              </h3>
              <p className="text-2xl text-black transition-colors group-hover:text-orange-500">
                0551 470 82 02
              </p>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/905514708202"
              target="_blank"
              rel="noopener noreferrer"
              className="group block space-y-4"
            >
              <h3 className="flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-widest text-orange-500 sm:justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4.5 w-4.5"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884M20.516 3.483C18.245 1.209 15.231 0 12.05 0 5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.427-8.418" />
                </svg>
                WhatsApp
              </h3>
              <p className="text-2xl text-black transition-colors group-hover:text-orange-500">
                0551 470 82 02
              </p>
            </a>

            {/* Address */}
            <a
              href="https://www.google.com/maps/place/Merk%C3%BCr+M%C3%BCzik+ve+Sanat+Akademi/@41.031818,29.1693551,17z/data=!3m1!4b1!4m6!3m5!1s0x14cab7fbe7732fa9:0xf18dbd8d61368257!8m2!3d41.031818!4d29.17193!16s%2Fg%2F11xg7jlzys"
              target="_blank"
              rel="noopener noreferrer"
              className="group block space-y-4"
            >
              <h3 className="flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-widest text-orange-500 sm:justify-start">
                <span className="material-symbols-outlined text-lg">
                  location_on
                </span>
                Adres
              </h3>
              <p className="text-black/80 transition-colors group-hover:text-orange-500">
                Merkez Mahallesi, Nurtanesi Sokağı 11/A - 13/A, 34782 Çekmeköy/İstanbul
              </p>
            </a>

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
            <a
              href="https://www.instagram.com/merkurmuzikakademisi/"
              target="_blank"
              rel="noopener noreferrer"
              className="group block space-y-4"
            >
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
              <p className="text-lg text-black transition-colors group-hover:text-orange-500 sm:text-2xl">
                @merkurmuzikakademisi
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
