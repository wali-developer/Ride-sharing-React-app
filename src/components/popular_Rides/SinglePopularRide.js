import React from "react";
import { FaAngleDoubleDown } from "react-icons/fa";

const PopularRide = ({ GoingFrom, GoingTo }) => {
  return (
    <div className="col-12 col-sm-6 col-md-6 col-lg-3  popularRidesCol">
      <div
        className="popularRidesCircle"
        data-aos="zoom-out"
        data-aos-duration="1200"
      >
        <h6>{GoingFrom}</h6>
        <FaAngleDoubleDown className="arrowIcon" />
        <h6>{GoingTo}</h6>
      </div>
    </div>
  );
};

export default PopularRide;
