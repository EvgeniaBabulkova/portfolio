import heroStyles from "../../styles/hero.module.css";
import LinkButton from "../UI/LinkButton";
import Eva from "../../assets/eva.webp";
import { resumeLink } from "../../data/site";

export default function HeroSection() {
  return (
    <section className={heroStyles.heroSection}>
      <div className={heroStyles.heroLeft}>
        <div className={`${heroStyles.marquee} ${heroStyles.marqueeLeft}`}>
          <span>hello hello hello</span>
          <span> hello hello hello</span>
        </div>

        <div className="flex flex-col gap-(--spacing-md) m-(--spacing-xl)">
          <h2>I’M Eva, Frontend developer with UX/UI design background</h2>
          <h4>experienced in building scalable React + TypeScript applications</h4>
          <LinkButton link={resumeLink}>View Resume</LinkButton>
        </div>
      </div>

      <div className={heroStyles.heroRight}>
        <div className={`${heroStyles.marquee} ${heroStyles.marqueeRight}`}>
          <span>hello hello hello</span>
          <span> hello hello hello</span>
        </div>
        <img src={Eva} alt="Evgenia Babulkova" />
      </div>
    </section>
  );
}
