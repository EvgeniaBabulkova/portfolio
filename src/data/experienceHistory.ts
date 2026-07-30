import QampoLogo from "../assets/qampo-logo.png";
import BAALogo from "../assets/baa-logo.png";
import EKLogo from "../assets/ek-logo.png";

export type ExperienceHistoryItem = {
  name: string;
  period: string;
  place: string;
  totalTime: string;
  accent?: boolean;
  image?: string;
};

export const experienceHistory: ExperienceHistoryItem[] = [
  {
    name: "Next role",
    period: "Open",
    place: "Aarhus, Denmark",
    totalTime: "Current",
    accent: true,
  },
  {
    name: "Frontend Developer",
    period: "2025 - 2026",
    place: "Qampo ApS",
    totalTime: "8 mo",
    image: QampoLogo,
  },
  {
    name: "Bachelor's degree, Web Development",
    period: "2024 - 2026",
    place: "Business Academy Copenhagen",
    totalTime: "1.5 yrs",
    image: EKLogo,
  },
  {
    name: "UX/UI Designer",
    period: "2024 - 2025",
    place: "Qampo ApS",
    totalTime: "1.5 yrs",
    image: QampoLogo,
  },
  {
    name: "AP degree, Multimedia Design",
    period: "2019 - 2021",
    place: "Business Academy Aarhus",
    totalTime: "2 yrs",
    image: BAALogo,
  },
];
