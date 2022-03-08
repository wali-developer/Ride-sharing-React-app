import React from "react";
import UserInterfaceNavbar from "../../user_interface/UserInterfaceNavbar";
import Sidebar from "../../user_interface/Sidebar";
import UserLogout from "../../user_interface/UserLogout.js";
import "../../user_interface/userInterface.css";

const UserLogoutPage = () => {
  return (
    <section className="user-dashboard">
      <UserInterfaceNavbar />
      <div className="container">
        <div className="row userDashboard-row">
          <Sidebar />
          <UserLogout />
        </div>
      </div>
    </section>
  );
};

export default UserLogoutPage;
