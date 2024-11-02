'use client'
import styles from "./home.module.css";
import Terminal from "@/app/components/Terminal";

export default function Home() {
  return (
      <div className={styles.container + ' font-bold'}>
        <h1>
          irfanakbari:$ <span className={styles.help}>type &#39;help&#39; to start</span>
        </h1>

        <Terminal />

      </div>
  );
}