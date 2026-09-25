import { siteUrl } from "@/lib/site";

// schema.org LocalBusiness data rendered as JSON-LD on the home page.
// Keep in sync with ContactSection (phone, address, hours) and the
// Google Business Profile — Google cross-checks these.
export const localBusiness = {
  "@context": "https://schema.org",
  "@type": ["EducationalOrganization", "LocalBusiness"],
  name: "Merkür Müzik ve Sanat Akademisi",
  url: siteUrl,
  logo: `${siteUrl}/images/merkur_music_logo.webp`,
  image: `${siteUrl}/images/merkur_music_logo.webp`,
  telephone: "+905514708202",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Merkez Mahallesi, Nurtanesi Sokağı 11/A - 13/A",
    addressLocality: "Çekmeköy",
    addressRegion: "İstanbul",
    postalCode: "34782",
    addressCountry: "TR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 41.031818,
    longitude: 29.17193,
  },
  hasMap:
    "https://www.google.com/maps/place/Merk%C3%BCr+M%C3%BCzik+ve+Sanat+Akademi/@41.031818,29.1693551,17z/data=!3m1!4b1!4m6!3m5!1s0x14cab7fbe7732fa9:0xf18dbd8d61368257!8m2!3d41.031818!4d29.17193!16s%2Fg%2F11xg7jlzys",
  // Closed on Mondays.
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "10:30",
      closes: "20:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday", "Sunday"],
      opens: "10:00",
      closes: "20:00",
    },
  ],
  sameAs: ["https://www.instagram.com/merkurmuzikakademisi/"],
};
