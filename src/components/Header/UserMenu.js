import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineDashboard, MdOutlineWbIridescent } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import { FaUserTie } from "react-icons/fa";
import {
  IoCarSportOutline,
  IoAddCircleOutline,
  IoReturnUpForwardOutline,
  IoCloseOutline,
  IoPeopleOutline,
  IoWalkOutline,
} from "react-icons/io5";

const UserMenu = ({ user }) => {
  const { userName, email } = user;
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");
    window.location.reload();
  };
  if (email === "waliullah@trusticar.com" && userName === "admin") {
    return (
      <section style={{ width: "350px", textAlign: "right" }}>
        <Link to="/admin-dashboard">
          <span className="LoginUserName">{user.userName}</span>
          <FaUserTie className="NavbarUserIcon" />
        </Link>
        <span
          className="dropdown-toggle dropdown-toggle-split"
          id="dropdownMenuReference"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          data-bs-reference="parent"
        >
          <span className="visually-hidden">Toggle Dropdown</span>
        </span>

        <ul
          className="dropdown-menu py-3"
          aria-labelledby="dropdownMenuReference"
        >
          <li className="my-2 d-flex align-items-center userMenuRow">
            <MdOutlineDashboard className="userMenuIcon" />
            <Link to={`/admin-dashboard`} className="dropdown-item">
              Admin Dashboard <IoReturnUpForwardOutline className="mx-3" />
            </Link>
          </li>
          <li className="my-2 d-flex align-items-center userMenuRow">
            <AiOutlineUser className="userMenuIcon" />
            <Link to="/admin-dashboard/profile" className="dropdown-item">
              Admin Profile <IoReturnUpForwardOutline className="mx-3" />
            </Link>
          </li>
          <li className="my-2 d-flex align-items-center userMenuRow">
            <IoPeopleOutline className="userMenuIcon" />
            <Link to="/admin-dashboard/riders" className="dropdown-item">
              Riders <IoReturnUpForwardOutline className="mx-3" />
            </Link>
          </li>
          <li className="my-2 d-flex align-items-center userMenuRow">
            <MdOutlineWbIridescent className="userMenuIcon" />
            <Link to="/admin-dashboard/rides" className="dropdown-item">
              Rides <IoReturnUpForwardOutline className="mx-3" />
            </Link>
          </li>
          <li className="my-2 d-flex align-items-center userMenuRow">
            <IoWalkOutline className="userMenuIcon" />
            <Link to="/admin-dashboard/drivers" className="dropdown-item">
              Drivers <IoReturnUpForwardOutline className="mx-3" />
            </Link>
          </li>
          <li className="my-2 d-flex align-items-center userMenuRow">
            <IoCloseOutline className="userMenuIcon" />
            <Link to="/admin-dashboard/logout" className="dropdown-item">
              Logout <IoReturnUpForwardOutline className="mx-3" />
            </Link>
          </li>
        </ul>
      </section>
    );
  } else {
    return (
      <section style={{ width: "350px", textAlign: "right" }}>
        <Link to="/user-dashboard">
          <span className="LoginUserName">{user.fullName}</span>
          <FaUserTie className="NavbarUserIcon" />
        </Link>
        <span
          className="dropdown-toggle dropdown-toggle-split"
          id="dropdownMenuReference"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          data-bs-reference="parent"
        >
          <span className="visually-hidden">Toggle Dropdown</span>
        </span>
        <ul
          className="dropdown-menu py-3"
          aria-labelledby="dropdownMenuReference"
        >
          <li className="my-2 d-flex align-items-center userMenuRow">
            <MdOutlineDashboard className="userMenuIcon" />
            <Link to={`/user-dashboard`} className="dropdown-item">
              User Dashboard <IoReturnUpForwardOutline className="mx-3" />
            </Link>
          </li>
          <li className="my-2 d-flex align-items-center userMenuRow">
            <AiOutlineUser className="userMenuIcon" />
            <Link to="/user-dashboard/profile" className="dropdown-item">
              User Profile <IoReturnUpForwardOutline className="mx-3" />
            </Link>
          </li>
          <li className="my-2 d-flex align-items-center userMenuRow">
            <IoAddCircleOutline className="userMenuIcon" />
            <Link to="/user-dashboard/publishride" className="dropdown-item">
              Publish Ride <IoReturnUpForwardOutline className="mx-3" />
            </Link>
          </li>
          <li className="my-2 d-flex align-items-center userMenuRow">
            <IoCarSportOutline className="userMenuIcon" />
            <Link to="/user-dashboard/riderequest" className="dropdown-item">
              Request for a Ride <IoReturnUpForwardOutline className="mx-3" />
            </Link>
          </li>
          <li className="my-2 d-flex align-items-center userMenuRow">
            <IoCloseOutline className="userMenuIcon" />
            <Link to="/" className="dropdown-item" onClick={handleLogout}>
              Logout <IoReturnUpForwardOutline className="mx-3" />
            </Link>
          </li>
        </ul>
      </section>
    );
  }
};

export default UserMenu;
