import React from "react";
import { Link, useLocation } from "react-router-dom";
import { sideBarData } from "../../staticDate/sideBarItems";
import "./SideBar.css";

function SideBar() {
  const currentLocation = useLocation();
  return (
    <div className="p-2 h-100per">
      {sideBarData.map(({ location, name, icon }) => {
        return (
          <Link to={location} key={name}>
            <div
              className={`sidebar-links my-2 pl-3 font-size-large p-1 ${
                currentLocation.pathname === location ? "active-link" : ""
              }`}
              title={location.slice(1)}
            >
              {" "}
              <div style={{ display: "flex", alignItems: "center" }}>
                {" "}
                <span className="material-icons px-1">{icon}</span>
                {name}
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export { SideBar };
