import React, { useState } from "react";
import "../../style/publishRideForm.css";
import axios from "axios";
import PublishRideFormCard from "./PulishRideFormCard";

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
      <section className="publish-ride-container">
        <div className="container d-flex justify-content-end">
          <div className="publish-ride-form">
            <PublishRideFormCard
              handleChange={handleChange}
              publishRideHandle={publishRideHandle}
              plus={plus}
              minus={minus}
              passenger={passenger}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default PublishRideForm;
