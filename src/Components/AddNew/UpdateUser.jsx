import { Checkbox } from "@material-ui/core";
import React, { useContext, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { UsersContext } from "../../helpers/usersContext/UsersContext";

function UpdateUser({ show, setShow, users }) {
  const { dispach } = useContext(UsersContext);
  const [text, setText] = useState(false);
  let [passwordStatus, setPasswordStatus] = useState("Show password");

  function handleSubmit(e) {
    e.preventDefault();
    setShow(false);
  }

  function changeFormat() {
    setText(!text);
    const psw = document.querySelector(".psw");
    if (text) {
      psw.type = "password";
    } else {
      psw.type = "text";
    }
  }
  return (
    <div>
      <Modal show={show} centered>
        <Modal.Header>
          <h4 className="text-secondary">Update user</h4>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <div className="formgroup">
              <input
                type="text"
                className="form-control"
                placeholder="Username"
                value={users.name}
                // onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="formgroup mt-2">
              <input
                type="password"
                className="form-control psw"
                placeholder="Password"
                value={users.password}
                // onChange={(e) => setPassword(e.target.value)}
              />
              <div className="bottoms d-flex justify-contenar-start align-items-center">
                <Checkbox id="checkbox" onClick={changeFormat} />
                <label
                  htmlFor="checkbox"
                  style={{ cursor: "pointer", userSelect: "none" }}
                >
                  {passwordStatus}
                </label>
              </div>
            </div>

            <div className="d-grid gap-2 mt-3">
              <Button
                type="submit"
                variant="primary"
                size="sm"
                onClick={handleSubmit}
              >
                update
              </Button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default UpdateUser;
