import Feet from "../../assets/footer-feet.svg";
import { footerLinks, copyright } from "../../data/site";
import LinkButton from "../UI/LinkButton";
import footerStyles from "../../styles/footer.module.css";

export default function Footer() {
  return (
    <div className={footerStyles.footerContainer}>
      <div className={footerStyles.footerLeft}>
        <div className={`${footerStyles.footerMeta}`}>
          <span>{copyright}</span>
          <span>design & code by Evgenia Babulkova</span>
        </div>
        <div className="flex">
          {footerLinks.map((link) => (
            <LinkButton key={link.link} variant="secondary" link={link.link}>
              {link.text}
            </LinkButton>
          ))}
        </div>
      </div>
      <img src={Feet} className={footerStyles.footerImg} />
    </div>
  );
}
