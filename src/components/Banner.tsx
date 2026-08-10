import Title from "./UI/Title";
import bannerStyles from "../styles/banner.module.css";

type BannerProps = {
  subtitle: string;
  title: string;
  children: React.ReactNode;
};

export default function Banner({ subtitle, title, children }: BannerProps) {
  return (
    <div className={bannerStyles.banner}>
      <Title subtitle={subtitle} title={title} />
      {children}
    </div>
  );
}
