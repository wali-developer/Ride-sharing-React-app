import React from 'react';
import Footer from '../footer/Footer';
import Navbar from '../Header/Navbar';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { BsSearch, BsArrowDown } from 'react-icons/bs';
import { GrLocation } from 'react-icons/gr';
import { FaUserCircle } from 'react-icons/fa';
import './search.css';

const Search = () => {
  return (
    <section className="search">
      <div className="container">
        <div className="searchContent">
          <div className="searchedCities d-flex flex-row justify-content-start align-items-center">
            <div>
              <BsSearch className="searchIcon" />
            </div>
            <div>
              <h5>
                Peshwar, KPK <AiOutlineArrowRight className="arrow" /> Islamabad
              </h5>
              <span>Today, 1 passenger</span>
            </div>
          </div>
          <div className="availableRides">
            <h4>Today</h4>
            <p>
              Peshawar <AiOutlineArrowRight className="arrow" /> Islamabad
            </p>
            <span>2 rides available</span>
          </div>
          <div className="searchCard">
            <div className="searchCard-content row">
              <div className="searchCard-content-col col-sm-2 col-md-2">
                <h5>18:00</h5>
                <p>2hr40</p>
                <h5>20:40</h5>
              </div>
              <div className="searchCard-content-col col-sm-8 col-md-8">
                <h5>
                  <GrLocation />
                  Saddar
                </h5>
                <BsArrowDown className="my-2" />
                <h5>
                  <GrLocation />
                  Islamabad International Airport
                </h5>
              </div>
              <p className="price col-sm-2 col-md-2">800 pkr</p>
            </div>
            <div className="cardUser">
              <FaUserCircle className="userIcon" />
              <span>Amir</span>
            </div>
          </div>
          <div className="searchCard">
            <div className="searchCard-content row">
              <div className="searchCard-content-col col-md-2">
                <h5>18:40</h5>
                <p>2hr20</p>
                <h5>21:00</h5>
              </div>
              <div className="searchCard-content-col col-md-8">
                <h5>
                  <GrLocation />
                  Chargano chock
                </h5>
                <BsArrowDown className="my-2" />
                <h5>
                  <GrLocation />
                  Blue City
                </h5>
              </div>
              <p className="price col-md-2">700 pkr</p>
            </div>
            <div className="cardUser">
              <FaUserCircle className="userIcon" />
              <span>Sohail</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Search;
