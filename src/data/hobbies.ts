import PhotographyImg from "../assets/hobbies/photography-img.png";
import HikingImg from "../assets/hobbies/hiking-img.png";
import DrawingImg from "../assets/hobbies/drawing-img.png";
import MusicImg from "../assets/hobbies/music-img.png";
import ReadingImg from "../assets/hobbies/reading-img.png";

export type Hobby = {
  name: string;
  subtitle?: string;
  image: string;
};

export const hobbies = [
  {
    name: "Mountain hiking",
    subtitle: "Vihren peak, 2914m",
    image: HikingImg,
  },
  {
    name: "Music",
    subtitle: "Green day, Dublin",
    image: MusicImg,
  },
  {
    name: "Drawing",
    image: DrawingImg,
  },
  {
    name: "Reading",
    subtitle: "Sci-fi",
    image: ReadingImg,
  },
  {
    name: "Photography",
    subtitle: "Details enthusiast",
    image: PhotographyImg,
  },
];
