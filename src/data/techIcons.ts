import React from "../assets/icons/react.svg";
import TypeScript from "../assets/icons/typescript.svg";
import Css from "../assets/icons/css.svg";
import Tailwind from "../assets/icons/tailwindcss.svg";
import Typeorm from "../assets/icons/typeorm.svg";
import Redux from "../assets/icons/redux.svg";
import ReactNative from "../assets/icons/react-native.svg";
import Postgresql from "../assets/icons/postgresql.svg";
import Nodejs from "../assets/icons/nodejs.svg";
import Nestjs from "../assets/icons/nestjs.svg";
import MongoDb from "../assets/icons/mongodb.svg";
import Html5 from "../assets/icons/html5.svg";
import Figma from "../assets/icons/figma.svg";
import Jest from "../assets/icons/jest.svg";
import Axios from "../assets/icons/axios.svg";
import Atlassian from "../assets/icons/atlassian.svg";
import Expo from "../assets/icons/expo.svg";

// "lookup" table
export const techIconMap: Record<string, string> = {
  React: React,
  TypeScript: TypeScript,
  CSS: Css,
  Tailwind: Tailwind,
  TypeORM: Typeorm,
  Redux: Redux,
  PostgreSQL: Postgresql,
  Nodejs: Nodejs,
  NestJS: Nestjs,
  MongoDB: MongoDb,
  MongoDb: MongoDb,
  HTML5: Html5,
  Figma: Figma,
  Jest: Jest,
  Axios: Axios,
  Atlassian: Atlassian,
  "Tailwind CSS": Tailwind,
  "React Native": ReactNative,
  "Node.js": Nodejs,
  "Expo Router": Expo,
};

// skills section tech
export const frontendTech = ["React", "TypeScript", "HTML5", "CSS", "Tailwind", "Redux", "React Native", "Expo Router"];
export const uxuiTech = ["Figma", "CSS", "Tailwind"];
export const extraTech = ["Jest", "Axios", "Atlassian"];
export const databasesTech = ["PostgreSQL", "MongoDB", "TypeORM"];
