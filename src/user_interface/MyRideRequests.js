import React, { useState, useEffect } from "react";
import { BsArrowDown } from "react-icons/bs";
import { GrLocation } from "react-icons/gr";
import axios from "axios";
import AOS from "aos";
import API from "../API";

const MyRideRequests = () => {
  const [requestedRides, setRequestedRides] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));
  const [publisherId, setPublisherId] = useState(user.id);
  const [publisherUser, setPublisherUser] = useState([]);
  const [rejectionReason, setRejectionReason] = useState("");

  useEffect(() => {
    const getRequestRides = async () => {
      const { data } = await API.get("requestride");
      data.map((ride) => {
        setPublisherId(ride.publisherId);
        setRejectionReason(ride.rejectionReason);
      });
      setRequestedRides(data);
    };
    const getPublisher = async () => {
      const { data } = await API.get("user/register");
      const filterUser = data.filter((user) => user._id === publisherId);
      setPublisherUser(filterUser);
    };

    getRequestRides();
    getPublisher();
  }, []);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="col-md-9 userProfile-main">
      <div className="container">
        {requestedRides.map((ride, index) => {
          const {
            goingfrom,
            goingto,
            rideStatus,
            requestStatus,
            bookingDate,
            passenger,
            bookerId,
            bookerEmail,
          } = ride;
          return user.email === bookerEmail ? (
            <div
              className="searchCard"
              key={index}
              data-aos="zoom-in"
              data-aos-duration="1200"
            >
              <div className="">
                <div className="searchCard-content row">
                  <div className="searchCard-content-col col-sm-2 col-md-2">
                    <h5>18:00</h5>
                    <p>2hr40</p>
                    <h5>20:40</h5>
                  </div>
                  <div className="searchCard-content-col col-sm-8 col-md-8">
                    <h5>
                      <GrLocation />
                      {goingfrom}
                    </h5>
                    <BsArrowDown className="my-2" />
                    <h5>
                      <GrLocation />
                      {goingto}
                    </h5>
                  </div>
                  <p className="price col-sm-2 col-md-2">800 pkr</p> <br />
                </div>
                <div className="d-flex justify-content-between align-items-end">
                  <div className="cardUser">
                    {publisherUser.map((user) => {
                      const { fullName, email } = user;
                      return (
                        <p>
                          You booked a given ride with <b>{fullName}</b> email{" "}
                          <b>{email}</b> with <strong>{passenger}</strong>{" "}
                          passenger {passenger > 1 ? "s" : ""} on Date :{" "}
                          {bookingDate}
                        </p>
                      );
                    })}
                  </div>
                </div>

                {requestStatus === "Rejected" ? (
                  <div>
                    <span>Ride Publisher Rejection message : </span> <br />
                    <h6>{rejectionReason}</h6>
                  </div>
                ) : null}
                <div className="my-2 mt-3 d-flex justify-content-between">
                  <button className="btn primaryBtn" disabled>
                    {rideStatus}
                  </button>
                  <button className="btn primaryBtn" disabled>
                    {requestStatus}
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <h2>You have not booked any ride yet</h2>
          );
        })}
      </div>
    </div>
  );
};

export default MyRideRequests;
