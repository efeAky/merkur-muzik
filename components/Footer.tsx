export function Footer() {
  return (
    <footer className="mt-auto w-full border-t border-outline-variant bg-surface-container-lowest">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-5 py-6 md:flex-row md:px-16">
        <div className="flex flex-col items-center gap-4 md:items-start">
          <div className="font-display text-lg text-primary">Merkür Müzik</div>
          <p className="max-w-xs text-center text-sm text-on-surface-variant md:text-left">
            Sanatın ve eğitimin buluştuğu nokta. Müzikle dolu bir gelecek için
            buradayız.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 text-sm">
          <a
            href="#"
            className="text-on-surface-variant transition-colors hover:text-primary"
          >
            Gizlilik Politikası
          </a>
          <a
            href="#"
            className="text-on-surface-variant transition-colors hover:text-primary"
          >
            Kullanım Şartları
          </a>
          <a
            href="#"
            className="text-on-surface-variant transition-colors hover:text-primary"
          >
            SSS
          </a>
          <a
            href="#"
            className="text-on-surface-variant transition-colors hover:text-primary"
          >
            KVKK
          </a>
        </div>

        <div className="flex gap-4">
          <a
            href="#"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-outline-variant text-on-surface-variant transition-all hover:border-secondary hover:text-secondary"
          >
            <span className="material-symbols-outlined text-sm">language</span>
          </a>
          <a
            href="#"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-outline-variant text-on-surface-variant transition-all hover:border-secondary hover:text-secondary"
          >
            <span className="material-symbols-outlined text-sm">share</span>
          </a>
        </div>
      </div>

      <div className="border-t border-outline-variant/10 py-6 text-center text-xs uppercase tracking-widest text-on-surface-variant/50">
        © 2026 Merkür Müzik Akademisi. Tüm Hakları Saklıdır.
      </div>
    </footer>
  );
}