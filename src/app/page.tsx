"use client";

import GetDemoButton from "@/components/GetDemoButton/GetDemoButton";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <div>space ai</div>
        <GetDemoButton />
      </div>
      <div className={styles.body}>
        <div className={styles.bodyHeaderText}>The AI AdMaker</div>
        <div className={styles.bodyHeaderSecondaryText}>
          Create winning ads in minutes
        </div>
        <div
          style={{
            display: "flex",
            paddingTop: 20,
          }}
        >
          <GetDemoButton />
        </div>
      </div>
    </div>
  );
}
