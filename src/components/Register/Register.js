import React, { useState, useEffect } from "react";
import Navbar from "../Header/Navbar";
import Footer from "../footer/Footer";
import "../../style/form.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import AOS from "aos";
import { useHistory } from "react-router-dom";
import API from '../../API';

const Register = () => {
  const history = useHistory();
  const [formData, setFormData] = useState({
    fullName: "",
    userName: "",
    email: "",
    password: "",
    userType: "",
  });

  // handle user registration
  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const { data } = await API.post(
        "user/register",
        formData
      );
      if (data === "User has already Register...") {
        toast.error(data, { position: "top-center" });
      } else {
        toast.success(data);
      }
    } catch (err) {
      console.log(err);
    }
    setFormData({
      fullName: "",
      userName: "",
      email: "",
      password: "",
      userType: "",
    });
    history.push("/login");
  };

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <Navbar />
      <section className="formContainer">
        <div className="container">
          <div className="Register" data-aos="zoom-in" data-aos-duration="1200">
            <h2 className="text-center my-5">Register yourself on TrustiCar</h2>
            <form onSubmit={(e) => handleRegister(e)}>
              <div className="mb-4 input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Full Name..."
                  name="fullName"
                  onChange={(event) => {
                    setFormData({ ...formData, fullName: event.target.value });
                  }}
                />
              </div>
              <div className="mb-4 input-group">
                <input
                  type="username"
                  className="form-control"
                  placeholder="Username..."
                  name="username"
                  onChange={(event) => {
                    setFormData({ ...formData, userName: event.target.value });
                  }}
                />
              </div>
              <div className="mb-4 input-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email..."
                  name="email"
                  onChange={(event) => {
                    setFormData({ ...formData, email: event.target.value });
                  }}
                />
              </div>
              <div className="mb-4 input-group">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password..."
                  name="password"
                  onChange={(event) => {
                    setFormData({ ...formData, password: event.target.value });
                  }}
                />
              </div>
              <label>Select user type</label>
              <select
                className="mb-4 form-select"
                aria-label="Default select example"
                placeholder="User type"
                name="usertype"
                onChange={(event) => {
                  setFormData({ ...formData, userType: event.target.value });
                }}
              >
                <option value="Passenger">Passenger</option>
                <option value="Driver">Driver</option>
              </select>

              <Link to="/login">
                <p className="alreadyAccount">Already have Account ?</p>
              </Link>
              <button type="submit" className="btn btn-primary primaryBtn">
                Register
              </button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Register;
