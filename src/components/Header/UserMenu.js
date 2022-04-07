import React from "react";
import { Link } from "react-router-dom";
// import { MdOutlineSpaceDashboard, MdPersonOutline } from "react-icons/md";
// import { FiUsers } from "react-icons/fi";

const UserMenu = ({ user }) => {
  const { userName, email } = user;
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");
    window.location.reload();
  };
  if (email === "waliullah@trusticar.com" && userName === "admin") {
    return (
      <>
        <Link to="/admin-dashboard">
          <button type="button" className="btn btn-outline-success login">
            Admin Account
          </button>
        </Link>
        <span
          type="button"
          className="btn btn-outline-success login dropdown-toggle dropdown-toggle-split"
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
          <li className="my-2">
            {/* <MdOutlineSpaceDashboard /> */}
            <Link to={`/admin-dashboard`} className="dropdown-item">
              Admin Dashboard
            </Link>
          </li>
          <li className="my-2">
            {/* <MdPersonOutline /> */}
            <Link to="/admin-dashboard/profile" className="dropdown-item">
              Admin Profile
            </Link>
          </li>
          <li className="my-2">
            {/* <FiUsers /> */}
            <Link to="/admin-dashboard/riders" className="dropdown-item">
              Riders
            </Link>
          </li>
          <li className="my-2">
            {/* <FiUsers /> */}
            <Link to="/admin-dashboard/rides" className="dropdown-item">
              Rides
            </Link>
          </li>
          <li className="my-2">
            {/* <FiUsers /> */}
            <Link to="/admin-dashboard/drivers" className="dropdown-item">
              Drivers
            </Link>
          </li>
          <li className="my-2">
            {/* <MdPersonOutline /> */}
            <Link to="/admin-dashboard/logout" className="dropdown-item">
              Logout
            </Link>
          </li>
        </ul>
      </>
    );
  } else {
    return (
      <>
        <Link to="/user-dashboard">
          <button type="button" className="btn btn-outline-success login">
            My Account
          </button>
        </Link>
        <span
          type="button"
          className="btn btn-outline-success login dropdown-toggle dropdown-toggle-split"
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
          style={{ width: "300px" }}
        >
          <li className="my-2">
            <Link to={`/user-dashboard`} className="dropdown-item">
              User Dashboard
            </Link>
          </li>
          <li className="my-2">
            <Link to="/user-dashboard/profile" className="dropdown-item">
              User Profile
            </Link>
          </li>
          <li className="my-2">
            <Link to="/user-dashboard/publishride" className="dropdown-item">
              Publish Ride
            </Link>
          </li>
          <li className="my-2">
            <Link to="/user-dashboard/riderequest" className="dropdown-item">
              Request for a Ride
            </Link>
          </li>
          <li className="my-2">
            <Link to="/" className="dropdown-item" onClick={handleLogout}>
              Logout
            </Link>
          </li>
        </ul>
      </>
    );
  }
};

export default UserMenu;
