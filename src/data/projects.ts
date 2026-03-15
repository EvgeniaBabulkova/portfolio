import type { Category } from "./categories";
import WashWorldLogo from "../assets/prj-wash-world/WashWorld-logo.svg";
import DaosLogo from "../assets/prj-daos/DAOS-logo.svg";

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
};

export const projects: Project[] = [
  {
    slug: "wash-world",
    title: "Wash World",
    logo: WashWorldLogo,
    bkgColor: "#34B566",
    category: ["Frontend", "Full stack"],
    client: "Wash World",
    year: "2025",
    shortDescription: "Lalala srghnnsugrvsrb suim ljsf nfdssu fsdg usdd uvfds genecs",
  },
  {
    slug: "daos",
    title: "DAOS - Dansk Amatororkester samvirkev",
    logo: DaosLogo,
    bkgColor: "#FFFFFF",
    category: ["Frontend", "Full stack"],
    client: "Dansk Amatororkester samvirke",
    year: "2025",
    shortDescription: "LUuulululu jgnhgofs ljsf nfdssu fsdg usdd uvfds genecs",
  },
];
