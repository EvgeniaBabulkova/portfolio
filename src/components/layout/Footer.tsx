import Feet from "../../assets/footer-feet.svg";
import { footerLinks, watermark } from "../../data/site";
import LinkButton from "../UI/LinkButton";

export default function Footer() {
  return (
    <div className="flex gap-(--spacing-md) justify-between px-(--page-gutter)">
      <div className="flex items-end justify-between w-screen pb-(--spacing-xl)">
        <div className="flex flex-col uppercase">
          <span>{watermark}</span>
          <span>design & code by Evgenia Babulkova</span>
        </div>
        <div className="flex">
          {footerLinks.map((link) => (
            <LinkButton link={link.link} text={link.text} />
          ))}
        </div>
      </div>
      <img src={Feet} className="drop-shadow-(--shadow) w-[10vw] " />
    </div>
  );
}
