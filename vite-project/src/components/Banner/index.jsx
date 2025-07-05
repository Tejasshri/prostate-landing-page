import React from "react";
import styles from "./index.module.css";



const Banner = () => {
  return (
    <div className={styles.container}>
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          {/* Left Side */}
          <div className={styles.textSection}>
            <h1 className={styles.heading}>
              Enlarged Prostate <br />
              Treatment <br />
              in <span className={styles.highlight}>Banjara Hills</span>
            </h1>
            <button className={styles.bookButton}>
              BOOK YOUR APPOINTMENT NOW
            </button>
          </div>

        
        </div>
      </section>

      {/* Form Section */}
      <section className={styles.formSection}>
        <h2 className={styles.formHeading}>Book Your Consultation Today</h2>
        <form className={styles.form}>
          <div>
              <input type="text" placeholder="Name" className={styles.input} />
          <input type="text" placeholder="Phone" className={styles.input} />
          <input type="text" placeholder="email" className={styles.input} />
          <input type="text" placeholder="Message" className={styles.input} />
          </div>
        
          <button type="submit" className={styles.scheduleButton}>
            SCHEDULE NOW
          </button>
        </form>
      </section>
    </div>
  );
};

export default Banner;
