import React from "react";
import AdminNavbar from "./AdminNavbar";
import SideBar from "./SideBar";
import "../user_interface/userInterface.css";
import AdminDashboard from "./AdminDashboard";

const AdminPanel = () => {
  return (
    <section className="user-dashboard">
      <AdminNavbar />
      <div className="container">
        <div className="row userDashboard-row">
          <SideBar />
          <AdminDashboard />
        </div>
      </div>
    </section>
  );
};

export default AdminPanel;
