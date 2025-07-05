import React from "react";

import styles from "./index.module.css";

import Logo from "../../assets/navlogo.png";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <a>
        <img className={styles.navImage} src={Logo} alt="navbar" />
      </a>
      <button>Contact Us</button>
    </nav>
  );
}

export default Navbar;
