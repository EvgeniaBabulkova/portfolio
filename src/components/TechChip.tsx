import techChipStyles from "../styles/techChip.module.css";

type TechChipProps = {
  iconSrc: string;
  label: string;
};

export default function TechChip({ iconSrc, label }: TechChipProps) {
  return (
    <div className={techChipStyles.techChip} title={label} aria-label={label} role="img">
      <img src={iconSrc} alt={label} className={techChipStyles.techChipIcon} />
    </div>
  );
}
