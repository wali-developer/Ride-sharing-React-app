import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

const Sidebar = () => {
  const [userName, setUserName] = useState("");
  useEffect(() => {
    const LoginUser = JSON.parse(localStorage.getItem("user"));
    setUserName(LoginUser.fullName);
  });
  const Logout = () => {
    localStorage.clear();
    window.location.href = "/";
    alert("You are successfully logout...");
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
            <li className="nav-item">
              <Link to="/user-dashboard" className="nav-link">
                Dashboard
              </Link>
            </li>
            <li className="nav-item active">
              <Link to="/user-dashboard/profile" className="nav-link">
                Profile
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/user-dashboard/publishride" className="nav-link">
                Publish Ride
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/user-dashboard/riderequest" className="nav-link">
                Request for Ride
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#" className="nav-link">
                Someting else
              </Link>
            </li>

            <li className="nav-item">
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
