import React, { useState } from "react";
import "./PublishRide.css";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
// import AOS from "aos";

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
  // useEffect(() => {
  //   AOS.init();
  //   AOS.refresh();
  // }, []);
  return (
    <section className="publish-ride">
      <div className="container" style={{ padding: 0 }}>
        <div
          className="row publish-rideRow d-flex justify-content-center align-items-center"
          data-aos="fade-right"
          data-aos-duration="1200"
        >
          <div className="col-12 col-md-6 publish-rideRow-col1">
            <h2>Want to drive ?</h2>
            <p>Let's make your journey more momoriable and comfortable, <br /> Publish your own ride</p>
            <button className="btn btn-outline-success" onClick={handleClick}>
              Publish Your Ride
            </button>
          </div>
          <div
            className="col-12 col-md-6"
            data-aos="fade-left"
            data-aos-duration="1200"
          >
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
