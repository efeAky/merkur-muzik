import type { Metadata } from "next";
import { Libre_Caslon_Text, Hanken_Grotesk } from "next/font/google";
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
  title: "Merkür Müzik Akademisi",
  description:
    "Merkür Müzik Akademisi — klasik disiplini modern vizyonla birleştirerek yeteneklerinizi sanata dönüştürüyor.",
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
        {children}
      </body>
    </html>
  );
}
