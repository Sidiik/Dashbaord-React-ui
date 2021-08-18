import Header from "./Components/Header/Header";
import Menus from "./Components/Menus/Menu";
import DashboardHome from "./Components/DashboardHome/DashboardHome";
import {
  UsersContextProvider,
  UsersContext,
} from "./helpers/usersContext/UsersContext";
import { useReducer, useContext } from "react";

function App() {
  const { users } = useContext(UsersContext);
  console.log(users);
  return (
    <UsersContextProvider>
      <div className="app">
        <div className="header">
          <Header />
        </div>
        <div className="dashboard-body">
          <div className="left-side">
            <Menus />
          </div>
          <div className="right-side">
            <DashboardHome />
          </div>
        </div>
      </div>
    </UsersContextProvider>
  );
}

export default App;
