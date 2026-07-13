import { useEffect, useRef, useState } from "react";
import type { Category } from "../../data/categories";
import { projects } from "../../data/projects";
import CategoriesList from "./CategoriesList";
import ProjectCard from "../../components/projects/ProjectCard";
import Title from "../../components/UI/Title";
import carouselStyles from "../../styles/projects/projectCarousel.module.css";

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<"All" | Category>("All");
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleProjectsCount, setVisibleProjectsCount] = useState(1);

  const carouselRef = useRef<HTMLDivElement | null>(null);
  const firstCardRef = useRef<HTMLLIElement | null>(null);
  const cardGap = 24;

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category.includes(activeCategory));

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
    window.addEventListener("resize", updateVisibleProjectsCount);

    return () => window.removeEventListener("resize", updateVisibleProjectsCount);
  }, [filteredProjects.length]);

  useEffect(() => {
    setActiveIndex(0);
    carouselRef.current?.scrollTo({ left: 0, behavior: "auto" });
  }, [activeCategory]);

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
        setActiveIndex(Math.max(0, filteredProjects.length - visibleCount));
        return;
      }
      const index = Math.round(carousel.scrollLeft / step);
      setActiveIndex(index);
    }
    carousel.addEventListener("scroll", handleScroll, { passive: true });
    return () => carousel.removeEventListener("scroll", handleScroll);
  }, [filteredProjects.length]);

  // calculate how many pills are needed and make an array with them
  const paginationCount = Math.max(1, filteredProjects.length - visibleProjectsCount + 1);
  const paginationItems = Array.from({ length: paginationCount });

  return (
    // temporary id for nav scroll:
    <section id="projects" className={carouselStyles.projectsSection}>
      <div className={carouselStyles.projectsHeader}>
        <Title subtitle="Projects" title="See some of my work" />
        <CategoriesList activeCategory={activeCategory} onCategoryChange={setActiveCategory} />
      </div>
      <div ref={carouselRef} className={carouselStyles.carouselContainer}>
        <ul className={carouselStyles.carouselCards}>
          {filteredProjects.map((project, index) => {
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
