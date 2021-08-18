import React from "react";
import styles from "./menu.module.css";
import { Button } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import AssessmentOutlinedIcon from "@material-ui/icons/AssessmentOutlined";
import MonetizationOnOutlinedIcon from "@material-ui/icons/MonetizationOnOutlined";
function Menus() {
  return (
    <div className={styles.menus}>
      <div className="menuContent">
        <p className={styles.groupTitle}>Dashboard</p>
        <ul className={styles.sideBarList}>
          <li className={styles.sideBarItem}>
            <HomeIcon className={styles.icon} /> Home
          </li>
          <li className={styles.sideBarItem}>
            <AssessmentOutlinedIcon className={styles.icon} /> Customers
          </li>
          <li className={styles.sideBarItem}>
            <MonetizationOnOutlinedIcon className={styles.icon} /> Sales
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Menus;
