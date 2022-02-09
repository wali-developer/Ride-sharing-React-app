import React from 'react';
import './Footer.css';

const FooterLinks = ({ FooterCol }) => {
  return FooterCol.map((item, index) => {
    const {
      link1,
      link2,
      link3,
      link4,
      link1url,
      link2url,
      link3url,
      link4url,
    } = item;
    return (
      <div className="col-12 col-sm-6 col-md-4 FooterRowCol" key={index}>
        <ul className="nav flex-column">
          <li className="nav-item">
            <a className="nav-link" href={link1url}>
              {link1}
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href={link2url}>
              {link2}
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href={link3url}>
              {link3}
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href={link4url}>
              {link4}
            </a>
          </li>
        </ul>
      </div>
    );
  });
};

export default FooterLinks;
