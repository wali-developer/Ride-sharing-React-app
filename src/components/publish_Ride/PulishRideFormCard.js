import React, { useState } from "react";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import "../../style/publishRideForm.css";
import axios from "axios";

const PulishRideFormCard = () => {
  const [passenger, setpassenger] = useState(0);
  const [goingfrom, setGoingfrom] = useState("");
  const [goingto, setGoingto] = useState("");
  const [date, setDate] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(undefined);

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
        name: name,
        email: email,
        phone: phone,
        passenger: passenger,
        date: date,
      });
      if (data) {
        alert("Your Ride published successfully...");
      }
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1 className="text-center my-5">Publish Your Ride</h1>
      <form onSubmit={(e) => publishRideHandle(e)}>
        <div className="mb-4 input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Going from..."
            name="goingfrom"
            required
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="mb-4 input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Going to..."
            name="goingto"
            required
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="mb-4 input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Your Name..."
            name="name"
            required
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4 input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Your Email Address..."
            name="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4 input-group">
          <input
            type="number"
            className="form-control"
            placeholder="Your Phone Number..."
            name="phone"
            required
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="row">
          <div className="passenger-needed my-4 col-7">
            <span className="me-3">Passenger Needed:</span>
            <AiOutlinePlusCircle className="icon me-3" onClick={plus} />
            <span className="me-3">{passenger}</span>
            <AiOutlineMinusCircle className="me-3 icon" onClick={minus} />
          </div>
          <div className="date col-5 mt-2">
            <input
              type="date"
              name="date"
              required
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary primaryBtn">
          Publish Ride
        </button>
      </form>
    </div>
  );
};

export default PulishRideFormCard;
