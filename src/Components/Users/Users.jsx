import React, { useContext, useState } from "react";
import styles from "./users.module.css";
import { TableCell } from "@material-ui/core";
import DeleteOutlineRoundedIcon from "@material-ui/icons/DeleteOutlineRounded";
import AddBoxRoundedIcon from "@material-ui/icons/AddBoxRounded";
import { UsersContext } from "../../helpers/usersContext/UsersContext";
import UpdateUser from "../AddNew/UpdateUser";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";

function Users({ users }) {
  const { removeUser } = useContext(UsersContext);
  const [show, setShow] = useState(false);
  const [pswsType, setpswsType] = useState(false);
  const classNameUser = users.name;

  function changeFormat() {
    // const userTable = document.querySelector

    const psws = document.querySelector(`.${classNameUser}`);
    setpswsType(!pswsType);
    pswsType ? (psws.type = "text") : (psws.type = "password");
    console.log(pswsType);
  }

  function onChange() {}

  return (
    <>
      <TableCell>{users.id}</TableCell>
      <TableCell>{users.name}</TableCell>
      <TableCell>
        <input
          type="password"
          value={users.password}
          onChange={() => onChange}
          style={{ border: "none", outline: "none" }}
          className={classNameUser}
        />
        <VisibilityOutlinedIcon
          style={{ cursor: "pointer" }}
          onClick={changeFormat}
        />
      </TableCell>
      <TableCell>
        <span
          className="badge bg-success p-2"
          style={{ fontWeight: 200, cursor: "pointer" }}
          onClick={() => setShow(true)}
        >
          Edit
        </span>

        <span className="text-danger p-1 ">
          <DeleteOutlineRoundedIcon
            onClick={() => removeUser(users.id)}
            style={{ fontSize: 29, cursor: "pointer" }}
          />
        </span>
      </TableCell>
      <UpdateUser show={show} setShow={setShow} users={users} />
    </>
  );
}

export default Users;
