import type { ReactNode } from "react";

type TagProps = {
  children: ReactNode;
  selected: boolean;
  onSelect: () => void;
};

export default function Tag({ children, selected, onSelect }: TagProps) {
  return (
    <button
      type="button"
      className={`
        px-5 py-3 rounded-(--border-radius) [font:var(--font-chip)] transition-colors duration-300 ease-out cursor-pointer
        ${selected ? "bg-(--col-surface-invert) text-(--col-text-invert)" : "bg-(--col-surface-tertiary)"}
        `}
      aria-pressed={selected}
      onClick={() => {
        onSelect();
      }}
    >
      {children}
    </button>
  );
}
