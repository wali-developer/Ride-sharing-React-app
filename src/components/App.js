import React from 'react';
import Header from './Header/Header';
import Navbar from './Header/Navbar';
import PublishRide from './publish_Ride/PublishRide';
import RideServices from './Ride_service/RideServices';
import PopularRides from './popular_Rides/PopularRides';
import Footer from './footer/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <RideServices />
      <PublishRide />
      <PopularRides />
      <Footer />
    </>
  );
}

export default App;
