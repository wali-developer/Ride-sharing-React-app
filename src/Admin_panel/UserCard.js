import React from "react";

const UserCard = ({ fullName, email, userType, date }) => {
  return (
    <div className="card mb-4">
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"
            className="img-fluid rounded-start"
            alt="user"
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{fullName}</h5>
            <p className="card-text">{email}</p>
            <p className="card-text">
              {`User is a ${userType} in TrustiCar since ${date}`}
            </p>

            <p className="card-text">
              <small className="text-muted">Last travelled 4 days ago</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
