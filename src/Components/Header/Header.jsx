import React from "react";
import styles from "./main.module.css";
import { Typography, Avatar } from "@material-ui/core";
import NotificationsActiveOutlinedIcon from "@material-ui/icons/NotificationsActiveOutlined";
import LanguageOutlinedIcon from "@material-ui/icons/LanguageOutlined";

function Header() {
  return (
    <div className={styles.header}>
      <Typography variant="h4">Trad Tech</Typography>
      <div className={styles.actions}>
        <LanguageOutlinedIcon className={styles.icon} />
        <NotificationsActiveOutlinedIcon className={styles.icon} />
        <Avatar src="https://images.unsplash.com/photo-1628786748856-1156ad561867?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
      </div>
    </div>
  );
}

export default Header;
