import React, { useState, useEffect } from "react";

import "./Admin_panel.css";
import RideStatisticsApi from "./RideStatisticsApi";
import RequestRides from "./RequestRides";
import API from "../API";

const AdminDashboard = () => {
  const [ridersLength, setRidersLength] = useState(0);
  const [completedRides, setCompletedRides] = useState(0);
  const [cancelledRides, setCancelledRides] = useState(0);
  const [runningRides, setRunningRides] = useState(0);
  const [inactiveRides, setInactiveRides] = useState([]);

  useEffect(() => {
    const getStatistics = async () => {
      try {
        const { data } = await API.get("/publishride");
        setRidersLength(data.length);
        console.log(`Riders Length: ${data.length}`);

        // completed rides
        const completedRides = data.filter((ride) => {
          return ride.status === "Completed";
        });
        setCompletedRides(completedRides.length);
        console.log(`Completed Rides: ${completedRides.length}`);

        // Rinning rides
        const runningRides = data.filter((ride) => {
          return ride.status === "Active";
        });
        setRunningRides(runningRides.length);
        console.log(`Completed Rides: ${runningRides.length}`);

        // Cancelled rides
        const cancelledRides = data.filter((ride) => {
          return ride.status === "Cancelled";
        });
        setCancelledRides(cancelledRides.length);
        console.log(`Completed Rides: ${cancelledRides.length}`);

        //total riders
        // const totalRiders = data.map((ride) => {
        //   return ride.riderId;
        // }

        // function to filter inactive rides
        const filterInactiveRides = data.filter((ride) => {
          return ride.status === "Inactive";
        });
        setInactiveRides(filterInactiveRides);
      } catch (error) {
        console.log(error);
      }
    };
    getStatistics();

    // get admin dashboard route when user login
    const getAdminDashboard = async () => {
      const { data } = await API.get(
        "user/user-dashboard",
        {
          headers: {
            token: localStorage.getItem("authToken"),
          },
        }
      );
      // alert(data);
    };
    getAdminDashboard();
  }, [ridersLength]);

  // statistics api
  const StatisticsApi = [
    {
      id: "1",
      title: "Total Riders",
      value: 30,
      cardIconbg: "#2f978a",
      statisticColbg: "#5ca199",
      icon: "fas fa-user",
    },
    {
      id: "2",
      title: "Total Drivers",
      value: `${ridersLength}`,
      cardIconbg: "#C63535",
      statisticColbg: "#E74E52",
      icon: "fas fa-user-tie",
    },
    {
      id: "3",
      title: "Total Revenue",
      value: 46,
      cardIconbg: "#329C52",
      statisticColbg: "#3AAD59",
      icon: "fas fa-dollar-sign",
    },
    {
      id: "4",
      title: "Total Rides",
      value: 45,
      cardIconbg: "#2f978a",
      statisticColbg: "#5ca199",
      icon: "fas fa-car",
    },
    {
      id: "5",
      title: "Cancelled Ride",
      value: `${cancelledRides}`,
      cardIconbg: "#C63535",
      statisticColbg: "#E74E52",
      icon: "fas fa-times",
    },
    {
      id: "6",
      title: "Completed Rides",
      value: `${completedRides}`,
      cardIconbg: "#329C52",
      statisticColbg: "#3AAD59",
      icon: "fas fa-check",
    },
    {
      id: "7",
      title: "Running Rides",
      value: `${runningRides}`,
      cardIconbg: "#C5803E",
      statisticColbg: "#FBA95A",
      icon: "fas fa-car-side",
    },
  ];

  return (
    <div className="col-md-9 adminProfile-main">
      <div className="">
        <h2>Rides Statistics</h2>
        <div className="row">
          {StatisticsApi.map((statistic) => {
            const { id, title, value, statisticColbg, cardIconbg, icon } =
              statistic;
            return (
              <div className="col-md-4" key={id}>
                <RideStatisticsApi
                  title={title}
                  value={value}
                  cardIconbg={cardIconbg}
                  statisticColbg={statisticColbg}
                  icon={icon}
                />
              </div>
            );
          })}
        </div>
        {inactiveRides.map((ride) => {
          const {
            _id,
            goingfrom,
            goingto,
            name,
            passenger,
            // status,
            date,
            email,
          } = ride;
          return (
            <RequestRides
              id={_id}
              goingfrom={goingfrom}
              goingto={goingto}
              name={name}
              passenger={passenger}
              date={date}
              email={email}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AdminDashboard;
