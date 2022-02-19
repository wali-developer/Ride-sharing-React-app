import React from "react";
import UserInterfaceNavbar from "../../user_interface/UserInterfaceNavbar";
import Sidebar from "../../user_interface/Sidebar";
import "../../user_interface/userInterface.css";
import UserPublishRide from "../../user_interface/UserPublishRide";

const UserPublishRidePage = () => {
  return (
    <section className="user-dashboard">
      <UserInterfaceNavbar />
      <div className="container">
        <div className="row userDashboard-row">
          <Sidebar />
          <UserPublishRide />
        </div>
      </div>
    </section>
  );
};

export default UserPublishRidePage;
