interface HomeSectionProps {}

export function HomeSection({}: HomeSectionProps) {
  return (
    <section
      id="home"
      className="relative scroll-mt-16 overflow-hidden bg-surface-container-lowest pb-32 pt-16"
    >
      <div className="pointer-events-none absolute right-0 top-0 h-full w-1/3 opacity-5">
        <span className="material-symbols-outlined text-secondary text-[40rem]">
          music_note
        </span>
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-20 px-5 md:px-16 lg:grid-cols-2">
        <div className="space-y-8">
          <h2 className="font-display text-4xl text-primary md:text-5xl">
            Kökleri Sanatla <br />
            Beslenen Bir Miras
          </h2>
          <div className="h-1 w-20 bg-secondary" />
          <p className="text-lg leading-relaxed text-on-surface-variant">
            Merkür Müzik, on yıllardır süregelen müzikal mükemmeliyet
            tutkusuyla kurulmuştur. Biz sadece notaları değil, müziğin
            arkasındaki felsefeyi ve ruhu öğretiyoruz. Akademimiz, dünyanın en
            saygın konservatuvarlarından mezun eğitmen kadrosuyla, her yaştan
            sanatsevere kapılarını açmaktadır.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 lg:mt-10">
          {/* Images/Stats content remains same */}
          <div className="space-y-4">
            <div className="h-64 overflow-hidden rounded-sm border border-outline-variant/30">
              <img className="h-full w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDizHipof3-5SGLYlLq_CN6Qsv8ma-Hnsk_lZJilSyBr1rg6Tje4fFihVXXxYM7SEF6mJA4zOYwcd0aYa6pF9k1Vhj90LPuVVf9-64MydcwidnZXlMZl8zF3xm8wuDUIS8RTEDWHlqPKCtV2gBA8QPq416l8YqnYqdwcfvWYJM5OAHmLJdlOm8joPCJtBeHiCnaQiMWeqrEYcu6dv8f5Xt4TRVbc2-O3fioyEfK2SjTl46x5XhudH6w4g" alt="Piano" />
            </div>
            <div className="border border-secondary/20 bg-surface-container-high p-8">
              <div className="mb-2 font-display text-5xl text-secondary">25+</div>
              <div className="text-xs uppercase tracking-widest text-on-surface-variant">Yıllık Deneyim</div>
            </div>
          </div>
          <div className="space-y-4 pt-12">
            <div className="border border-secondary/20 bg-primary-container p-8">
              <div className="mb-2 font-display text-5xl text-on-primary-container">500+</div>
              <div className="text-xs uppercase tracking-widest text-on-primary-container/80">Mezun Sanatçı</div>
            </div>
            <div className="h-64 overflow-hidden rounded-sm border border-outline-variant/30">
              <img className="h-full w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSpE_ADNUZoDrFMMY4mgcdSiW-AxB-Ek_9Ub5ThoXrcQzhji__I-TNW1bBMZ9PTW0p2ZZVfg0fVZp0Asg4Fjs2Vi2i2z5fpKwxvhiIA-UfqSCJUQo5-yKDQI6wkLaYwR5aOkCJTB6Zk2TrnSrZf2BtI3vy641fHQR32XjQn7r50O8ozUfdUS7il7Osl8mKblcZeRDflubpPLDDE973KM7fs4thvqziW7qWorWdNpmFLrVMV3NlN1fCsQ" alt="Cello" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}