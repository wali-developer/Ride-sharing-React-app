import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

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
        <ul
          className="nav flex-column"
          // data-aos="zoom-in"
          // data-aos-duration="1200"
        >
          <li className="nav-item">
            <Link className="nav-link" to={link1url}>
              {link1}
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={link2url}>
              {link2}
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={link3url}>
              {link3}
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={link4url}>
              {link4}
            </Link>
          </li>
        </ul>
      </div>
    );
  });
};

export default FooterLinks;
