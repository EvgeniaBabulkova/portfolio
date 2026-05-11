import HeroSection from "../components/homepage/HeroSection";
import SkillsSection from "../components/homepage/SkillsSection";
import ProjectsSection from "../components/homepage/ProjectsSection";
import ContactBanner from "../components/ContactBanner";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactBanner />
    </>
  );
}
