import React, { useContext, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { UsersContext } from "../../helpers/usersContext/UsersContext";

function Add({ show, setShow }) {
  const { dispach } = useContext(UsersContext);

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    dispach({
      type: "ADD_USER",
      users: {
        name,
        password: password,
      },
    });
    setShow(false);
  }
  return (
    <div>
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
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="formgroup mt-2">
              <input
                type="password"
                className="form-control "
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="d-grid gap-2 mt-3">
              <Button
                type="submit"
                variant="primary"
                size="sm"
                onClick={handleSubmit}
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

export default Add;
