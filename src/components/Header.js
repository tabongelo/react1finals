import React, {useEffect, useState} from 'react';
import {Link, useLocation} from "react-router-dom";
import "./Header.css"

const Header = () => {
  const [activeTab, setActiveTab] = useState("Home");
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
        setActiveTab("Home");
    } else if (location.pathname === "/add") {
      setActiveTab("AddContact");
    } else if (location.pathname === "/crudInfo") {
      setActiveTab("About");
    }
  }, [location]);
  return (
    <div className="header">
        <div className="header-left">
            <Link to="/">
                <p
                  className={`${activeTab === "Home" ? "active" : ""}`}
                  onClick={() => setActiveTab("Home")}
                >
                  Home
                </p>
            </Link>
            <Link to="/add">
                <p
                  className={`${activeTab === "AddContact" ? "active" : ""}`}
                  onClick={() => setActiveTab("AddContact")}
                >
                  Add Information
                </p>
            </Link>
        </div>
        <div className="header-right">
        <Link to="/crudInfo">
                <p
                  className={`${activeTab === "About" ? "active" : ""}`}
                  onClick={() => setActiveTab("About")}
                >
                  CRUD
                </p>
            </Link>
        </div>
    </div>
  );
};

export default Header;
