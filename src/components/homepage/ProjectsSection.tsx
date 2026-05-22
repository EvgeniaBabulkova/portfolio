import { projects } from "../../data/projects";
import ProjectCard from "../../components/projects/ProjectCard";
import Title from "../../components/UI/Title";
import carouselStyles from "../../styles/projects/projectCarousel.module.css";
import { useRef, useState, useEffect } from "react";

export default function ProjectsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleProjectsCount, setVisibleProjectsCount] = useState(1);

  const carouselRef = useRef<HTMLDivElement | null>(null);
  const firstCardRef = useRef<HTMLLIElement | null>(null);
  const gap = 24;

  // calculate the space 1 card takes
  function getScrollStep() {
    if (!firstCardRef.current) return 0;
    return firstCardRef.current.offsetWidth + gap;
  }

  // scroll to target with as many cards as needed
  function scrollToProject(index: number) {
    setActiveIndex(index);
    carouselRef.current?.scrollTo({
      left: index * getScrollStep(),
      behavior: "smooth",
    });
  }

  // calculate the visible cards
  useEffect(() => {
    function updateVisibleProjectsCount() {
      if (!carouselRef.current || !firstCardRef.current) return;
      const count = Math.floor((carouselRef.current.offsetWidth + gap) / getScrollStep());
      setVisibleProjectsCount(Math.max(1, count));
    }
    updateVisibleProjectsCount();
    window.addEventListener("resize", updateVisibleProjectsCount);
    return () => window.removeEventListener("resize", updateVisibleProjectsCount);
  }, []);

  // calculate how many pills are needed and make an array with them
  const paginationCount = Math.max(1, projects.length - visibleProjectsCount + 1);
  const paginationItems = Array.from({ length: paginationCount });

  return (
    <section className={carouselStyles.projectsSection}>
      <Title subtitle="Projects" title="See some of my work" />
      <div ref={carouselRef} className={carouselStyles.carouselContainer}>
        <ul className={carouselStyles.carouselCards}>
          {projects.map((project, index) => {
            return (
              <li key={project.slug} ref={index === 0 ? firstCardRef : null}>
                <ProjectCard bkgColor={project.bkgColor} logo={project.logo} slug={project.slug} />
              </li>
            );
          })}
        </ul>
      </div>

      <div className={carouselStyles.carouselControls}>
        {paginationItems.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToProject(index)}
            className={`${carouselStyles.paginationPill} ${index === activeIndex && carouselStyles.paginationPillActive}`}
            aria-label={`Go to project ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
