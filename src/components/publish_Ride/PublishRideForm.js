import React, { useState } from 'react';
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';
import Navbar from '../Header/Navbar';
import Footer from '../footer/Footer';
import '../../style/publishRideForm.css';

const PublishRideForm = () => {
  const [passengerNeeded, setPassengerNeeded] = useState(0);

  const plus = () => {
    setPassengerNeeded(passengerNeeded + 1);
  };
  const minus = () => {
    setPassengerNeeded(passengerNeeded - 1);
  };
  return (
    <>
      <Navbar />
      <section className="publish-ride-container">
        <div className="container d-flex justify-content-end">
          <div className="publish-ride-form">
            <h1 className="text-center my-5">Publish Your Ride</h1>
            <form>
              <div className="mb-4 input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Going from..."
                />
              </div>
              <div className="mb-4 input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Going to..."
                />
              </div>
              <div className="passenger-needed my-4">
                <span className="me-3">Passenger Needed:</span>
                <AiOutlinePlusCircle className="icon me-3" onClick={plus} />
                <span className="me-3">{passengerNeeded}</span>
                <AiOutlineMinusCircle className="me-3 icon" onClick={minus} />
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                className="primaryBtn"
              >
                Publish Ride
              </button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default PublishRideForm;
