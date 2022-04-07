import React from "react";
import MyRideRequests from "../../user_interface/MyRideRequests";
import Sidebar from "../../user_interface/Sidebar";
import UserInterfaceNavbar from "../../user_interface/UserInterfaceNavbar";
import "../../user_interface/userInterface.css";

const MyRideReqPage = () => {
  return (
    <section className="user-dashboard">
      <UserInterfaceNavbar />
      <div className="container">
        <div className="row userDashboard-row">
          <Sidebar />
          <MyRideRequests />
        </div>
      </div>
    </section>
  );
};

export default MyRideReqPage;
