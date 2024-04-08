import React from "react";
import "./HomePage.css";
import Union from "../../assets/Union.png";
import Bell from "../../assets/Bell.png";
import Setting2 from "../../assets/Setting2.png";
import Account from "../../assets/Account.png";
import trailing from "../../assets/trailing.png";
import Search from "../../assets/Search.png";
import Analytic from "../../components/Analytic/Analytic";
import Table from "../../components/Table/Table";

const HomePage = () => {
  return (
    <div className="home">
      <div className="home-page-container">
        <div className="home-page">
          <div className="home-page-input">
            <div className="search-container">
              <div className="search-label">Search</div>
              <img src= {Search} alt="Search" className="search-icon" />
              <input
                type="text"
                placeholder="Search items"
                className="search-input"
              />
              <button className="wrong-button">
                <img src = {trailing} alt="Wrong" className="wrong-icon" />
              </button>
            </div>
          </div>
        </div>

        <div className="home-page-items">
          <img src={Union} alt="" />
          <img src={Bell} alt="" />
          <img src={Setting2} alt="" />
          <img src={Account} alt="" className="home-page-accounts" />
        </div>
      </div>

      <div className="home-page-container2">
        <span className="home-span1">+create a dashbord</span>
        <span className="home-span2">Share this dashbord</span>
        <span className="home-span3">Select Duration</span>
        <span className="home-span4">Compare with Duration</span>
      </div>
      <Analytic />
      <Table />
    </div>
  );
};

export default HomePage;
