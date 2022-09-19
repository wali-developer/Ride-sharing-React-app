import axios from "axios";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import API from "../API";

const RideRequestCard = ({
  id,
  index,
  goingfrom,
  goingto,
  rideStatus,
  requestStatus,
  date,
  passenger,
  bookerEmail,
  rideId,
}) => {
  const [rejectionMessage, setRejectionMessage] = useState("");

  // handle approve ride request
  const handleApprove = async () => {
    try {
      await API.patch(`publishride/${rideId}`, {
        passenger: passenger - passenger,
      });
      const { data } = await API.patch(
        `requestride/${id}`,
        {
          requestStatus: "Accepted",
        }
      );
      if (data) {
        toast.success("You have accepted the ride request");
      } else {
        toast(data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  // handle disapprove ride request
  const handleDisapprove = async () => {
    try {
      const { data } = await API.patch(
        `requestride/${id}`,
        {
          requestStatus: "Rejected",
          rejectionReason: rejectionMessage,
        }
      );
      if (data) {
        alert("You have rejected the ride request");
      } else {
        alert(data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    console.log(rideId);
  }, []);

  return (
    <>
      {requestStatus === "Pending" ? (
        <div className="card text-center my-5" key={index}>
          <div className="card-header" style={{ textAlign: "left" }}>
            Booking Ride Request from {goingfrom} to {goingto}
          </div>
          <div className="card-body">
            <h5 className="card-title">
              {goingfrom} <BsArrowRight /> {goingto}
            </h5>
            <p className="card-text">
              User with email <b> {bookerEmail} </b> has requested to book your{" "}
              <b>{rideStatus}</b> ride with <b>{passenger}</b> passenger
              {passenger > 1 ? "s" : ""} on {date}, you can either Approve or
              Disapprove
            </p>
            <div className="d-flex justify-content-between">
              <button className="btn primaryBtn" onClick={handleApprove}>
                Approve
              </button>
              <button
                type="button"
                href="/"
                className="btn primaryBtn"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Disapprove
              </button>
            </div>
            {/* Rejection modal */}
            <div
              className="modal fade"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">
                      Rejection Reason
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <textarea
                      class="form-control"
                      rows="3"
                      placeholder="Tell the Request sender why you are rejected his ride request "
                      onChange={(e) => setRejectionMessage(e.target.value)}
                      value={rejectionMessage}
                    ></textarea>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button
                      type="button"
                      className="btn primaryBtn"
                      onClick={handleDisapprove}
                    >
                      Dissapprove Request
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer text-muted">{date}</div>
        </div>
      ) : null}
    </>
  );
};

export default RideRequestCard;
