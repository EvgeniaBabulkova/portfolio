import aboutStyles from "../../styles/about.module.css";

export default function NowPlayingSection() {
  return (
    <section className={aboutStyles.sectionCard}>
      <h5>Currently playing</h5>
      <iframe
        data-testid="embed-iframe"
        src="https://open.spotify.com/embed/track/7bDkxTKUbQZgQEbWqeTJYg?utm_source=generator&si=85fdb68b016b4bb9"
        width="100%"
        height="152"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </section>
  );
}
