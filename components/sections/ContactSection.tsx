export function ContactSection() {
  return (
    // Section background stays clean white
    <section 
      id="contact" 
      className="flex min-h-screen w-full items-center justify-center bg-white py-24"
    >
      <div className="mx-auto w-full max-w-7xl px-5 md:px-16">
        {/* Box uses the consistent beige tone */}
        <div className="relative flex flex-col items-center border border-secondary/20 bg-surface-container-high p-12 text-center shadow-lg md:p-24">
          
          <div className="absolute left-0 top-0 h-1 w-full bg-linear-to-r from-transparent via-secondary to-transparent opacity-50" />

          <h2 className="mb-12 font-display text-4xl text-on-surface md:text-5xl">
            İletişim
          </h2>

          <div className="grid w-full max-w-4xl grid-cols-1 gap-12 md:grid-cols-2">
            {/* Phone */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-widest text-secondary">
                Bize Ulaşın
              </h3>
              <p className="text-2xl text-on-surface transition-colors hover:text-secondary">
                <a href="tel:05514708202">0551 470 82 02</a>
              </p>
            </div>

            {/* Working Hours */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-widest text-secondary">
                Çalışma Saatleri
              </h3>
              <ul className="space-y-2 text-on-surface-variant">
                <li>
                  <span className="font-semibold text-on-surface">Hafta İçi:</span> 10.30 - 20.00
                </li>
                <li>
                  <span className="font-semibold text-on-surface">Hafta Sonu:</span> 10.00 - 20.00
                </li>
                <li className="pt-2 font-bold text-secondary">
                  PAZARTESİ GÜNÜ KAPALI
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}