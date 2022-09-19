import React, { useState, useEffect } from "react";
import Footer from "../footer/Footer";
import Navbar from "../Header/Navbar";
import "./search.css";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import API from '../../API';

const BookingRide = () => {
  const history = useHistory();

  const [emailSender, setEmailSender] = useState(
    JSON.parse(localStorage.getItem("user"))
  );
  const [ridePublisher, setRidePublisher] = useState(history.location.state);

  const [form, setForm] = useState({
    from: emailSender.email,
    to: ridePublisher.email,
    subject: "Booking a Ride",
    message: `Hi ${ridePublisher.name}, I would like to book a ride that you have published from ${ridePublisher.goingfrom} to ${ridePublisher.goingto} on ${ridePublisher.date}.`,
  });

  const HandleSendEmail = async (e) => {
    e.preventDefault();
    try {
      const { data } = await API.post(
        "user/send-mail",
        {
          //   subject: form.subject,
          text: form.message,
          sender: form.from,
          receiver: form.to,
        }
      );
      toast.success(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Navbar />
      <section>
        <div className="container">
          <div className="contact">
            <div className=" contactCol1">
              <h1>Connect with Ride Publisher</h1>
              <p>
                Send a message to Ride publisher to let him know you are booking
                his ride.
              </p>
            </div>
            <div className=" contactCol2">
              {/* Form */}
              <form onSubmit={(e) => HandleSendEmail(e)}>
                <div className="row inputs">
                  <div className="col-12 col-lg-6 mb-3">
                    <label for="publisher email" className="form-label">
                      From
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      onChange={(e) =>
                        setForm({ ...form, from: e.target.value })
                      }
                      value={form.from}
                    />
                  </div>
                  <div className="col-12 col-lg-6 mb-4">
                    <label for="sender email" className="form-label">
                      To
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      onChange={(e) => setForm({ ...form, to: e.target.value })}
                      value={form.to}
                    />
                  </div>
                  <div className="col-12 col-lg-12 mb-4">
                    <label for="Subject" className="form-label">
                      Subject
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      onChange={(e) =>
                        setForm({ ...form, subject: e.target.value })
                      }
                      value={form.subject}
                    />
                  </div>
                  <div className="col-12 col-lg-12 mb-4">
                    <label for="Message" class="form-label">
                      Message
                    </label>
                    <textarea
                      className="form-control"
                      rows="3"
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                      value={form.message}
                    ></textarea>
                  </div>
                  <button type="submit" class="btn btn-primary formBtn">
                    Send
                  </button>
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
