import React from 'react';
import SinglePopularRide from './SinglePopularRide';
import './popularRides.css';

const PopularRides = () => {
  return (
    <>
      <section className="popularRides">
        <div className="container">
          <h2>Our Popular and Latest Rides</h2>
          <div className="row popularRidesRow">
            <SinglePopularRide GoingFrom="Peshawar" GoingTo="Islamabad" />
            <SinglePopularRide GoingFrom="Lahore" GoingTo="Peshawar" />
            <SinglePopularRide GoingFrom="Karachi" GoingTo="Lahore" />
            <SinglePopularRide GoingFrom="Islamabad" GoingTo="Abbottabad" />
          </div>
          <div className="see-more">
            <a href="#">
              <button className="btn btn-primary">See More</button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default PopularRides;
