import buttonStyles from "../../styles/buttons.module.css";

type ButtonProps = {
  children?: React.ReactNode;
  onClick: () => void;
  trailingIcon?: React.ReactNode;
  // leadingIcon?: React.ReactNode;
  // variant?: "primary" | "secondary";
  classes?: string;
};

export default function Button({ children, onClick, trailingIcon, classes }: ButtonProps) {
  return (
    <button className={`${buttonStyles.button} ${classes || ""}`} onClick={onClick}>
      {/* {leadingIcon && <span className="w-(--spacing-md) h-(--spacing-md)">{leadingIcon}</span>} */}
      {children}
      {trailingIcon && <span className="w-(--spacing-lg) h-(--spacing-lg)">{trailingIcon}</span>}
    </button>
  );
}
