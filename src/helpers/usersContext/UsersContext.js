import { createContext, useReducer } from "react";
import { UsersReducer } from "./UsersReducer";

export const UsersContext = createContext({});

export const UsersContextProvider = ({ children }) => {
  const [users, dispach] = useReducer(UsersReducer, [
    {
      id: 1,
      name: "sadiq",
      userSecret: "123sadiq",
    },
    {
      id: Math.floor(Math.random() * 10000),
      name: "ali",
      userSecret: "ali11",
    },
    {
      id: Math.floor(Math.random() * 10000),
      name: "ali",
      userSecret: "ali11",
    },
    {
      id: Math.floor(Math.random() * 10000),
      name: "ali",
      userSecret: "ali11",
    },
    {
      id: Math.floor(Math.random() * 10000),
      name: "ali",
      userSecret: "ali11",
    },
  ]);

  const removeUser = (id) => {
    dispach({
      type: "REMOVE_USER",
      id: id,
    });
  };

  return (
    <UsersContext.Provider
      value={{
        users,
        dispach,
        removeUser,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};
