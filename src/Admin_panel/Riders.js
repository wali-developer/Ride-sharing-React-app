import React, { useEffect, useState } from "react";
import UserCard from "./UserCard";
import { toast } from "react-toastify";
import API from "../API";

const Riders = () => {
  const [riders, setRiders] = useState([]);
  const [search, setSearch] = useState("");
  const [searhUser, setSearhUser] = useState([]);

  useEffect(() => {
    const getDrivers = async () => {
      try {
        const { data } = await API.get("user/register");
        setRiders(data);
      } catch (err) {
        console.log(err);
      }
    };
    getDrivers();
  });

  const handleSearch = (e) => {
    e.preventDefault();

    const filterUser = riders.filter((user) => user.fullName === search);
    console.log(filterUser);
    if (filterUser.length === 0) {
      toast.error("No user found");
    } else {
      setSearhUser(filterUser);
    }
  };
  return (
    <div className="col-md-9 userProfile-main">
      <div className="">
        <h2 className="mb-4">Riders</h2>
        <form onSubmit={(e) => handleSearch(e)}>
          <div className="form-group mb-3">
            <input
              type="text"
              className="form-control"
              id="Search"
              placeholder="Search for Rider / User..."
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
            {searhUser.map((user, index) => {
              const { fullName, email, userType, date } = user;
              return (
                <UserCard
                  key={index}
                  fullName={fullName}
                  email={email}
                  userType={userType}
                  date={date}
                />
              );
            })}
          </div>
          <div className="col-md-5 mx-auto">
            {riders.map((driver, index) => {
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

export default Riders;
