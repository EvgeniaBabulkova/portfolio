import aboutStyles from "../../styles/about.module.css";

export default function NowPlayingSection() {
  const featuredSong = {
    title: "Stray Dogs",
    artist: "Nothing But Thieves",
    spotifyUri: "spotify:track:2PPfvgdNJqXzHjg61y9AWh",
  };

  return (
    <section className={aboutStyles.sectionCard}>
      <h5 style={{ font: "var(--font-button)" }}>Currently playing</h5>
      <a
        href={featuredSong.spotifyUri}
        target="_blank"
        rel="noopener noreferrer"
        className={aboutStyles.songCard}
        aria-label={`Open ${featuredSong.title} by ${featuredSong.artist} on Spotify`}
      >
        <div className={aboutStyles.songIcon} aria-hidden="true">
          ♪
        </div>

        <div className="min-w-0 flex flex-col gap-(--spacing-xs)">
          <p className={aboutStyles.songTitle}>{featuredSong.title}</p>
          <p className={aboutStyles.songArtist}>{featuredSong.artist}</p>
        </div>

        <div className={aboutStyles.songLink}>
          <span>Spotify</span>
          <span aria-hidden="true">↗</span>
        </div>
      </a>
    </section>
  );
}
