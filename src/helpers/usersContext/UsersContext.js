import { createContext, useReducer } from "react";
import { UsersReducer } from "./UsersReducer";

export const UsersContext = createContext({});

export const UsersContextProvider = ({ children }) => {
  const [users, dispach] = useReducer(UsersReducer, [
    {
      id: Math.floor(Math.random() * 10000),
      name: "ali",
      password: "ali11",
    },
  ]);

  const removeUser = (id) => {
    dispach({
      type: "REMOVE_USER",
      id: id,
    });
  };

  function edit(id, name, password) {
    dispach({
      type: "EDIT_USER",
      users: {
        name: name,
        password: password,
      },
    });
  }

  return (
    <UsersContext.Provider
      value={{
        users,
        dispach,
        removeUser,
        edit,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};
