import React from "react";
import AdminNavbar from "../../Admin_panel/AdminNavbar";
import SideBar from "../../Admin_panel/SideBar";
import AdminProfile from "../../Admin_panel/AdminProfile";
import "../../user_interface/userInterface.css";

const AdminProfilePage = () => {
  return (
    <section className="user-dashboard">
      <AdminNavbar />
      <div className="container">
        <div className="row userDashboard-row">
          <SideBar />
          <AdminProfile />
        </div>
      </div>
    </section>
  );
};

export default AdminProfilePage;
