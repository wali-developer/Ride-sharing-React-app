import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./userInterface.css";

const UserInterface = () => {
  return (
    <section className="user-dashboard">
      <div className="logo">
        <Link to={"/"} className="navbar-brand">
          TrustiCar
        </Link>
      </div>
      <div className="container">
        <div className="row userDashboard-row">
          <div className="col-md-3 sidebar">
            <div className="sidebar-content">
              <div className="sidebar-header">
                <div className="user-image">
                  <FaUserCircle className="user-photo" />
                </div>
                <div className="user-name">
                  <h3>User Name</h3>
                </div>
              </div>
              <div className="sidebar-menu">
                <ul className="nav nav-tabs flex-column">
                  <li className="nav-item active">
                    <a className="nav-link" href="#">
                      Profile
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Publish Ride
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Request for Ride
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Someting else
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Someting else
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-9 dashboard-main">
            <div className="container">
              <h2>Profile</h2>
              <form className="user-Details">
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    Full Name
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">
                    User Name
                  </label>
                  <input
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">
                    Email
                  </label>
                  <input
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
                <div class="mb-3 mt-4">
                  <label>User type</label>
                  <select
                    className="mb-4 form-select"
                    aria-label="Default select example"
                    placeholder="User type"
                    name="usertype"
                  >
                    <option value="Passenger">Passenger</option>
                    <option value="Driver">Driver</option>
                  </select>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserInterface;
