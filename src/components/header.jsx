//import { useState } from 'react'
import HeaderIcon from "../components/header.png";
import styles  from "./header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={HeaderIcon} alt="Header Icon" />
    </header>
  );
}
