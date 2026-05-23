type TitleProps = {
  subtitle: string;
  title: string;
};

export default function Title({ subtitle, title }: TitleProps) {
  return (
    <div className="inline-block">
      <p className="[font:var(--font-label)] max-sm:[font:var(--font-label-mobile)] text-(--col-text-tertiary)">
        {subtitle}
      </p>
      <h1>{title}</h1>
    </div>
  );
}
