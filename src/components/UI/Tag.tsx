import type { ReactNode } from "react";

type TagProps = {
  children: ReactNode;
  selected: boolean;
  onSelect: () => void;
  small?: boolean;
};

export default function Tag({ children, selected, onSelect, small = false }: TagProps) {
  const paddingClass = small ? "px-(--spacing-md) py-(--spacing-xs)" : "px-(--spacing-lg) py-(--spacing-sm)";

  return (
    <button
      type="button"
      className={`
        ${paddingClass} rounded-(--border-radius) [font:var(--font-chip)] transition-colors duration-300 ease-out cursor-pointer
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
