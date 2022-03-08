import React, { useEffect } from "react";

const UserLogout = () => {
  useEffect(() => {
    localStorage.clear();
    window.location.href = "/";
    alert("You are successfully logout...");
  });
};

export default UserLogout;
