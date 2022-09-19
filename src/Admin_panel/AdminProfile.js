import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import API from "../API";

const AdminProfile = () => {
  const [user, setUser] = useState({
    id: "",
    fullName: "",
    userName: "",
    email: "",
    password: "",
  });
  useEffect(() => {
    const LoginUser = JSON.parse(localStorage.getItem("user"));
    setUser({
      id: LoginUser._id,
      fullName: LoginUser.fullName,
      userName: LoginUser.userName,
      email: LoginUser.email,
      password: LoginUser.password,
      userType: LoginUser.userType,
    });
  }, []);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const { data } = await API.patch(
        `user/${user.id}`,
        user
      );
      toast.success(data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="col-md-9 userProfile-main">
      <div className="container">
        <h2>Profile</h2>
        <form className="user-Details">
          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              className="form-control"
              value={user.fullName}
              onChange={(e) => setUser({ ...user, fullName: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">User Name</label>
            <input
              type="text"
              className="form-control"
              value={user.userName}
              onChange={(e) => setUser({ ...user, userName: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              disabled
              value={user.password}
            // onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
          </div>
          <button className="btn btn-primary" onClick={(e) => handleUpdate(e)}>
            Update Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminProfile;
