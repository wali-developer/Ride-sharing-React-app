import React from 'react';
import './Footer.css';
import {
  FaFacebook,
  FaInvision,
  FaPinterest,
  FaTwitterSquare,
  FaYoutube,
} from 'react-icons/fa';
import FooterLinks from './FooterLinks';

const FooterCol = [
  {
    link1: 'How it works',
    link2: 'About Us',
    link3: 'Contact Us',
    link4: 'Help',
  },
  {
    link1: 'Blogs',
    link2: 'Privacy and Policy',
    link3: 'Publish Ride',
    link4: 'Book a Ride',
  },
];

const Footer = () => {
  return (
    <section className="Footer">
      <div className="container">
        <div className="row FooterRow">
          <FooterLinks FooterCol={FooterCol} />
          <div className="col-12 col-md-6 col-lg-4 FooterSocialCol">
            <h5>Connect with us</h5>
            <div className="social-links">
              <FaFacebook />
              <FaPinterest />
              <FaInvision />
              <FaTwitterSquare />
              <FaYoutube />
            </div>
          </div>
        </div>
      </div>
      <div className="footerCopyright">
        <h6>Copyright &copy; 2022 by TrustiCar</h6>
      </div>
    </section>
  );
};

export default Footer;
