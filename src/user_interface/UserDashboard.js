import React, { useEffect, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import RideRequestCard from "./RideRequestCard";
import AOS from "aos";
import API from "../API";

const UserDashboard = () => {
  const [userPublishride, setUserPublishRide] = useState([]);
  const [requestedRides, setRequestedRides] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));
  const userEmail = user.email;

  useEffect(() => {
    API.get("user/user-dashboard", {
      headers: {
        token: localStorage.getItem("authToken"),
      },
    });
    const getUserPublishRide = async () => {
      const { data } = await API.get("publishride");
      const userPublishRides = data.filter((ride) => {
        return ride.email === userEmail;
      });
      setUserPublishRide(userPublishRides);
    };

    const getRequestRides = async () => {
      const { data } = await API.get("requestride");
      setRequestedRides(data);
    };
    getUserPublishRide();
    getRequestRides();

  }, [userEmail]);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="col-md-9 userProfile-main">
      <div className="container">
        <h2 className="text-center mb-5">Your Rides</h2>
        {/* {console.log(userPublishride)} */}
        <div className="row mb-5">
          {userPublishride.map((ride, index) => {
            const { goingfrom, goingto, date } = ride;
            return (
              <div
                className="card border-success mb-3 me-3 col-5"
                style={{ maxWidth: "18rem" }}
                key={index}
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <div className="card-header bg-transparent border-success">
                  {goingfrom} <BsArrowRight /> {goingto}
                </div>
                <div className="card-body text-success">
                  <p className="card-text">
                    You went {goingto} from {goingfrom} on {date}
                  </p>
                </div>
                <div className="card-footer bg-transparent border-success">
                  Date: {date}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {requestedRides.map((ride, index) => {
        const {
          _id,
          rideId,
          goingfrom,
          goingto,
          rideStatus,
          requestStatus,
          date,
          passenger,
          publisherId,
          bookerEmail,
        } = ride;
        return user._id === publisherId ? (
          <RideRequestCard
            key={index}
            id={_id}
            rideId={rideId}
            goingfrom={goingfrom}
            goingto={goingto}
            rideStatus={rideStatus}
            requestStatus={requestStatus}
            date={date}
            passenger={passenger}
            bookerEmail={bookerEmail}
          />
        ) : null;
      })}
    </div>
  );
};

export default UserDashboard;
