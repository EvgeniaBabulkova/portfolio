import Eva from "../assets/eva-face.png";
import Tag from "../components/UI/Tag";
import ExperienceHistorySection from "../components/aboutpage/ExperienceHistorySection";
import HobbiesSection from "../components/aboutpage/HobbiesSection";
import NowPlayingSection from "../components/aboutpage/NowPlayingSection";
import aboutStyles from "../styles/about.module.css";

export default function AboutPage() {
  return (
    <section className={aboutStyles.aboutContainer}>
      <div className={aboutStyles.profilePanel}>
        <img src={Eva} alt="Evgenia Babulkova" />
        <div className="flex flex-col gap-(--spacing-md)">
          <p>Profile</p>
          <h1 className={aboutStyles.profileName}>Evgenia Babulkova</h1>
          <div className="flex flex-wrap items-center gap-2">
            <p>Eva &nbsp; · &nbsp; Frontend developer</p>
            <Tag selected small onSelect={() => {}}>
              Open to work
            </Tag>
            <p>Aarhus, Denmark</p>
          </div>
        </div>
      </div>

      <ExperienceHistorySection />
      <NowPlayingSection />
      <HobbiesSection />
    </section>
  );
}
