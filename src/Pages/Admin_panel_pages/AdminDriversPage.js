import React from "react";
import AdminNavbar from "../../Admin_panel/AdminNavbar";
import Drivers from "../../Admin_panel/Drivers";
import SideBar from "../../Admin_panel/SideBar";
import "../../user_interface/userInterface.css";

const AdminDriversPage = () => {
  return (
    <section className="user-dashboard">
      <AdminNavbar />
      <div className="container">
        <div className="row userDashboard-row">
          <SideBar />
          <Drivers />
        </div>
      </div>
    </section>
  );
};

export default AdminDriversPage;
