import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { toast } from "react-toastify";
import { MdOutlineDashboard, MdOutlineWbIridescent } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import {
  IoCloseOutline,
  IoPeopleOutline,
  IoWalkOutline,
} from "react-icons/io5";

const SideBar = () => {
  const [userName, setUserName] = useState("");
  useEffect(() => {
    const LoginUser = () => {
      const userName = JSON.parse(localStorage.getItem("user"));
      setUserName(userName.fullName);
    };
    LoginUser();
  });
  const Logout = () => {
    localStorage.clear();
    window.location.href = "/";
    toast.success("You are successfully logout...");
  };
  return (
    <div className="col-md-3 sidebar">
      <div className="sidebar-content">
        <div className="sidebar-header">
          <div className="user-image">
            <FaUserCircle className="user-photo" />
          </div>
          <div className="user-name">
            <h3>{userName}</h3>
          </div>
        </div>
        <div className="sidebar-menu">
          <ul className="nav nav-tabs flex-column">
            <li className="nav-item d-flex align-items-center SidebarMenuItem">
              <MdOutlineDashboard className="sidebarMenuIcon" />
              <Link to="/admin-dashboard" className="nav-link">
                Dashboard
              </Link>
            </li>
            <li className="nav-item active d-flex align-items-center SidebarMenuItem">
              <AiOutlineUser className="sidebarMenuIcon" />
              <Link to="/admin-dashboard/profile" className="nav-link">
                Profile
              </Link>
            </li>
            <li className="nav-item d-flex align-items-center SidebarMenuItem">
              <IoPeopleOutline className="sidebarMenuIcon" />
              <Link to="/admin-dashboard/riders" className="nav-link">
                Riders
              </Link>
            </li>
            <li className="nav-item d-flex align-items-center SidebarMenuItem">
              <MdOutlineWbIridescent className="sidebarMenuIcon" />
              <Link to="/admin-dashboard/rides" className="nav-link">
                Rides
              </Link>
            </li>

            <li className="nav-item d-flex align-items-center SidebarMenuItem">
              <IoWalkOutline className="sidebarMenuIcon" />
              <Link to="/admin-dashboard/drivers" className="nav-link">
                Drivers
              </Link>
            </li>
            <li className="nav-item d-flex align-items-center SidebarMenuItem">
              <IoCloseOutline className="sidebarMenuIcon" />
              <button className="nav-link" onClick={Logout}>
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
