import { aboutFeatures } from "@/data/aboutFeatures";

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative scroll-mt-16 overflow-hidden bg-white pb-32 pt-8"
    >
      <div className="pointer-events-none absolute bottom-0 left-0 h-full w-1/3 opacity-5">
        <span className="material-symbols-outlined text-orange-500 text-[40rem]">
          auto_stories
        </span>
      </div>

      <div className="relative mx-auto max-w-7xl px-5 md:px-16">
        <h2 className="font-display text-4xl text-black md:text-5xl">
          Hakkımızda
        </h2>
        <div className="mt-6 h-1 w-20 bg-orange-500" />

        <div className="mt-8 max-w-3xl space-y-6 text-lg leading-relaxed text-black/70">
          <p>
            Merkür Müzik olarak, müziğin evrensel dilini ve dönüştürücü
            gücünü her yaştan sanatseverle buluşturmak amacıyla yola çıktık.
            T.C. Millî Eğitim Bakanlığı (MEB) onaylı bir kurum olmanın
            verdiği sorumlulukla; çocuklara, gençlere ve ruhunu müzikle
            beslemek isteyen tüm yetişkinlere profesyonel bir çatı altında
            enstrüman kursları veriyoruz.
          </p>
          <p>
            Alanında uzman, konservatuvar mezunu ve pedagojik formasyona
            sahip profesyonel eğitmen kadromuzla, sadece teknik bir eğitim
            sunmuyor; aynı zamanda öğrencilerimizin sanatsal vizyonlarını
            geliştirmeyi ve yaratıcılıklarını açığa çıkarmayı hedefliyoruz.
          </p>
        </div>

        <h3 className="mt-16 font-display text-2xl text-black md:text-3xl">
          Neden Merkür Müzik?
        </h3>
        <div className="mt-4 h-1 w-16 bg-orange-500" />

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {aboutFeatures.map((feature) => (
            <div
              key={feature.id}
              className="rounded-sm border border-black/10 bg-white p-6 md:p-8"
            >
              <span className="material-symbols-outlined mb-4 block text-3xl text-orange-500">
                {feature.icon}
              </span>
              <h4 className="mb-2 font-display text-lg text-black">
                {feature.title}
              </h4>
              <p className="text-sm leading-relaxed text-black/70">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-3xl space-y-6 text-lg leading-relaxed text-black/70">
          <p>
            Bizim için müzik; yalnızca notalardan ibaret değil, bir yaşam
            biçimi ve kendini ifade etme şeklidir. Yeteneklerinizi keşfetmek,
            profesyonel bir rehberlikle müzikal hedeflerinize ulaşmak veya
            sadece hayatın koşturmacasına sanat dolu bir mola vermek
            istiyorsanız doğru yerdesiniz.
          </p>
          <p>
            Merkür Müzik ailesi olarak, notaların büyülü dünyasında kendi
            hikayesini yazmak isteyen herkesi samimi ve ilham dolu
            akademimize davet ediyoruz.
          </p>
        </div>

        <p className="mt-10 font-display text-2xl text-orange-500 md:text-3xl">
          Geleceğinize bir nota bırakın...
        </p>
      </div>
    </section>
  );
}
