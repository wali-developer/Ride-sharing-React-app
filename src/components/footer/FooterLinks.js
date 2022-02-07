import React from 'react';
import './Footer.css';

const FooterLinks = ({ FooterCol }) => {
  return FooterCol.map((item, index) => {
    const { link1, link2, link3, link4 } = item;
    return (
      <div className="col-12 col-sm-6 col-md-4 FooterRowCol" key={index}>
        <ul className="nav flex-column">
          <li className="nav-item">
            <a className="nav-link" href="#">
              {link1}
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              {link2}
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              {link3}
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              {link4}
            </a>
          </li>
        </ul>
      </div>
    );
  });
};

export default FooterLinks;
