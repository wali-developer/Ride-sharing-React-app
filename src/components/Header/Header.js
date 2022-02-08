import React from 'react';
import { FaUsers } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <section>
      <div className="header">
        <div className="row mainRow d-flex flex-row flex-wrap justify-content-center align-items-center">
          <div className="col-12 col-md-6 mainRowCol1">
            <h2>Search for a Ride</h2>
            <form>
              <div class="mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Going from..."
                />
              </div>
              <div class="mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Going to..."
                />
              </div>
              <div className=" mainInnerRow">
                <div className="date">
                  <input type="date" />
                </div>
                <div className="user">
                  <FaUsers className="userIcon" />
                  <span>1</span>
                </div>
                <div className="searchBtn">
                  <Link to="/search">
                    <button
                      className="btn btn-outline-success search"
                      type="submit"
                    >
                      Search
                    </button>
                  </Link>
                </div>
              </div>
              {/* <button type="submit" class="btn btn-primary">Submit</button> */}
            </form>
          </div>
          <div className="col-12 col-md-6 mainRowCol2">
            <img src="images/main.svg" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
