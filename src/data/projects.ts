import type { Category } from "./categories";
import WashWorldLogo from "../assets/prj-wash-world/WashWorld-logo.svg";
import DaosLogo from "../assets/prj-daos/DAOS-logo.svg";
import PondooLogo from "../assets/prj-pondoo/Pondoo-logo.svg";
import GreenUXLogo from "../assets/prj-green-ux/greenUX-logo.svg";
import TCCLogo from "../assets/prj-tcc/TCC-logo.svg";

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
    shortDescription:
      "WashWorld is the bigest car was company in Denmark. They are trying to improve the user experience of their current users and monetize on potential new users. This project consists of the research and ideation process to conceptualizing the necessary digitalization and potential features of an application that will enhance the users' experience with the brand and streamline te process of washingn their vehicles",
    sourceCode: "https://github.com/EvgeniaBabulkova/wash-world",
    figmaPrototype: "https://github.com/EvgeniaBabulkova/wash-world",
  },
  {
    slug: "daos",
    title: "DAOS - Dansk Amatororkester samvirkev",
    logo: DaosLogo,
    bkgColor: "#FFFFFF",
    category: ["Frontend", "Full stack"],
    client: "Dansk Amatororkester samvirke",
    year: "2025",
    shortDescription:
      "DAOS descriptionnnnnn o;jtmh ngilt krhedgouitlDAOS descriptionnnnnn o;jtmh ngilt krhedgouitlDAOS descriptionnnnnn o;jtmh ngilt krhedgouitlDAOS descriptionnnnnn o;jtmh ngilt krhedgouitlDAOS descriptionnnnnn o;jtmh ngilt krhedgouitl  ljsf nfdssu fsdg usdd uvfds genecs",
  },
  {
    slug: "pondoo",
    title: "Pondoo",
    logo: PondooLogo,
    bkgColor: "#F6EDE2",
    category: ["Frontend", "UX/UI design"],
    client: "Pondoo Aps",
    year: "2025-26",
    shortDescription:
      "Pondoo description hbgfsdlk,p;eglsjkv fsdgifsb ug addkfbf jbsPondoo description hbgfsdlk,p;eglsjkv fsdgifsb ug addkfbf jbsPondoo description hbgfsdlk,p;eglsjkv fsdgifsb ug addkfbf jbsPondoo description hbgfsdlk,p;eglsjkv fsdgifsb ug addkfbf jbsPondoo description hbgfsdlk,p;eglsjkv fsdgifsb ug addkfbf jbsPondoo description hbgfsdlk,p;eglsjkv fsdgifsb ug addkfbf jbs ;fd svofe",
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
      "GreenUX description hbgfsdlk,p;eglsjkv fsdgifsb ug addkfbf GreenUX description hbgfsdlk,p;eglsjkv fsdgifsb ug addkfbfGreenUX description hbgfsdlk,p;eglsjkv fsdgifsb ug addkfbfGreenUX description hbgfsdlk,p;eglsjkv fsdgifsb ug addkfbfGreenUX description hbgfsdlk,p;eglsjkv fsdgifsb ug addkfbf,p;eglsjkv fsdgifsb ug addkfbf jbs ;fd svofe",
  },
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
  },
];
