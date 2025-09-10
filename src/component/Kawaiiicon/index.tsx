import React from "react";
import { isContext } from "vm";
import styles from "./index.module.css";

interface ButtonProps {
  children?: React.ReactNode;
  color?: string;
  icon?: React.ReactNode;
}

const Kawaiiicon = ({ children, color, icon }: ButtonProps) => {
  return (
    <a className={styles.button} style={{ backgroundColor: color }}>
      <div className={styles.icon}>{icon}</div>
      <div className={styles.moji}>{children}</div>
    </a>
  );
};
export default Kawaiiicon;
