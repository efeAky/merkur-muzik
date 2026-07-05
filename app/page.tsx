import { Header } from "@/components/Header";
import { HomeSection } from "@/components/sections/HomeSection";
import { CoursesSection } from "@/components/sections/CoursesSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <HomeSection />
        <CoursesSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}