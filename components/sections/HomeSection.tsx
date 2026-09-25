import Image from "next/image";
import { ImageSlider } from "@/components/ImageSlider";

export function HomeSection() {
  return (
    <section
      id="home"
      className="relative scroll-mt-16 overflow-hidden bg-white pb-32"
    >
      <ImageSlider />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-20 px-5 pt-16 md:px-16 lg:grid-cols-2">
        <div className="space-y-8">
          <h1 className="font-display text-4xl text-black md:text-5xl">
            Müzik, Resim, Tiyatro <br />
            ve Seramikle Buluşun
          </h1>
          <div className="h-1 w-20 bg-orange-500" />
          <p className="text-lg leading-relaxed text-black/70">
            T.C. MEB onaylı, modern eğitim anlayışımız ve alanında uzman
            eğitmen kadromuzla müzik, resim, tiyatro ve seramik yolculuğunuza
            eşlik etmek için kapılarımızı açtık.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 lg:mt-10">
          <div className="relative h-64 overflow-hidden rounded-sm border border-black/10">
            <Image
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 25vw, 50vw"
              src="/images/hero-piano.webp"
              alt="Piano"
            />
          </div>
          <div className="pt-12">
            <div className="relative h-64 overflow-hidden rounded-sm border border-black/10">
              <Image
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 25vw, 50vw"
                src="/images/hero-cello.jpg"
                alt="Cello"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
