import React, { useState, useEffect } from "react";
import Footer from "../footer/Footer";
import Navbar from "../Header/Navbar";
import "./search.css";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import { toast } from "react-toastify";
import API from '../../API';

const BookingRide = () => {
  const history = useHistory();
  const [rideDetails, setRideDetails] = useState(history.location.state);
  const [passenger, setPassenger] = useState(
    history.location.state.formData.passengerNeeded
  );

  useEffect(() => {
    const getPublisherDetails = async () => {
      const { data } = await API.get("user/register");
      data.filter((user) => {
        if (user.email === rideDetails.email) {
          setPublisherId(user._id);
        }
      });
    };
    getPublisherDetails();
  }, []);

  const [emailSender, setEmailSender] = useState(
    JSON.parse(localStorage.getItem("user"))
  );

  const [publisherId, setPublisherId] = useState("");

  const [formData, setFormData] = useState({
    goingfrom: rideDetails.goingfrom,
    goingto: rideDetails.goingto,
    passenger: passenger,
    rideStatus: rideDetails.status,
    rideDate: rideDetails.date,
    requestStatus: "Pending",
    bookerEmail: emailSender.email,
    // publisherId: publisherUserId,
    bookerId: emailSender._id,
    rideId: rideDetails.publishRideId,
  });

  const handleRideBooking = async (e) => {
    e.preventDefault();
    try {
      const { data } = await API.post("requestride", {
        goingfrom: formData.goingfrom,
        goingto: formData.goingto,
        passenger: formData.passenger,
        rideStatus: formData.rideStatus,
        bookingDate: formData.rideDate,
        requestStatus: formData.requestStatus,
        bookerEmail: formData.bookerEmail,
        publisherId: publisherId,
        bookerId: formData.bookerId,
        rideId: formData.rideId,
      });
      addBookerToConversation();
      toast.success(data);
      history.push("/user-dashboard/messaging");
    } catch (err) {
      console.log(err);
    }
  };

  const addBookerToConversation = async (e) => {
    await API.post("conversations", {
      senderId: emailSender._id,
      receiverId: publisherId,
    });
  };

  return (
    <>
      <Navbar />
      <section>
        <div className="container">
          <div className="contact">
            <div className=" contactCol1">
              <h1>Book your Ride</h1>
              <p>
                Send a Request to Ride publisher to let him know you are booking
              </p>
            </div>
            <div className=" contactCol2">
              {/* Form */}
              <form onSubmit={(e) => handleRideBooking(e)}>
                <div className="row inputs">
                  <div className="col-12 col-lg-6 mb-4">
                    <label htmlFor="publisher email" className="form-label">
                      Going From
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="goingfrom"
                      onChange={(e) =>
                        setFormData({ ...formData, goingfrom: e.target.value })
                      }
                      value={formData.goingfrom}
                    />
                  </div>
                  <div className="col-12 col-lg-6 mb-4">
                    <label htmlFor="sender email" className="form-label">
                      Going To
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="goingto"
                      onChange={(e) =>
                        setFormData({ ...formData, goingto: e.target.value })
                      }
                      value={formData.goingto}
                    />
                  </div>
                  <div className="col-12 col-lg-6 mb-4">
                    <label htmlFor="sender email" className="form-label">
                      passengers
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="passenger"
                      onChange={(e) => setPassenger(e.target.value)}
                      value={passenger}
                    />
                  </div>
                  <div className="col-12 col-lg-6 mb-4">
                    <label htmlFor="sender email" className="form-label">
                      Ride Status
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="rideStatus"
                      onChange={(e) =>
                        setFormData({ ...formData, rideStatus: e.target.value })
                      }
                      value={formData.rideStatus}
                    />
                  </div>
                  <div className="col-12 col-lg-12 mb-4">
                    <label htmlFor="Subject" className="form-label">
                      Ride booking Date
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="bookingDate"
                      onChange={(e) =>
                        setFormData({ ...formData, rideDate: e.target.value })
                      }
                      value={formData.rideDate}
                    />
                  </div>
                  <div className="col-12 col-lg-12 mb-4">
                    <label htmlFor="Subject" className="form-label">
                      Your email (Your email must be an email that you used for
                      registration)
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      name="bookerEmail"
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          bookerEmail: e.target.value,
                        })
                      }
                      value={formData.bookerEmail}
                    />
                  </div>
                  <div className="col-12 col-lg-4 mb-4">
                    <label htmlFor="publisher id" className="form-label">
                      Ride publisher ID
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="publisherId"
                      onChange={(e) => console.log("Cannot change this field")}
                      value={publisherId}
                      disabled
                    />
                  </div>
                  <div className="col-12 col-lg-4 mb-4">
                    <label htmlFor="publisher id" className="form-label">
                      Ride Booker ID
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="bookerId"
                      onChange={(e) => console.log("Cannot change this field")}
                      value={formData.bookerId}
                      disabled
                    />
                  </div>
                  <div className="col-12 col-lg-4 mb-4">
                    <label htmlFor="publisher id" className="form-label">
                      Ride ID
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="rideId"
                      onChange={(e) => console.log("Can't change id")}
                      value={formData.rideId}
                      disabled
                    />
                  </div>

                  <div className="d-flex justify-content-between">
                    <button
                      type="submit"
                      className="btn btn-primary primaryBtn"
                    >
                      Book Ride
                    </button>
                    <button
                      type="submit"
                      className="btn btn-primary primaryBtn"
                    >
                      Click to Send Mail to publisher
                    </button>
                  </div>
                  <Link to="/" className="mt-4">
                    <p>
                      <BsArrowLeft /> Go back to Home page
                    </p>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default BookingRide;
