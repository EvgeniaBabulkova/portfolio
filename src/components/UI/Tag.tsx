import { useState } from "react";

type TagProps = {
  children: React.ReactNode;
  onSelect: () => void;
};

export default function Tag({ children, onSelect }: TagProps) {
  const [isSelected, setIsSelected] = useState(false);
  return (
    <button
      className={`
        px-5 py-3 rounded-(--border-radius) [font:var(--font-chip)]
        ${isSelected ? "bg-(--col-surface-invert) text-(--col-text-invert)" : "bg-(--col-surface-tertiary)"}
        `}
      onClick={() => {
        onSelect();
        setIsSelected((prev) => !prev);
      }}
    >
      {children}
    </button>
  );
}
