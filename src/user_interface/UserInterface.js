import React from "react";
import Sidebar from "./Sidebar";
import UserDashboard from "./UserDashboard";
import "./userInterface.css";
import UserInterfaceNavbar from "./UserInterfaceNavbar";

const UserInterface = () => {
  return (
    <section className="user-dashboard">
      <UserInterfaceNavbar />
      <div className="container">
        <div className="row userDashboard-row">
          <Sidebar />
          <UserDashboard />
        </div>
      </div>
    </section>
  );
};

export default UserInterface;
