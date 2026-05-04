import buttonStyles from "../../styles/buttons.module.css";
import LinkIcon from "../../assets/icons/arrow_outward.svg";

type LinkButtonProps = {
  link: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export default function LinkButton({ link, children, variant = "primary" }: LinkButtonProps) {
  return (
    <>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={`${buttonStyles.button} ${variant === "primary" && buttonStyles.buttonPrimary}`}
      >
        {children}
        <span className="w-(--spacing-lg) h-(--spacing-lg)">
          <img src={LinkIcon} />
        </span>
      </a>
    </>
  );
}
