"use client";

import { useRouter } from "next/navigation";
import styles from "./demo.module.css";

export default function GetDemoButton() {
  const router = useRouter();

  const handleRouteToDemo = () => {
    router.push("/demo");
  };

  return (
    <div className={styles.wrapper} onClick={handleRouteToDemo}>
      {">"} Get a demo
    </div>
  );
}
