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
  const cardGap = 24;

  // calculate the space 1 card takes
  function getScrollStep() {
    if (!firstCardRef.current) return 0;
    return firstCardRef.current.offsetWidth + cardGap;
  }

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
      const count = Math.floor((carouselRef.current.offsetWidth + cardGap) / getScrollStep());
      setVisibleProjectsCount(Math.max(1, count));
    }
    updateVisibleProjectsCount();
  }, []);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    function handleScroll() {
      if (!firstCardRef.current || !carousel) return;
      const step = firstCardRef.current.offsetWidth + cardGap;
      if (!step) return;
      const isAtEnd = carousel.scrollLeft + carousel.offsetWidth >= carousel.scrollWidth - 1;
      if (isAtEnd) {
        const visibleCount = Math.floor((carousel.offsetWidth + cardGap) / step);
        setActiveIndex(Math.max(0, projects.length - visibleCount));
        return;
      }
      const index = Math.round(carousel.scrollLeft / step);
      setActiveIndex(index);
    }
    carousel.addEventListener("scroll", handleScroll, { passive: true });
    return () => carousel.removeEventListener("scroll", handleScroll);
  }, []);

  // calculate how many pills are needed and make an array with them
  const paginationCount = Math.max(1, projects.length - visibleProjectsCount + 1);
  const paginationItems = Array.from({ length: paginationCount });

  return (
    // temporary id for nav scroll:
    <section id="projects" className={carouselStyles.projectsSection}>
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
        <button
          onClick={() => scrollToProject(activeIndex - 1)}
          disabled={activeIndex === 0}
          aria-label="Previous project"
          className={carouselStyles.carouselButtons}
        >
          ←
        </button>

        <div className="flex gap-(--spacing-sm)">
          {paginationItems.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToProject(index)}
              className={`${carouselStyles.paginationPill} ${index === activeIndex ? carouselStyles.paginationPillActive : ""}`}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={() => scrollToProject(activeIndex + 1)}
          disabled={activeIndex === paginationCount - 1}
          aria-label="Next project"
          className={carouselStyles.carouselButtons}
        >
          →
        </button>
      </div>
    </section>
  );
}
