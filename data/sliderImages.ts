export interface SliderCollageImage {
  src: string;
  alt: string;
}

export interface SliderImage {
  src: string;
  alt: string;
  title: string;
  collageImages?: SliderCollageImage[];
}

export const sliderImages: SliderImage[] = [
  {
    src: "/images/instruments_slider.webp",
    alt: "Enstrümanlar",
    title: "Enstrümanlar",
  },
  {
    src: "/images/piano_slider.webp",
    alt: "Piyano eğitimi",
    title: "Piyano Eğitimi",
  },
  {
    src: "/images/violin_slider.webp",
    alt: "Keman eğitimi",
    title: "Keman Eğitimi",
  },
  {
    src: "/images/guitar_slider.webp",
    alt: "Gitar eğitimi",
    title: "Gitar Eğitimi",
  },
  {
    src: "/images/theatre_slider.jpg",
    alt: "Tiyatro eğitimi",
    title: "Tiyatro Eğitimi",
  },
  {
    src: "/images/ceramic_slider.jpg",
    alt: "Seramik eğitimi",
    title: "Seramik Eğitimi",
  },
  {
    src: "/images/painting_slider.jpg",
    alt: "Resim eğitimi",
    title: "Resim Eğitimi",
  },
  {
    src: "/images/collage_piano.webp",
    alt: "Derslerimizden kareler",
    title: "Derslerimizden Kareler",
    collageImages: [
      { src: "/images/collage_piano.webp", alt: "Piyano dersinden bir kare" },
      {
        src: "/images/collage_violin_piano.webp",
        alt: "Keman ve piyano dersinden bir kare",
      },
      {
        src: "/images/collage_violins_circle.webp",
        alt: "Keman öğrencilerinden bir kare",
      },
      {
        src: "/images/collage_violins_chairs.webp",
        alt: "Keman dersinden bir kare",
      },
    ],
  },
];
