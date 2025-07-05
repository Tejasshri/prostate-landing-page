// WhyItHappens/index.jsx
import React from "react";
import styles from "./index.module.css";

import Image from "../../assets/why-it-happens.jpg";

const WhyItHappens = () => (
  <section className={styles.section}>
    <div className={styles.contentInner}>
      <div className={styles.text}>
        <h3>Why It Happens</h3>
        <ul>
          <li>Age-related hormonal changes</li>
          <li>Genetic factors</li>
          <li>Lifestyle-related risks like obesity</li>
          <li>Chronic conditions like diabetes & heart disease</li>
        </ul>
        <p>Worried about your prostate health?</p>
        <button className={styles.button}>BOOK YOUR BPH SCREENING NOW!</button>
      </div>
      <div className={styles.imageBackground}>
        <img src={Image} alt="" height="100%" width="100%" />
      </div>
    </div>
  </section>
);

export default WhyItHappens;
