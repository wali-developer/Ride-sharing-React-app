import React from 'react';
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';

const PassengerDetails = ({ plus, minus, passengerNeeded }) => {
  return (
    <div className={'dropdownContent d-flex flex-row justify-content-between'}>
      <h5 className="">Passenger</h5>
      <div className="count">
        <AiOutlinePlusCircle className="icon me-3" onClick={plus} />
        <span className="me-3">{passengerNeeded}</span>
        <AiOutlineMinusCircle className="me-3 icon" onClick={minus} />
      </div>
    </div>
  );
};

export default PassengerDetails;
