import React from "react";
// import { FaRegUser } from "react-icons/fa";
import "./Admin_panel.css";

const RideStatisticsApi = ({
  title,
  value,
  cardIconbg,
  statisticColbg,
  icon,
}) => {
  return (
    <>
      <div
        className="card mb-3 adminDashboardCard"
        style={{ width: "220px", maxWidth: "340px" }}
      >
        <div className="row g-0 d-flex dashboardCardBody">
          <div
            className="col-md-4 IconCol"
            style={{ backgroundColor: `${cardIconbg}` }}
          >
            <i className={`adminCardIcon ${icon}`} />
          </div>
          <div
            className="col-md-8 statisticCol"
            style={{ backgroundColor: `${statisticColbg}` }}
          >
            <div className="card-body">
              <h6 className="card-title">{title}</h6>
              <span className="card-text">{value}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RideStatisticsApi;
