import type { Category } from "./categories";
import WashWorldLogo from "../assets/prj-wash-world/WashWorld-logo.svg";
import DaosLogo from "../assets/prj-daos/DAOS-logo.svg";
import PondooLogo from "../assets/prj-pondoo/Pondoo-logo.svg";
import GreenUXLogo from "../assets/prj-green-ux/greenUX-logo.svg";
import TCCLogo from "../assets/prj-tcc/TCC-logo.svg";

type ProjectScreenshot = {
  file: string;
  alt: string;
};

export type Project = {
  slug: string;
  title: string;
  logo: string;
  bkgColor: string;
  category: Category[];
  client: string;
  year: string;
  shortDescription: string;
  livePreview?: string;
  figmaPrototype?: string;
  sourceCode?: string;
  tech: string[];
  screenshots: ProjectScreenshot[];
  videoId?: string;
  videoStartSeconds?: number;
};

export const projects: Project[] = [
  {
    slug: "pondoo",
    title: "Pondoo",
    logo: PondooLogo,
    bkgColor: "#F6EDE2",
    category: ["Frontend", "UX/UI design"],
    client: "Pondoo Aps",
    year: "2025-26",
    shortDescription:
      "Pondoo is a home-care planning software used by Danish municipalities. As a Frontend Developer at Qampo, I implemented production features focusing on employee-level configurations that enable adjustments for acute operations - reducing reliance on external systems for day-to-day planning. Working in an established codebase, I collaborated closely with backend and UX teams to deliver maintainable features that aligned with Pondoo's existing architecture, the AI optimization pipeline and design system.",
    tech: ["React", "TypeScript", "Redux", "Axios", "Storybook", "Bitbucket", "Figma"],
    screenshots: [
      { file: "pondoo-the-client.png", alt: "What is Pondoo and how they operate" },
      { file: "pondoo-challenge-solution.png", alt: "The main problems I worked with on Pondoo" },
      { file: "pondoo-my-contribution.png", alt: "Base points of contribution" },
    ],
  },
  {
    slug: "wash-world",
    title: "Wash World",
    logo: WashWorldLogo,
    bkgColor: "#34B566",
    category: ["Frontend", "Full stack"],
    client: "Wash World",
    year: "2025",
    shortDescription:
      "WashWorld is Denmark's biggest car wash chain. The project focused on designing and building a mobile app to convert occasional users into subscribers. This meant spanning from UX research and Figma prototyping to a full React Native + NestJS implementation - focusing on role-based authentication, membership flows, Redux state management, PostgreSQL database relations and unit testing.",
    sourceCode: "https://github.com/EvgeniaBabulkova/wash-world",
    tech: ["React Native", "Expo Router", "NestJS", "PostgreSQL", "Redux", "Tailwind CSS", "Jest", "Figma"],
    screenshots: [
      { file: "ww-develop-database-design.png", alt: "Wash World - database design" },
      { file: "ww-research-the-client.png", alt: "Wash World client research" },
      { file: "ww-research-user-journey.png", alt: "Wash World user journey mapping" },
      { file: "ww-ideate-sweet-spot.png", alt: "Wash World feature sweet spot" },
      { file: "ww-define-wireflow.png", alt: "Wash World wireflow" },
      { file: "ww-research-brand-identity.png", alt: "Wash World brand identity" },
      { file: "ww-prototype-hifi1.png", alt: "High fidelity Figma prototype" },
      { file: "ww-prototype-hifi2.png", alt: "High fidelity Figma prototype - washing flow" },
      { file: "ww-testing-bert.png", alt: "BERT testing" },
    ],
    videoId: "5JXbFxOoWTQ",
    videoStartSeconds: 92,
  },
  {
    slug: "daos",
    title: "DAOS - Dansk Amatororkester samvirkev",
    logo: DaosLogo,
    bkgColor: "#FFFFFF",
    category: ["Frontend", "Full stack"],
    client: "DAOS",
    year: "2024",
    shortDescription:
      "DAOS is the national organization for Danish amateur orchestras and ensembles. The project focused on building a platform where musicians can find ensembles to join and post opportunities to find other musicians. The stack spanned React + NestJS with MongoDB, covering ensemble management, member administration, post filtering by instrument and genre and an application flow for accepting and rejecting musician requests.",
    sourceCode: "https://github.com/EvgeniaBabulkova/DAOS-frontend",
    tech: ["React", "TypeScript", "NestJS", "MongoDB", "Tailwind CSS", "Tanstack"],
    screenshots: [
      { file: "daos-user-flow.png", alt: "DAOS User flow illustration" },
      { file: "daos-wireflow.png", alt: "DAOS Wireflow based on the user flow" },
    ],
    videoId: "hZ1k8a6-tWo",
  },
  {
    slug: "green-ux",
    title: "Breathe for forests",
    logo: GreenUXLogo,
    bkgColor: "#243324",
    category: ["Frontend", "UX/UI design"],
    client: "University project",
    year: "2025",
    shortDescription:
      "'Breathe for forests' is an educational campaign promoting sustainable consumer choices. The project spanned UX research, information architecture and Figma prototyping, focusing on exploring and implementing practices for sustainable, accessible and ethical frontend design through e.g. semantic HTML, ARIA, asset optimization and dark pattern awareness.",
    tech: ["React", "CSS"],
    screenshots: [
      { file: "greenux-concept-creation.png", alt: "Research, map and prototype for BreatheForForests" },
      { file: "greenux-sustainable-design.png", alt: "Sustainable design concepts for BreatheForForests" },
      { file: "greenux-accessible-design.png", alt: "Accessible desing concepts for BreatheForForests" },
      { file: "greenux-dark-patterns.png", alt: "Exploring dark patterns for awareness in BreatheForForests" },
    ],
    livePreview: "https://green-ux.vercel.app/",
  },

  // for lateeeerrrrrrrrrr:
  {
    slug: "tcc",
    title: "The Clothing Club",
    logo: TCCLogo,
    bkgColor: "#075264",
    category: ["UX/UI design"],
    client: "The Clothing Club Aarhus",
    year: "2024",
    shortDescription:
      "TCC description hbgfsdlk,p;eglsjkv fsdgifsb ug addkfbf  description TCC description hbgfsdlk,p;eglsjkv fsdgifsb ug addkfbf  descriptionhbgfsdlk,p;eglsjkv fsdgifsb ug addkfbf,p;eglsjkv fsdgifsb ug addkfbf jbs ;fd svofe",
    tech: ["React", "CSS", "TypeScript"],
    screenshots: [
      { file: "WashWorldScreen1", alt: "Wash World app home screen" },
      { file: "WashWorldScreen2", alt: "Wash World booking flow screen" },
    ],
  },
];
