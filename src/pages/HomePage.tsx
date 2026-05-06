import Banner from "../components/Banner";
import Button from "../components/UI/Button";
import LinkIcon from "../assets/icons/arrow_outward.svg";
import HeroSection from "../components/homepage/HeroSection";
import SkillsSection from "../components/homepage/SkillsSection";
import ProjectsSection from "../components/homepage/ProjectsSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />

      <Banner subtitle="Contact" title="Let's get in touch!">
        <Button onClick={() => {}} trailingIcon={<img src={LinkIcon} />}>
          Button here
        </Button>
      </Banner>
    </>
  );
}
