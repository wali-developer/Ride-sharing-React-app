import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./rideServices.css";
import servicesApi from "./serviceApi";

const RideServices = () => {
  const [services, setServices] = useState(servicesApi);
  return (
    <section className="RideServiceContainer">
      <div className="ride-services container">
        <div className="row RideServicesRow">
          {services.map((service, index) => {
            const { icon, heading, text, linkTo } = service;
            return (
              <div className="col-12 col-md-4 RideServicesRowCol" key={index}>
                <i className={`serviceIcon ${icon}`} />
                <Link to={linkTo}>
                  <h5>{heading}</h5>
                </Link>
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
