import React, { useState } from "react";
import styles from "./index.module.css";

import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig"; // adjust path as needed

const Banner = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "formSubmissions"), {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        message: formData.message,
        timestamp: new Date(),
      });

      alert("Form submitted successfully to Firebase!");
      setFormData({ name: "", phone: "", email: "", message: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting form. Try again.");
    }
  };

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
        <form className={styles.form} onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className={styles.input}
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              className={styles.input}
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className={styles.input}
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="message"
              placeholder="Message"
              className={styles.input}
              value={formData.message}
              onChange={handleChange}
            />
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
