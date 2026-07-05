import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="tr" className="scroll-smooth snap-y snap-proximity">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Libre+Caslon+Text:wght@400;600;700&family=Hanken+Grotesk:wght@400;600&display=swap"
          rel="stylesheet"
        />
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