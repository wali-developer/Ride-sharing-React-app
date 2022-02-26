import React from "react";
import UserInterfaceNavbar from "../../user_interface/UserInterfaceNavbar";
import Sidebar from "../../user_interface/Sidebar";
import UserProfileEdit from "../../user_interface/UserProfileEdit";
import "../../user_interface/userInterface.css";
const UserProfileEditPage = () => {
  return (
    <section className="user-dashboard">
      <UserInterfaceNavbar />
      <div className="container">
        <div className="row userDashboard-row">
          <Sidebar />
          <UserProfileEdit />
        </div>
      </div>
    </section>
  );
};

export default UserProfileEditPage;
