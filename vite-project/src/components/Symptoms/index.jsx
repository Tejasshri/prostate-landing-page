// Symptoms/index.jsx
import React from "react";
import styles from "./index.module.css";

const Symptoms = () => (
  <section className={styles.section}>
    <div className={styles.content}>
      <div className={styles.text}>
        <h3>Enlarged Prostate Symptoms</h3>
        <ul>
          <li>Frequent or urgent urination</li>
          <li>Weak or slow urine stream</li>
          <li>Difficulty starting to urinate</li>
          <li>Waking up at night to urinate (nocturia)</li>
          <li>Incomplete bladder emptying</li>
          <li>Sudden strong urges</li>
        </ul>
        <p className={styles.warning}>
          These symptoms may indicate BPH or other conditions.
          Only a urologist can confirm the cause.
        </p>
        <button className={styles.button}>BOOK A PSA TEST NOW</button>
      </div>
      <div className={styles.imageBackground}></div>
    </div>
  </section>
);

export default Symptoms;