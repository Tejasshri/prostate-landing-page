import React from "react";
import styles from "./index.module.css";

const ExpertCare = () => {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <div className={styles.text}>
          <h2>Expert Urologic Care, Trusted by Thousands</h2>
          <p>
            Get safe, advanced, and effective Enlarged Prostate (BPH) <br />{" "}
            treatment at AINU, Hyderabad’s leading urology hospital.
          </p>
          <ul>
            <li>Minimally Invasive Options</li>
            <li>Same-Day Discharge</li>
            <li>24/7 Urology Care</li>
            <li>NABH Accredited Facility</li>
          </ul>
          <button className={styles.button}>BOOK AN APPOINTMENT NOW</button>
        </div>
      </div>
    </section>
  );
};

export default ExpertCare;
