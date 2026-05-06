import buttonStyles from "../../styles/buttons.module.css";

type IconButtonProps = {
  icon: React.ReactNode;
  onClick: () => void;
  classes?: string;
  size?: number;
};

export default function IconButton({ icon, onClick, classes, size = 40 }: IconButtonProps) {
  return (
    <button
      className={`${buttonStyles.iconButton} ${classes || ""}`}
      onClick={onClick}
      style={{ width: size, height: size }}
    >
      {icon}
    </button>
  );
}
