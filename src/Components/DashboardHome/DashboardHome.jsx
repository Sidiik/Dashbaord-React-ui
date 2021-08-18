import React, { useContext } from "react";
import styles from "./home.module.css";
import { UsersContext } from "../../helpers/usersContext/UsersContext";
import TableComponent from "./TableComponent";

function DashboardHome() {
  const { users } = useContext(UsersContext);

  return (
    <div className={styles.dashboardBody}>
      <div className={styles.boxes}>
        <div className={styles.box}>
          <h5>Earnings</h5>
          <h2>$200</h2>
          <p>Lastly updated Today</p>
        </div>
        <div className={styles.box}>
          <h5>New transactions</h5>
          <h2>23</h2>
          <p>Lastly updated Today</p>
        </div>
        <div className={styles.box}>
          <h5>Earnings</h5>
          <h2>$200</h2>
          <p>Lastly updated Today</p>
        </div>
      </div>

      <TableComponent users={users} />
    </div>
  );
}

export default DashboardHome;
