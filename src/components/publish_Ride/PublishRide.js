import React from 'react';
import './PublishRide.css';

const PublishRide = () => {
  return (
    <section className="publish-ride">
      <div className="container" style={{ padding: 0 }}>
        <div className="row publish-rideRow d-flex justify-content-center align-items-center">
          <div className="col-12 col-md-6 publish-rideRow-col1">
            <h2>Want to drive ?</h2>
            <p>Let's make your journey more momoriable and comfortable.</p>
            <button className="btn btn-outline-success">
              Publish Your Ride
            </button>
          </div>
          <div className="col-12 col-md-6">
            <img src="images/publishRide.svg" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PublishRide;
