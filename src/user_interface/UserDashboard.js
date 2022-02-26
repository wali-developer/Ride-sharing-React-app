import React, { useEffect, useState } from "react";
import axios from "axios";
import { BsArrowRight } from "react-icons/bs";

const UserDashboard = () => {
  const [userPublishride, setUserPublishRide] = useState([]);
  // const [user, setUser] = useState();
  const user = JSON.parse(localStorage.getItem("user"));
  const userEmail = user.email;

  const getUserPublishRide = async () => {
    const { data } = await axios.get("http://localhost:3001/publishride");
    const userPublishRides = data.filter((ride) => {
      return ride.email === userEmail;
    });
    setUserPublishRide(userPublishRides);
  };
  useEffect(() => {
    axios.get("http://localhost:3001/user/user-dashboard", {
      headers: {
        token: localStorage.getItem("authToken"),
      },
    });
    // setUser(JSON.parse(localStorage.getItem("user")));
    getUserPublishRide();
  }, []);
  return (
    <div className="col-md-9 userProfile-main">
      <div className="container">
        <h2>Your Rides</h2>
        {/* {console.log(userPublishride)} */}
        <div className="row">
          {userPublishride.map((ride, index) => {
            const { goingfrom, goingto, date } = ride;
            return (
              <div
                className="card border-success mb-3 me-3 col-6"
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
    </div>
  );
};

export default UserDashboard;
