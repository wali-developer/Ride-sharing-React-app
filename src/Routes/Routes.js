import React from 'react';
import App from '../components/App.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from '../components/Login/Login';
import Register from '../components/Register/Register';
import PublishRideForm from '../components/publish_Ride/PublishRideForm';
import SearchPage from '../Pages/SearchPage.js';
import AboutUs from '../Pages/AboutUs.js';
import SearchRide from '../Pages/SearchRide.js';
import ContactUs from '../Pages/ContactUs.js';
import Error404 from '../Pages/Error404.js';

function Routes() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/home" component={App} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/publishride" component={PublishRideForm} />
          <Route path="/search" component={SearchRide} />
          <Route path="/availablerides" component={SearchPage} />
          <Route path="/about" component={AboutUs} />
          <Route path="/contact" component={ContactUs} />
          <Route component={Error404} />
        </Switch>
      </Router>
    </>
  );
}

export default Routes;
