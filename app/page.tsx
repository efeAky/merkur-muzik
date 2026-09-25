import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { HomeSection } from "@/components/sections/HomeSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { CoursesSection } from "@/components/sections/CoursesSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/Footer";
import { LocalBusinessJsonLd } from "@/components/LocalBusinessJsonLd";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Page() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <HomeSection />
        <AboutSection />
        <CoursesSection />
        <ContactSection />
      </main>
      <Footer />
      <LocalBusinessJsonLd />
    </>
  );
}