export interface AboutFeature {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export const aboutFeatures: AboutFeature[] = [
  {
    id: "meb-onayli",
    icon: "workspace_premium",
    title: "MEB Onaylı Eğitim Programları",
    description:
      "Eğitim kalitemizi resmi standartlarla belgeliyor, kursiyerlerimize geleceğe güvenle bakabilecekleri resmi sertifikalar sunuyoruz.",
  },
  {
    id: "enstruman-yelpazesi",
    icon: "piano",
    title: "Geniş Enstrüman Yelpazesi",
    description:
      "Piyanodan gitara, kemandan yan flüte ve vurmalı çalgılara kadar uzanan geniş bir eğitim yelpazesiyle her ilgiye hitap ediyoruz.",
  },
  {
    id: "kisisellestirilmis-yaklasim",
    icon: "tune",
    title: "Kişiselleştirilmiş Yaklaşım",
    description:
      "Her bireyin öğrenme hızının ve müzikal yolculuğunun benzersiz olduğunu biliyor, derslerimizi kişiye özel metodolojilerle destekliyoruz.",
  },
  {
    id: "ilham-veren-ortam",
    icon: "auto_awesome",
    title: "İlham Veren Sanat Ortamı",
    description:
      "Teorik eğitimi pratikle ve keyifle birleştiren, motivasyonu yüksek ve modern donanımlı sınıflarda eğitim veriyoruz.",
  },
];
