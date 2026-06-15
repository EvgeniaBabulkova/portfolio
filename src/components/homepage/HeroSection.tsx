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

        <div className="flex flex-col gap-(--spacing-md) m-(--spacing-xl) mr-(--spacing-3xl)">
          <h3>I’M Eva, Frontend developer with UX/UI design background</h3>
          <h5>experienced in building scalable React + TypeScript applications</h5>
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
