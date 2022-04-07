import React from "react";
import Messaging from "../../user_interface/messaging/Messaging";
import Sidebar from "../../user_interface/Sidebar";
import UserInterfaceNavbar from "../../user_interface/UserInterfaceNavbar";

const MessagingPage = () => {
  return (
    <section className="user-dashboard">
      <UserInterfaceNavbar />
      <div className="container">
        <div className="row userDashboard-row">
          <Sidebar />
          <Messaging />
        </div>
      </div>
    </section>
  );
};

export default MessagingPage;
