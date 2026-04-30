import buttonStyles from "../../styles/buttons.module.css";

type ButtonProps = {
  children: React.ReactNode;
  trailingIcon?: React.ReactNode;
  leadingIcon?: React.ReactNode;
  // variant?: "primary" | "secondary";
};

export default function Button({ children, trailingIcon, leadingIcon }: ButtonProps) {
  return (
    <button className={`${buttonStyles.button} ${buttonStyles.buttonPrimary}`}>
      {leadingIcon && <span className="w-(--spacing-md) h-(--spacing-md)">{leadingIcon}</span>}
      {children}
      {trailingIcon && <span className="w-(--spacing-lg) h-(--spacing-lg)">{trailingIcon}</span>}
    </button>
  );
}
