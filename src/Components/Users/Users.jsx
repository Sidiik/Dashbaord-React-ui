import React, { useContext } from "react";
import styles from "./users.module.css";
import { TableCell } from "@material-ui/core";
import DeleteOutlineRoundedIcon from "@material-ui/icons/DeleteOutlineRounded";
import AddBoxRoundedIcon from "@material-ui/icons/AddBoxRounded";
import { UsersContext } from "../../helpers/usersContext/UsersContext";
function Users({ users }) {
  const { removeUser } = useContext(UsersContext);

  return (
    <>
      <TableCell>{users.id}</TableCell>
      <TableCell>{users.name}</TableCell>
      <TableCell>{users.userSecret}</TableCell>
      <TableCell>
        <span
          className="badge bg-success p-2"
          style={{ fontWeight: 200, cursor: "pointer" }}
        >
          Edit
        </span>
        <span className="text-primary m-2 p-1 ">
          <AddBoxRoundedIcon style={{ fontSize: 29, cursor: "pointer" }} />
        </span>
        <span className="text-danger p-1 ">
          <DeleteOutlineRoundedIcon
            onClick={() => removeUser(users.id)}
            style={{ fontSize: 29, cursor: "pointer" }}
          />
        </span>
      </TableCell>
    </>
  );
}

export default Users;
