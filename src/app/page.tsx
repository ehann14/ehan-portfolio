import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { CertificatesSection } from "@/components/sections/CertificatesSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { BackToTop } from "@/components/ui/BackToTop";
import { LoadingScreen } from "@/components/ui/LoadingScreen";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <div className="noise-overlay" />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <CertificatesSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
