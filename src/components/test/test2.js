import React from "react";

const test2 = () => {
  return (
    <div>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="images/pic3.svg"
              className="d-block w-100 img-fluid"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="images/publishRide.svg"
              className="d-block w-100 img-fluid"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="images/main.svg"
              className="d-block w-100 img-fluid"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default test2;
