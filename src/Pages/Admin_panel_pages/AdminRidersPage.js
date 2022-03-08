import React from "react";
import AdminNavbar from "../../Admin_panel/AdminNavbar";
import SideBar from "../../Admin_panel/SideBar";
import Riders from "../../Admin_panel/Riders";
import "../../user_interface/userInterface.css";

const AdminRidersPage = () => {
  return (
    <section className="user-dashboard">
      <AdminNavbar />
      <div className="container">
        <div className="row userDashboard-row">
          <SideBar />
          <Riders />
        </div>
      </div>
    </section>
  );
};

export default AdminRidersPage;
