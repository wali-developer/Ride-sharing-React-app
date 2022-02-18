import React, { useState } from "react";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import Navbar from "../Header/Navbar";
import Footer from "../footer/Footer";
import "../../style/publishRideForm.css";
import axios from "axios";

const PublishRideForm = () => {
  const [passenger, setpassenger] = useState(0);
  const [goingfrom, setGoingfrom] = useState("");
  const [goingto, setGoingto] = useState("");

  const plus = () => {
    setpassenger(passenger + 1);
  };
  const minus = () => {
    setpassenger(passenger - 1);
  };

  const handleChange = (e) => {
    if (e.target.name === "goingfrom") {
      setGoingfrom(e.target.value);
    } else if (e.target.name === "goingto") {
      setGoingto(e.target.value);
    }
  };

  // when someone click on publish ride button
  const publishRideHandle = async (e) => {
    e.preventDefault();
    // axios post request
    try {
      const { data } = await axios.post("http://localhost:3001/publishride", {
        goingfrom: goingfrom,
        goingto: goingto,
        passenger: passenger,
      });
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <Navbar />
      <section className="publish-ride-container">
        <div className="container d-flex justify-content-end">
          <div className="publish-ride-form">
            <h1 className="text-center my-5">Publish Your Ride</h1>
            <form onSubmit={(e) => publishRideHandle(e)}>
              <div className="mb-4 input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Going from..."
                  name="goingfrom"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="mb-4 input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Going to..."
                  name="goingto"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="passenger-needed my-4">
                <span className="me-3">Passenger Needed:</span>
                <AiOutlinePlusCircle className="icon me-3" onClick={plus} />
                <span className="me-3">{passenger}</span>
                <AiOutlineMinusCircle className="me-3 icon" onClick={minus} />
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                className="primaryBtn"
              >
                Publish Ride
              </button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default PublishRideForm;
