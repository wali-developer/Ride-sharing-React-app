import React from "react";
import UserInterfaceNavbar from "../../user_interface/UserInterfaceNavbar";
import Sidebar from "../../user_interface/Sidebar";
import UserProfile from "../../user_interface/UserProfile";
import "../../user_interface/userInterface.css";
const UserProfilePage = () => {
  return (
    <section className="user-dashboard">
      <UserInterfaceNavbar />
      <div className="container">
        <div className="row userDashboard-row">
          <Sidebar />
          <UserProfile />
        </div>
      </div>
    </section>
  );
};

export default UserProfilePage;
