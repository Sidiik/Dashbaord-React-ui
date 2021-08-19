import React, { useState, useEffect } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Users from "../Users/Users";
import styles from "./home.module.css";
import { Typography } from "@material-ui/core";
import { Button, Modal } from "react-bootstrap";
import Add from "../AddNew/Add";
function TableComponent({ users }) {
  const [show, setShow] = useState(false);
  const addUser = "New user";
  const [number, setNumber] = useState(0);
  useEffect(() => {
    setNumber(users.length);
  }, [users]);

  return (
    <div className={styles.tblUsers}>
      <div className={styles.topSection}>
        <div className="active d-flex align-items-center justify-content-between ">
          <h4 style={{ marginRight: ".5rem" }}>Active users</h4>
          <span className="badge bg-primary mb-2  ">
            <span className={styles.btitle}>{number}</span>
          </span>
        </div>
        <Button variant="outline-primary" onClick={() => setShow(true)}>
          New
        </Button>
      </div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography>ID</Typography>
              </TableCell>
              <TableCell>
                <Typography>Username</Typography>
              </TableCell>
              <TableCell>
                <Typography>password</Typography>
              </TableCell>
              <TableCell>
                <Typography>Actions</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((users, idx) => (
              <TableRow>
                <Users key={idx} users={users} />
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Add show={show} setShow={setShow} addUser={addUser} />
    </div>
  );
}

export default TableComponent;
