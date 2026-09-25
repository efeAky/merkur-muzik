export interface AboutFeature {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export const aboutFeatures: AboutFeature[] = [
  {
    id: "uzman-egitmen-kadrosu",
    icon: "workspace_premium",
    title: "Uzman Eğitmen Kadrosu",
    description:
      "Alanında uzman, akademik kariyer yapmış, pedagojik formasyona sahip ve her şeyden önemlisi öğretmeyi seven dinamik bir eğitmen kadrosuyla çalışıyoruz.",
  },
  {
    id: "bireysel-egitim-programlari",
    icon: "tune",
    title: "Bireysel Eğitim Programları",
    description:
      "Her bireyin öğrenme hızının, ilgi alanının ve yeteneğinin farklı olduğunun bilinciyle, her öğrencimize özel öğrenme haritaları çıkarıyoruz.",
  },
  {
    id: "modern-ve-donanimli-siniflar",
    icon: "piano",
    title: "Modern ve Donanımlı Sınıflar",
    description:
      "Enstrüman kalitesinden sınıf akustiğine kadar her ayrıntının titizlikle tasarlandığı, sanatsal üretime ilham veren modern fiziki alanlarda eğitim veriyoruz.",
  },
  {
    id: "sosyal-ve-kulturel-gelisim",
    icon: "auto_awesome",
    title: "Sosyal ve Kültürel Gelişim",
    description:
      "Yıl sonu konserleri, resim sergileri, atölyeler ve sahne performansları ile öğrencilerimizin sahne heyecanını deneyimlemelerini ve özgüven kazanmalarını sağlıyoruz.",
  },
];
