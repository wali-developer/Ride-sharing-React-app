import axios from "axios";
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import API from "../API";
import UserCard from "./UserCard";

const Drivers = () => {
  const [drivers, setDrivers] = useState([]);
  const [search, setSearch] = useState("");
  const [searhUser, setSearhUser] = useState([]);

  useEffect(() => {
    const getDrivers = async () => {
      try {
        const { data } = await API.get("user/register");
        setDrivers(data.filter((driver) => driver.userType === "Driver"));
      } catch (err) {
        console.log(err);
      }
    };
    getDrivers();
  });

  const handleSearch = (e) => {
    e.preventDefault();

    const filterDriver = drivers.filter((driver) => driver.fullName === search);
    if (filterDriver.length === 0) {
      toast.error("No driver found with provided name");
    } else {
      setSearhUser(filterDriver);
    }
    setSearhUser(filterDriver);
  };
  return (
    <div className="col-md-9 userProfile-main">
      <div className="">
        <h2 className="mb-5">Drivers</h2>
        <form onSubmit={(e) => handleSearch(e)}>
          <div className="form-group mb-3">
            <input
              type="text"
              className="form-control"
              id="Search"
              placeholder="Search for Driver..."
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            />
          </div>
          <div className=" my-2">
            <button type="submit" className="btn btn-primary">
              Search
            </button>
          </div>
        </form>
        <div className="row">
          <div className="col-md-7">
            {searhUser.map((driver) => {
              const { fullName, email, userType, date } = driver;
              return (
                <UserCard
                  fullName={fullName}
                  email={email}
                  userType={userType}
                  date={date}
                />
              );
            })}
          </div>
          <div className="col-md-5">
            {drivers.map((driver) => {
              const { fullName, email } = driver;
              return (
                <div className="card mb-4">
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img
                        src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"
                        className="img-fluid rounded-start"
                        alt="user"
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">{fullName}</h5>
                        <p className="card-text">{email}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drivers;
