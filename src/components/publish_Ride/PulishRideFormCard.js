import React from "react";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import "../../style/publishRideForm.css";

const PulishRideFormCard = ({
  handleChange,
  publishRideHandle,
  minus,
  plus,
  passenger,
}) => {
  return (
    <div>
      <h1 className="text-center my-5">Publish Your Ride</h1>
      <form onSubmit={(e) => publishRideHandle(e)}>
        <div className="mb-4 input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Going from..."
            name="goingfrom"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="mb-4 input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Going to..."
            name="goingto"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="passenger-needed my-4">
          <span className="me-3">Passenger Needed:</span>
          <AiOutlinePlusCircle className="icon me-3" onClick={plus} />
          <span className="me-3">{passenger}</span>
          <AiOutlineMinusCircle className="me-3 icon" onClick={minus} />
        </div>
        <button type="submit" className="btn btn-primary primaryBtn">
          Publish Ride
        </button>
      </form>
    </div>
  );
};

export default PulishRideFormCard;
