import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <div>space ai</div>
        <div>get a demo</div>
      </div>
      <div className={styles.body}>
        <div className={styles.bodyHeaderText}>The AI AdMaker</div>
      </div>
    </div>
  );
}
