export interface Course {
  id: string;
  title: string;
  category: string;
  description: string;
  imageAlt: string;
  imageSrc: string;
  /** Slug of the matching SEO article page in data/articles.ts, if any. */
  articleSlug?: string;
}

export const courses: Course[] = [
  {
    id: "violin",
    title: "Keman Eğitimi",
    category: "Klasik",
    description:
      "Yaylı çalgıların en zarif üyesiyle duygularınızı notalara dökün. Enstrümanın teknik disiplinine, doğru duruş ve yay tekniklerine odaklanan birebir dersler.",
    imageAlt: "Keman eğitimi",
    imageSrc: "/images/course-violin.jpg",
  },
  {
    id: "piano",
    articleSlug: "piyano-dersi-cekmekoy",
    title: "Piyano Eğitimi",
    category: "Konservatuvar",
    description:
      "Müziğin temelini estetik ve disiplinle birleştirin. Klasik müzik literatürü eşliğinde, teknik ve teorik altyapıyı birleştiren akademik eğitim programı.",
    imageAlt: "Piyano eğitimi",
    imageSrc: "/images/course-piano.jpg",
  },
  {
    id: "guitar",
    title: "Gitar Eğitimi",
    category: "Modern",
    description:
      "Klasik, akustik ve elektro gitarla akorların ve ritmin dünyasına adım atın. Türsel çeşitlilikle desteklenen, solfej ve armoni altyapılı enstrüman hakimiyeti eğitimi.",
    imageAlt: "Gitar eğitimi",
    imageSrc: "/images/course-guitar.jpg",
  },
  {
    id: "drum-course",
    articleSlug: "bateri-dersi-cekmekoy",
    title: "Bateri Eğitimi",
    category: "Vurmalı Çalgılar",
    description:
      "Ritim duygunuzu zirveye taşıyın ve enerjinizi boşaltın. Ritim analizi, el-ayak koordinasyonu ve hız tekniklerini içeren kapsamlı ders programı.",
    imageSrc: "/images/course-drums.jpg",
    imageAlt: "Bateri eğitimi",
  },
  {
    id: "cello",
    title: "Çello Eğitimi",
    category: "Klasik",
    description:
      "İnsan sesine en yakın frekansa sahip çello, derin tonlarıyla müziğin en asil enstrümanlarından biridir. Duruş estetiğini ve çok sesli duyumu geliştiren akademik çello eğitimi.",
    imageAlt: "Çello eğitimi",
    imageSrc: "/images/cello.webp",
  },
  {
    id: "painting",
    articleSlug: "resim-kursu-cekmekoy",
    title: "Resim Eğitimi",
    category: "Görsel Sanatlar",
    description:
      "Karakalemden yağlı boyaya, renklerin büyülü dünyasında kendi tarzınızı keşfedin. Kompozisyon, perspektif ve renk teorisini birleştiren atölye çalışmalarıyla görsel dilinizi geliştirin.",
    imageAlt: "Resim eğitimi",
    imageSrc: "/images/course-painting.jpg",
  },
  {
    id: "ceramic",
    articleSlug: "seramik-workshop-cekmekoy",
    title: "Seramik Eğitimi",
    category: "Görsel Sanatlar",
    description:
      "Çamura şekil verirken toprağın enerjisiyle dinlenin, kendi hayal gücünüzü üç boyutlu eserlere dönüştürün. El becerisi ve üç boyutlu tasarım anlayışını geliştiren uygulamalı atölye dersleri.",
    imageAlt: "Seramik eğitimi",
    imageSrc: "/images/course-ceramic.webp",
  },
  {
    id: "theatre",
    articleSlug: "drama-dersi-cekmekoy",
    title: "Tiyatro Eğitimi",
    category: "Sahne Sanatları",
    description:
      "Sahne tozuyla tanışın! Kendini ifade etme, hitabet ve empati yeteneğinizi tiyatro disipliniyle güçlendirin. Doğaçlama ve sahne çalışmalarıyla özgüveninizi ve beden dilinizi geliştirin.",
    imageAlt: "Tiyatro eğitimi",
    imageSrc: "/images/course-theatre.webp",
  },
];
