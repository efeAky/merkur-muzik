export interface Course {
  id: string;
  title: string;
  category: string;
  description: string;
  imageAlt: string;
  imageSrc: string;
}

export const courses: Course[] = [
  {
    id: "violin",
    title: "Keman Eğitimi",
    category: "Klasik",
    description:
      "Teknik ve duygunun mükemmel dengesiyle keman dünyasına adım atın.",
    imageAlt: "Keman eğitimi",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAUUITNwb6_8vN_pEy6yVEdDPdlLn4SxiiEcMICVCAKVXSaDHx3N9-edG-lam2I_ovVchbBxOHKtZs6iQ-w-Kgt8-4yhFgghuefzUYbtNF453s3rUwKV5VrsDqDWf3zSwTSFtk6A7yz7WPSSpd0BMsSgeNsCPCGXfYOO7ftsFQ_geQRi1Gekts5nCH8EOaMtllU7hXE6_DovV5UDuciLiCIJJdfjVsTOildm2xqLrSeJS8RbDT3mAU8wA",
  },
  {
    id: "piano",
    title: "Piyano Eğitimi",
    category: "Konservatuvar",
    description:
      "Tuşların arkasındaki hikayeyi keşfedin, virtüözlüğe giden yolu aralayın.",
    imageAlt: "Piyano eğitimi",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCOT1EOd3ekTNYsp4afKNsKfMM2etT748yjNnzbYkn5ocDcyjs3hHbf2Vav-3cni8hyZXtCArnGbMD-7ItVPT53NFydlYm29xQ8sdmIHUuwnC32PRco9s5A5DrYDibiBz_fmocZTlYDvvh6uEsCUyufd6t4tIosZgvBMPAHZoLzVuHh5JE5rnWqzRa2XCIRXjabpSC8REXoWf_INa26pBE2_r8R3hkg0UaquH2SVRr3aUOAupvL7_isiw",
  },
  {
    id: "guitar",
    title: "Gitar Eğitimi",
    category: "Modern",
    description:
      "Klasikten moderne, tellerin tınısıyla kendi stilinizi yaratın.",
    imageAlt: "Gitar eğitimi",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDzm9aczubOJctFyj23zf-ZPAyATAQQdZWV4gSoQwFHzyBPcIdSDReJOawvDxHOAlMwOrhfUdI7RnmmnOIjLIHxdlRs5zBunDR0HgJC1JNPr-UTlqVbETiG7Jp5-qPESW_Kxr3xs9IKS_xHCWeD41H_PehCGhsY7y_QMlVxFNXqmmpv9WfGxmRh2hMQlaryohR6tdTMCXwbMAzO_gbUgAacFVnz2Xbpo2h6xpci-U_SfSaMfKbEQxKArA",
  },
  {
    id: "drum-course",
    title: "Bateri Eğitimi",
    category: "Vurmalı Çalgılar",
    description: "Ritim duygunuzu geliştirin, modern teknikler ve koordinasyon çalışmalarıyla profesyonel davulculuğa adım atın.",
    imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuAVBlwJThfcX2NJC5xDeas_KLuklYZsTY-8dcjmOjA3uKjpKXRBzrTqMudK2rK4UPba_V-fHiOltmFkJ9TWpvBWfMTzDNpVb2007joenLkDavQ68Vd2A13pcOAUBYbKxK2zgdkwt0r1pyFTPTfp6eET-Ssw4ugoLQ6r0as2-1y2Kg-MT2P3taz0r8_5hyuGhzKqwAohZODblAQFVB0BLXEvXiilE0NPGDNft3yCbXVgAaGAPwNGmIUVcA", 
    imageAlt: "Bateri eğitimi"
  },
];
