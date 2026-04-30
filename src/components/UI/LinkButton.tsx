import buttonStyles from "../../styles/buttons.module.css";
import LinkIcon from "../../assets/icons/arrow_outward.svg";

type LinkButtonProps = {
  link: string;
  text: string;
};

export default function LinkButton({ link, text }: LinkButtonProps) {
  return (
    <>
      <a href={link} target="_blank" rel="noopener noreferrer" className={buttonStyles.button}>
        {text}
        <span className="w-(--spacing-lg) h-(--spacing-lg)">
          <img src={LinkIcon} />
        </span>
      </a>
    </>
  );
}
