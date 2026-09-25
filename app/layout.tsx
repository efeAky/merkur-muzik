import type { Metadata } from "next";
import { Libre_Caslon_Text, Hanken_Grotesk } from "next/font/google";
import { PrivacyModalProvider } from "@/components/PrivacyModalContext";
import { siteUrl } from "@/lib/site";
// Google Analytics kullanılmadığı için şu an devre dışı - tekrar
// etkinleştirmek için bu importu ve aşağıdaki <CookieConsentBanner />
// kullanımını geri açın.
// import { CookieConsentBanner } from "@/components/CookieConsentBanner";
import "./globals.css";

const libreCaslonText = Libre_Caslon_Text({
  weight: ["400"],
  subsets: ["latin", "latin-ext"],
  variable: "--font-libre-caslon-text",
  display: "swap",
});

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin", "latin-ext"],
  variable: "--font-hanken-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Merkür Müzik ve Sanat Akademisi | Çekmeköy Müzik ve Sanat Kursları",
    template: "%s | Merkür Müzik ve Sanat Akademisi",
  },
  description:
    "Merkür Müzik ve Sanat Akademisi — klasik disiplini modern vizyonla birleştirerek yeteneklerinizi sanata dönüştürüyor.",
  // Renders <meta name="google-site-verification"> in <head> for Search Console.
  verification: {
    google: "geOQBdv-R8UFD0EX82oVx1OwIbH0eovwaooPKy77OAw",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`scroll-smooth snap-y snap-proximity ${libreCaslonText.variable} ${hankenGrotesk.variable}`}
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body">
        <div className="grain-overlay" />
        <PrivacyModalProvider>
          {children}
          {/* <CookieConsentBanner /> */}
        </PrivacyModalProvider>
      </body>
    </html>
  );
}
