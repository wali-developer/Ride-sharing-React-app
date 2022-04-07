import React, { useEffect, useState } from "react";
import axios from "axios";
import { BsArrowRight } from "react-icons/bs";
import RideRequestCard from "./RideRequestCard";

const UserDashboard = () => {
  const [userPublishride, setUserPublishRide] = useState([]);
  const [requestedRides, setRequestedRides] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));
  const userEmail = user.email;

  useEffect(() => {
    axios.get("http://localhost:3001/user/user-dashboard", {
      headers: {
        token: localStorage.getItem("authToken"),
      },
    });
    const getUserPublishRide = async () => {
      const { data } = await axios.get("http://localhost:3001/publishride");
      const userPublishRides = data.filter((ride) => {
        return ride.email === userEmail;
      });
      setUserPublishRide(userPublishRides);
    };

    const getRequestRides = async () => {
      const { data } = await axios.get("http://localhost:3001/requestride");
      setRequestedRides(data);
    };
    getUserPublishRide();
    getRequestRides();

    // console.log(history.location.state);
  }, [userEmail]);
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
