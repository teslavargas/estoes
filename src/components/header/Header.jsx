import React from "react";
import Logo from "../../assets/images/logo.png";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <img className={styles.logo} src={Logo} />
    </header>
  );
};

export default Header;
