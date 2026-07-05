import Image from "next/image";

export function HomeSection() {
  return (
    <section
      id="home"
      className="relative scroll-mt-16 overflow-hidden bg-white pb-32 pt-16"
    >
      <div className="pointer-events-none absolute right-0 top-0 h-full w-1/3 opacity-5">
        <span className="material-symbols-outlined text-orange-500 text-[40rem]">
          music_note
        </span>
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-20 px-5 md:px-16 lg:grid-cols-2">
        <div className="space-y-8">
          <h2 className="font-display text-4xl text-black md:text-5xl">
            Kökleri Sanatla <br />
            Beslenen Bir Miras
          </h2>
          <div className="h-1 w-20 bg-orange-500" />
          <p className="text-lg leading-relaxed text-black/70">
            Merkür Sanat, on yıllardır süregelen müzikal mükemmeliyet tutkusuyla
            kurulmuştur. Biz sadece notaları değil, müziğin arkasındaki
            felsefeyi ve ruhu öğretiyoruz. Akademimiz, dünyanın en saygın
            konservatuvarlarından mezun eğitmen kadrosuyla, her yaştan
            sanatsevere kapılarını açmaktadır.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 lg:mt-10">
          {/* Images/Stats content remains same */}
          <div className="space-y-4">
            <div className="relative h-64 overflow-hidden rounded-sm border border-black/10">
              <Image
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 25vw, 50vw"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDizHipof3-5SGLYlLq_CN6Qsv8ma-Hnsk_lZJilSyBr1rg6Tje4fFihVXXxYM7SEF6mJA4zOYwcd0aYa6pF9k1Vhj90LPuVVf9-64MydcwidnZXlMZl8zF3xm8wuDUIS8RTEDWHlqPKCtV2gBA8QPq416l8YqnYqdwcfvWYJM5OAHmLJdlOm8joPCJtBeHiCnaQiMWeqrEYcu6dv8f5Xt4TRVbc2-O3fioyEfK2SjTl46x5XhudH6w4g"
                alt="Piano"
              />
            </div>
            <div className="flex flex-col items-center rounded-sm border border-black/5 bg-gray-100 p-4 text-center md:p-8">
              <div className="mb-2 font-display text-3xl text-orange-500 md:text-5xl">
                25+
              </div>
              <div className="text-[10px] uppercase tracking-widest text-black/60 md:text-xs">
                Yıllık Deneyim
              </div>
            </div>
          </div>
          <div className="space-y-4 pt-12">
            <div className="flex flex-col items-center rounded-sm border border-gray-950 bg-gray-950 p-4 text-center md:p-8">
              <div className="mb-2 font-display text-3xl text-orange-500 md:text-5xl">
                500+
              </div>
              <div className="text-[10px] uppercase tracking-widest text-white/80 md:text-xs">
                Mezun Sanatçı
              </div>
            </div>
            <div className="relative h-64 overflow-hidden rounded-sm border border-black/10">
              <Image
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 25vw, 50vw"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSpE_ADNUZoDrFMMY4mgcdSiW-AxB-Ek_9Ub5ThoXrcQzhji__I-TNW1bBMZ9PTW0p2ZZVfg0fVZp0Asg4Fjs2Vi2i2z5fpKwxvhiIA-UfqSCJUQo5-yKDQI6wkLaYwR5aOkCJTB6Zk2TrnSrZf2BtI3vy641fHQR32XjQn7r50O8ozUfdUS7il7Osl8mKblcZeRDflubpPLDDE973KM7fs4thvqziW7qWorWdNpmFLrVMV3NlN1fCsQ"
                alt="Cello"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
