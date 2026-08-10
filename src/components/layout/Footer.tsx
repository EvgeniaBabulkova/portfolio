import Feet from "../../assets/footer-feet.webp";
import { footerLinks, copyright } from "../../data/site";
import LinkButton from "../UI/LinkButton";
import footerStyles from "../../styles/footer.module.css";

export default function Footer() {
  return (
    <footer className={footerStyles.footerContainer}>
      <div className={footerStyles.footerLeft}>
        <div className="flex flex-wrap">
          {footerLinks.map((link) => (
            <LinkButton key={link.link} variant="secondary" link={link.link}>
              {link.text}
            </LinkButton>
          ))}
        </div>
        <div className={footerStyles.footerMeta}>
          <span>{copyright}</span>
          <span>design & code by Evgenia Babulkova</span>
        </div>
      </div>
      <img src={Feet} className={footerStyles.footerImg} alt="footer-image" aria-hidden="true" />
    </footer>
  );
}
