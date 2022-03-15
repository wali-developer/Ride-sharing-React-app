import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const UserProfile = () => {
  const [user, setUser] = useState({
    id: "",
    fullName: "",
    userName: "",
    email: "",
    password: "",
    userType: "",
  });
  const history = useHistory();
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

  const handleEdit = (e) => {
    e.preventDefault();

    history.push({
      pathname: "/user-dashboard/profile/edit/" + user.id,
      state: { user: user },
    });
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
              onChange={(e) => console.log("input changed...")}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">User Name</label>
            <input
              type="text"
              className="form-control"
              value={user.userName}
              onChange={(e) => console.log("input changed...")}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              value={user.email}
              onChange={(e) => console.log("input changed...")}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              disabled
              value={user.password}
              onChange={(e) => console.log("input changed...")}
            />
          </div>
          <div className="mb-3 mt-4">
            <label>User type</label>
            <select
              className="mb-4 form-select"
              aria-label="Default select example"
              placeholder="User type"
              name="userType"
              value={user.userType}
              onChange={(e) => console.log("input changed...")}
            >
              <option value="Passenger">Passenger</option>
              <option value="Driver">Driver</option>
            </select>
          </div>
          <button className="btn btn-primary" onClick={(e) => handleEdit(e)}>
            Edit Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserProfile;
