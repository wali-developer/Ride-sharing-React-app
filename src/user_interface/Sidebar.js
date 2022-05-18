import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { toast } from "react-toastify";
import { MdOutlineDashboard } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import { VscGitPullRequest } from "react-icons/vsc";
import {
  IoCarSportOutline,
  IoAddCircleOutline,
  IoCloseOutline,
  IoChatboxOutline,
} from "react-icons/io5";
import AOS from "aos";

const Sidebar = () => {
  const [userName, setUserName] = useState("");
  useEffect(() => {
    const LoginUser = JSON.parse(localStorage.getItem("user"));
    setUserName(LoginUser.fullName);
  });
  const Logout = () => {
    localStorage.clear();
    window.location.href = "/";
    toast.success("You are successfully logout...", { position: "top-center" });
  };

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="col-md-3 sidebar">
      <div
        className="sidebar-content"
        data-aos="fade-right"
        data-aos-duration="1200"
      >
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
              <Link to="/user-dashboard" className="nav-link">
                Dashboard
              </Link>
            </li>
            <li className="nav-item active d-flex align-items-center SidebarMenuItem">
              <AiOutlineUser className="sidebarMenuIcon" />
              <Link to="/user-dashboard/profile" className="nav-link">
                Profile
              </Link>
            </li>
            <li className="nav-item d-flex align-items-center SidebarMenuItem">
              <IoAddCircleOutline className="sidebarMenuIcon" />
              <Link to="/user-dashboard/publishride" className="nav-link">
                Publish Ride
              </Link>
            </li>
            <li className="nav-item d-flex align-items-center SidebarMenuItem">
              <IoCarSportOutline className="sidebarMenuIcon" />
              <Link to="/user-dashboard/riderequest" className="nav-link">
                Request for Ride
              </Link>
            </li>
            <li className="nav-item d-flex align-items-center SidebarMenuItem">
              <VscGitPullRequest className="sidebarMenuIcon" />
              <Link to="/user-dashboard/my-ride-requests" className="nav-link">
                My Ride Requests
              </Link>
            </li>
            <li className="nav-item d-flex align-items-center SidebarMenuItem">
              <IoChatboxOutline className="sidebarMenuIcon" />
              <Link to="/user-dashboard/messaging" className="nav-link">
                Messaging
              </Link>
            </li>

            <li className="nav-item d-flex align-items-center SidebarMenuItem">
              <IoCloseOutline className="sidebarMenuIcon" />
              <Link
                to="/user-dashboard/logout"
                className="nav-link"
                onClick={Logout}
              >
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
