import React from "react";
import AdminNavbar from "../../Admin_panel/AdminNavbar";
import SideBar from "../../Admin_panel/SideBar";
import Rides from "../../Admin_panel/Rides";
import "../../user_interface/userInterface.css";

const AdminRidesPage = () => {
  return (
    <section className="user-dashboard">
      <AdminNavbar />
      <div className="container">
        <div className="row userDashboard-row">
          <SideBar />
          <Rides />
        </div>
      </div>
    </section>
  );
};

export default AdminRidesPage;
