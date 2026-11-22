import { PortfolioLoader } from "@/components/loader";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { BentoAbout } from "@/components/bento-about";
import { SkillsSection } from "@/components/skills-section";
import { ProjectsSection } from "@/components/projects-section";
import { ExperienceSection } from "@/components/experience-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col bg-[#07080e] text-zinc-100">
      <PortfolioLoader />
      <Navbar />
      <div className="flex-1 flex flex-col">
        <Hero />
        <BentoAbout />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </div>
      <Footer />
    </main>
  );
}
