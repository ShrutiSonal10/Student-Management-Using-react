import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";


function Header() {
  const [activeTab, setActiveTab] = useState("Home");
  const location= useLocation();
  useEffect(()=>{
 if(location.pathname==="/HomeMain"){
  setActiveTab("Home");
 }
 else if(location.pathname==="/addEdit"){
  setActiveTab("AddEdit");
 }
  },[location]);

  return (
    <div className="header">
      <p className="logo">Master Database</p>
      <div className="header-right">
        <Link to="/HomeMain">
          <p
            className={`${activeTab === "Home" ? "active" : ""}`}
            onClick={() => setActiveTab("Home")}
          >
            Home
          </p>
        </Link>
        <Link to="/addEdit">
          <p
            className={`${activeTab === "AddEdit" ? "active" : ""}`}
            onClick={() => setActiveTab("AddEdit")}
          >
            AddEdit
          </p>
        </Link>
        <Link to="/LogOut">
          <p
            className={`${activeTab === "LogOut" ? "active" : ""}`}
            onClick={() => setActiveTab("LogOut")}
          >
            LogOut
          </p>
        </Link>
      </div>
    </div>
  );
}

export default Header;
