import Feet from "../../assets/footer-feet.webp";
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
        <div className="flex flex-col">
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

// okaay, i got one idea - it looks odd now that the links are under each other (this was to fix the responsiveness issue temporarily),
// but i have an idea - i can keep the feet on mobile now when the links are in a column and just make everything smaller (as im supposed to anyway)
