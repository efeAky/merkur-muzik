import Image from "next/image";
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

        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-[7fr_3fr] lg:gap-6">
          <div className="space-y-6 text-lg leading-relaxed text-black/70">
            <p>
              Merkür Müzik ve Sanat Akademisi olarak, müziğin ve sanatın
              birleştirici, iyileştirici ve dönüştürücü gücüne inanıyoruz.
              Kurulduğumuz günden bu yana, her yaştan sanatseveri hayalleriyle
              buluşturmak, içlerindeki yaratıcı potansiyeli açığa çıkarmak ve
              bu yolculukta onlara profesyonel bir rehber olmak için tutkuyla
              çalışıyoruz.
            </p>
            <p>
              Akademimiz, sadece bir eğitim merkezi değil; sanatın her
              branşına duyulan sevginin akademik bir disiplinle harmanlandığı,
              üretken ve ilham dolu bir yaşam alanıdır.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/images/meb_logo.png"
              alt="MEB Logo"
              width={96}
              height={96}
              className="h-24 w-auto sm:h-28 md:h-32 lg:h-40"
            />
          </div>
        </div>

        <h3 className="mt-16 font-display text-2xl text-black md:text-3xl">
          MEB Standartlarında Güvenilir ve Nitelikli Eğitim
        </h3>
        <div className="mt-4 h-1 w-16 bg-orange-500" />

        <div className="mt-8 max-w-3xl space-y-6 text-lg leading-relaxed text-black/70">
          <p>
            Geleceğin sanatçılarını yetiştirirken kaliteden ve doğruluktan
            ödün vermiyoruz. T.C. Milli Eğitim Bakanlığı&apos;na (MEB) bağlı
            bir kurum olarak, tüm eğitim programlarımızı bakanlık
            standartlarına uygun, pedagojik olarak onaylanmış ve modern
            metotlarla desteklenmiş müfredatlarla yürütüyoruz.
          </p>
          <p>
            Öğrencilerimize sunduğumuz bu resmi güvence, aldıkları eğitimin
            kalitesini tescillerken, onlara hem ulusal hem de uluslararası
            alanda kapılar açan güçlü bir referans olmaktadır.
          </p>
        </div>

        <h3 className="mt-16 font-display text-2xl text-black md:text-3xl">
          Uluslararası Başarıya Giden Yol: LCM ve Akademik Sınav Hazırlığı
        </h3>
        <div className="mt-4 h-1 w-16 bg-orange-500" />

        <div className="mt-8 max-w-3xl space-y-6 text-lg leading-relaxed text-black/70">
          <p>
            Sanat eğitimini küresel standartlara taşımayı hedefleyen
            akademimiz, öğrencilerinin yeteneklerini uluslararası
            platformlarda da taçlandırmaktadır.
          </p>
          <ul className="space-y-3">
            <li>
              <span className="font-semibold text-black">
                Uluslararası Sertifika:
              </span>{" "}
              Başta İngiltere kökenli LCM (London College of Music) olmak
              üzere, dünya çapında geçerliliğe sahip prestijli müzik ve
              sanat sınavlarına hazırlık programları sunuyoruz.
            </li>
            <li>
              <span className="font-semibold text-black">
                Birebir Mentorluk:
              </span>{" "}
              Sınav müfredatlarına tam uyumlu teknik çalışmalar, teori
              (SOLFEJ) eğitimleri ve performans pratikleri ile
              öğrencilerimizin sınav süreçlerini yüksek başarı oranlarıyla
              tamamlamalarını sağlıyoruz.
            </li>
            <li>
              <span className="font-semibold text-black">
                Geleceğe Yatırım:
              </span>{" "}
              Elde edilen bu uluslararası diplomalar, öğrencilerimizin
              akademik ve profesyonel kariyerlerinde dünya çapında kabul
              gören dev birer adım niteliği taşımaktadır.
            </li>
          </ul>
        </div>

        <h3 className="mt-16 font-display text-2xl text-black md:text-3xl">
          Neden Merkür Müzik ve Sanat Akademisi?
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
            Bizim için sanat; yalnızca teknik bir beceri değil, bir yaşam
            biçimi ve kendini ifade etme şeklidir. Yeteneklerinizi keşfetmek,
            profesyonel bir rehberlikle sanatsal hedeflerinize ulaşmak veya
            sadece hayatın koşturmacasına ilham dolu bir mola vermek
            istiyorsanız doğru yerdesiniz.
          </p>
          <p>
            Merkür Müzik ve Sanat Akademisi ailesi olarak, sanatın büyülü
            dünyasında kendi hikayesini yazmak isteyen herkesi samimi ve
            ilham dolu akademimize davet ediyoruz.
          </p>
        </div>

        <p className="mt-10 font-display text-2xl text-orange-500 md:text-3xl">
          Geleceğinize bir eser bırakın...
        </p>
      </div>
    </section>
  );
}
