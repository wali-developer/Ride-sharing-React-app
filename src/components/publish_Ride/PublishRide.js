import React, { useState } from "react";
import "./PublishRide.css";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

const PublishRide = () => {
  const history = useHistory();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  const handleClick = () => {
    if (!user) {
      toast.info("Please Login to Publish a Ride", { position: "top-center" });
      history.push("/login");
    } else {
      history.push("/publishride");
    }
  };
  return (
    <section className="publish-ride">
      <div className="container" style={{ padding: 0 }}>
        <div className="row publish-rideRow d-flex justify-content-center align-items-center">
          <div className="col-12 col-md-6 publish-rideRow-col1">
            <h2>Want to drive ?</h2>
            <p>Let's make your journey more momoriable and comfortable.</p>
            {/* <Link to="/publishride"> */}
            <button className="btn btn-outline-success" onClick={handleClick}>
              Publish Your Ride
            </button>
            {/* </Link> */}
          </div>
          <div className="col-12 col-md-6">
            <img
              src="images/publishRide.svg"
              alt="Publish Ride"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PublishRide;
