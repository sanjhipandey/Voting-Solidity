import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import image from "./images/image_website_blockchain_app.jpg";

const SideBar = () => {
  return (
    <div>
      <div className="sidebar">
        <div className="sidebarContent">
          <Link to="/" className="sidebarText">
            <i className="fas fa-home"></i> <span>Home</span>
          </Link>
          <Link to="/register" className="sidebarText text-center">
            <span>Register</span>
          </Link>
          <Link to="/voteNow" className="sidebarText text-center">
            <span>Vote Now</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
