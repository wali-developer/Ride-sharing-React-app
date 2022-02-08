import React from 'react';
import Footer from '../components/footer/Footer';
import Navbar from '../components/Header/Navbar';
import PublishRideForm from '../components/publish_Ride/PublishRideForm';

const PublishRidePage = () => {
  return (
    <>
      <Navbar />
      <PublishRideForm />
      <Footer />
    </>
  );
};

export default PublishRidePage;
