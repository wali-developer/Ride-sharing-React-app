import React from 'react';
import Footer from '../components/footer/Footer';
import Navbar from '../components/Header/Navbar';
import Error from '../components/Error/Error';

const Error404 = () => {
  return (
    <div>
      <Navbar />
      <Error />
      <Footer />
    </div>
  );
};

export default Error404;
