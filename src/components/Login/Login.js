import React, { useState } from "react";
import { FaUserAlt, FaEye } from "react-icons/fa";
import Footer from "../footer/Footer";
import Navbar from "../Header/Navbar";
import "../../style/form.css";
import axios from "axios";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // handle user login
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:3001/user/login",
        formData
      );
      alert(data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <Navbar />
      <section className="formContainer">
        <div className="container">
          <div className="Login">
            <h1>Welcome Back !</h1>
            <h2 className="text-start my-4">Login to your Account</h2>
            <form onSubmit={(e) => handleLogin(e)}>
              <div className="mb-4 input-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your Email..."
                  name="email"
                  onChange={(event) => {
                    setFormData({ ...formData, email: event.target.value });
                  }}
                />
                <FaUserAlt className="loginIon" />
              </div>
              <div className="mb-4 input-group">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password..."
                  autoComplete="off"
                  name="password"
                  onChange={(event) => {
                    setFormData({ ...formData, password: event.target.value });
                  }}
                />
                <FaEye className="loginIon" />
              </div>
              <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" />
                <label className="form-check-label">Remember me</label>
              </div>
              <a href="#">
                <p className="forgot">Forgot Password</p>
              </a>
              <button
                type="submit"
                className="btn btn-primary"
                className="primaryBtn"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Login;
