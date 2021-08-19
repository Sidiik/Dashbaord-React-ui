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

function TableComponent({ users }) {
  const [show, setShow] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
  }

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

      <Modal show={show} centered>
        <Modal.Header>
          <h4 className="text-secondary">Add new user</h4>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <div className="formgroup">
              <input
                type="text"
                className="form-control"
                placeholder="Username"
              />
            </div>
            <div className="formgroup mt-2">
              <input
                type="password"
                className="form-control "
                placeholder="Password"
              />
            </div>

            <div className="d-grid gap-2 mt-3">
              <Button
                type="submit"
                variant="primary"
                size="sm"
                onClick={() => setShow(false)}
              >
                Add
              </Button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default TableComponent;
