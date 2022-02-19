import React from "react";
import { Link } from "react-router-dom";

const UserInterfaceNavbar = () => {
  return (
    <div className="logo">
      <Link to={"/"} className="navbar-brand">
        TrustiCar
      </Link>
    </div>
  );
};

export default UserInterfaceNavbar;
