import React from "react";
import "./Sidebar.css";
import Logo from "../../assets/Logo.png";
import Leftcircle from '../../assets/Leftcircle.png'
import { side_bar , side_bar2 } from "../../assets/assets";

const Sidebar = () => {
  return (
    <div className="sidebar-main-conatier">
      <div className="sidebar-container">
        <img src = {Leftcircle} alt = 'side-btn' className="side-btn"/>
     
        <div className="logo-container">
          <img src={Logo} alt="logo" />
          <h1>Catalix</h1>
        </div>

        <div className="nav-items-conatiner">
          {side_bar.map((item, index) => {
            return (
              <div className="nav-items">
                <img src={item.nav_img} alt="home-img" key = {index} />
                <h3>{item.nav_name}</h3>
              </div>
            );
          })}

          <hr className="hr"/>

          {side_bar2.map((item, index) => {
            return (
              <div className="nav-items nav-items2">
                <img src={item.nav_img} alt="home-img" key = {index} />
                <h3>{item.nav_name}</h3>
              </div>
            );
          })}

        </div>
      </div>
    </div>
  );
};

export default Sidebar;
