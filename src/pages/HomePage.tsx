import Banner from "../components/Banner";
import Button from "../components/UI/Button";
import LinkIcon from "../assets/icons/arrow_outward.svg";
import Tag from "../components/UI/Tag";
import { projects } from "../data/projects";
import ProjectCard from "../components/projects/ProjectCard";
import Title from "../components/UI/Title";
import carouselStyles from "../styles/projects/projectCarousel.module.css";
import heroStyles from "../styles/hero.module.css";
import skillsStyles from "../styles/skills.module.css";
import SkillCard from "../components/SkillCard";
import { databasesIcons, extraIcons, frontendIcons, uxuiIcons } from "../data/techIcons";
import Eva from "../assets/eva.svg";

export default function HomePage() {
  return (
    <>
      <section className={heroStyles.heroSection}>
        <div className={heroStyles.heroLeft}>
          <div className={`${heroStyles.marquee} ${heroStyles.marqueeLeft}`}>
            <span>hello hello hello</span>
            <span> hello hello hello</span>
          </div>

          <div className="flex flex-col gap-(--spacing-md) m-(--spacing-xl)">
            <h2>I’M Eva, Frontend developer with UX/UI design background</h2>
            <h4>experienced in building scalable React + TypeScript applications</h4>
            <Button trailingIcon={<img src={LinkIcon} />}>View resume</Button>
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

      <section className={skillsStyles.skillsSection}>
        <Title subtitle="Skills" title="What do i do?" />
        <div className={skillsStyles.skillsGrid}>
          <SkillCard
            title="Title"
            content="content contentcontent contentcontent contentcontent contentcontent contentcontent content"
            icons={frontendIcons}
            classes={skillsStyles.frontend}
          />
          <SkillCard
            title="Title"
            content="content contentcontent contentcontent contentcontent contentcontent contentcontent content"
            icons={uxuiIcons}
            classes={skillsStyles.uxui}
          />
          <SkillCard
            title="Title"
            content="content contentcontent contentcontent contentcontent contentcontent contentcontent content"
            icons={extraIcons}
            classes={skillsStyles.extra}
          />
          <SkillCard title="Title" icons={databasesIcons} classes={skillsStyles.databases} />
        </div>
      </section>

      <section className={carouselStyles.projectsSection}>
        <Title subtitle="Projects" title="See some of my work" />
        <div className={carouselStyles.carouselContainer}>
          <ul className={carouselStyles.carouselCards}>
            {projects.map((project) => {
              return (
                <ProjectCard
                  key={project.slug}
                  bkgColor={project.bkgColor}
                  logo={project.logo}
                  slug={project.slug}
                />
              );
            })}
          </ul>
        </div>
      </section>

      <h1>Lala title</h1>

      <Banner subtitle="Contact" title="Let's get in touch!">
        <Button trailingIcon={<img src={LinkIcon} />}>Button here</Button>
      </Banner>

      <Tag onSelect={() => {}}>sonnldsvns</Tag>
    </>
  );
}
