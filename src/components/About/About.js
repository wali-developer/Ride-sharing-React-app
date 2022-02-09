import React from 'react';
import './about.css';

const About = () => {
  return (
    <section className="aboutUs">
      <div className="cover"></div>
      <div className="container">
        <h1 className="text-center">About Us !</h1>
        <h3>
          Welcome To <strong>TrustiCar</strong>
        </h3>
        <p>
          <strong>TrustiCar</strong> is a Professional Ride sharing Platform.
          Here we will provide you the best riding service in which you can ride
          a car with passenger or you can book a seat in specific ride with
          speicific person of your choice, which you will like very much. <br />{' '}
          <br />
          We're dedicated to providing you the best of Ride sharing service,
          with a focus on dependability and safety. Ride sharing with each
          other. We're working to turn our passion for Ride sharing into a
          booming online website. We hope you enjoy our Ride sharing service as
          much as we enjoy offering them to you.
        </p>
        <h5>Our key Numbers</h5>
        <ul>
          <li>Over Thousand members</li>
          <li>10 cities in Pakistan</li>
          <li>
            Thousand of kilometers shared by community since TrustiCar creation
          </li>
        </ul>
        <p>
          We will keep posting more important posts on the Website for all of
          you about our service and new updates. Please give your support and
          love.
        </p>
        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>
          Thanks For Visiting Our Site
          <br />
          <br />
          <span className="lastLine">Have a nice day !</span>
        </p>
      </div>
    </section>
  );
};

export default About;
