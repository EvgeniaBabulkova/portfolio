import Title from "./UI/Title";

type BannerProps = {
  subtitle: string;
  title: string;
  children: React.ReactNode;
};

export default function Banner({ subtitle, title, children }: BannerProps) {
  return (
    <div
      className="
        flex 
        flex-col 
        gap-(--spacing-xl) 
        px-(--spacing-xxl) 
        py-(--spacing-3xl) 
        bg-(--col-surface-primary) 
        rounded-(--border-radius) 
        items-start"
    >
      <Title subtitle={subtitle} title={title} />
      {children}
    </div>
  );
}
