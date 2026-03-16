import buttonStyles from "../../styles/buttons.module.css";

type ButtonProps = {
  children: React.ReactNode;
  trailingIcon?: React.ReactNode;
  leadingIcon?: React.ReactNode;
};

export default function ({ children, trailingIcon, leadingIcon }: ButtonProps) {
  return (
    <button className={buttonStyles.button}>
      {leadingIcon && <span className="w-(--spacing-md) h-(--spacing-md)">{leadingIcon}</span>}
      {children}
      {trailingIcon && <span className="w-(--spacing-md) h-(--spacing-md)">{trailingIcon}</span>}
    </button>
  );
}
