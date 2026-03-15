type ButtonProps = {
  children: React.ReactNode;
  trailingIcon?: React.ReactNode;
  leadingIcon?: React.ReactNode;
};

export default function ({ children, trailingIcon, leadingIcon }: ButtonProps) {
  return (
    <button className="flex items-center bg-(--col-surface-secondary) [font:var(--font-button)] px-(--spacing-lg) py-(--spacing-md) shadow-(--shadow) gap-(--spacing-sm)">
      {leadingIcon && <span className="w-(--spacing-md) h-(--spacing-md)">{leadingIcon}</span>}
      {children}
      {trailingIcon && <span className="w-(--spacing-md) h-(--spacing-md)">{trailingIcon}</span>}
    </button>
  );
}
