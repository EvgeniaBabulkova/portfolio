import { useEffect, useState } from "react";
import styles from "../styles/underConstruction.module.css";

const glitchFrames = ["UNDER CONSTRUCTION", "UND3R C0NSTRUCT10N", "UNDEr CONSTRUCTION", "UNDER C█NSTRUCTION"];

export default function UnderConstruction() {
  const [frame, setFrame] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFrame((f) => (f + 1) % glitchFrames.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const blink = setInterval(() => setVisible((v) => !v), 530);
    return () => clearInterval(blink);
  }, []);

  return (
    <div className={styles.underConstruction}>
      <div className={styles.titleWrap}>
        <h2>{glitchFrames[frame]}</h2>
        <span className={`${styles.cursor} ${visible ? styles.visible : styles.hidden}`}>█</span>
      </div>

      <p>Ops, you're faster than I am... This page will be creaeted soon!</p>

      <div className={styles.progressTrack}>
        <div className={styles.progressBar} />
      </div>
    </div>
  );
}
