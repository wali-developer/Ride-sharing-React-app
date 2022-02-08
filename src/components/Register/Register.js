import React from 'react';
import Navbar from '../Header/Navbar';
import Footer from '../footer/Footer';
import '../../style/form.css';

const Register = () => {
  return (
    <>
      <Navbar />
      <section className="formContainer">
        <div className="container">
          <div className="Register">
            <h2 className="text-center my-5">Register yourself on TrustiCar</h2>
            <form>
              <div className="mb-4 input-group">
                <input
                  type="fullname"
                  className="form-control"
                  placeholder="Full Name..."
                />
              </div>
              <div className="mb-4 input-group">
                <input
                  type="username"
                  className="form-control"
                  placeholder="Username..."
                />
              </div>
              <div className="mb-4 input-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email..."
                />
              </div>
              <div className="mb-4 input-group">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password..."
                />
              </div>
              <label>Select user type</label>
              <select
                className="mb-4 form-select"
                aria-label="Default select example"
                placeholder="User type"
              >
                <option value="1">Passenger</option>
                <option value="2">Driver</option>
              </select>
              <a href="#">
                <p className="alreadyAccount">Already have Account ?</p>
              </a>
              <button
                type="submit"
                className="btn btn-primary"
                className="primaryBtn"
              >
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
