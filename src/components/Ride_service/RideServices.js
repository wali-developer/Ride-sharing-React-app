import React, { useState } from "react";
import "./rideServices.css";
import { FaAddressCard } from "react-icons/fa";
import servicesApi from "./serviceApi";

const RideServices = () => {
  const [services, setServices] = useState(servicesApi);
  return (
    <section className="RideServiceContainer">
      <div className="ride-services container">
        <div className="row RideServicesRow">
          {services.map((service, index) => {
            const { icon, heading, text } = service;
            return (
              <div className="col-12 col-md-4 RideServicesRowCol" key={index}>
                <FaAddressCard className="serviceIcon" />
                <h5>{heading}</h5>
                <p>{text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RideServices;
