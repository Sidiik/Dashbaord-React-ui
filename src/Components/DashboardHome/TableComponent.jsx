import React, { useState } from "react";
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

  return (
    <div className={styles.tblUsers}>
      <div className={styles.topSection}>
        <span className="badge bg-primary mb-3 p-2 rounded ">
          <span className={styles.btitle}>Active users</span>
        </span>
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
            {users.map((users) => (
              <TableRow>
                <Users users={users} />
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
