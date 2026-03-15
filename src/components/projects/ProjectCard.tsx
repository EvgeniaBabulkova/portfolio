type ProjectCardProps = {
  logo: string;
  bkgColor: string;
};

export default function ProjectCard({ logo, bkgColor }: ProjectCardProps) {
  return (
    <div className={`w-80 h-110 rounded-(--border-radius)`} style={{ backgroundColor: bkgColor }}>
      {logo}
    </div>
  );
}
