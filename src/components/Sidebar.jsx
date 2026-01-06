import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Sidebar = ({ setHeaderText }) => {
  const [images, setImages] = useState("/home_icon.png");

  const links = [
    {
      label: "Dashboard",
      to: "/dashboard",
      icon: "/home_icon.png",
      activeIcon: "/home_icon.png",
      header: "Overview",
    },
    {
      label: "Transactions",
      to: "/transactions",
      icon: "/icons/transfer_icon.png",
      activeIcon: "/home_icon.png",
      header: "Transactions",
    },
    {
      label: "Accounts",
      to: "/accounts",
      icon: "/icons/user_icon.png",
      activeIcon: "/icons/economic-investment_icon.png",
      header: "Accounts",
    },
    {
      label: "Investments",
      to: "/investments",
      icon: "/icons/economic-investment_icon.png",
      activeIcon: "/icons/user_icon.png",
      header: "Investments",
    },
    {
      label: "Credit Cards",
      to: "/creditcards",
      icon: "/icons/credit-card_icon.png",
      activeIcon: "/icons/transfer_icon.png",
      header: "Credit Cards",
    },
    {
      label: "Loans",
      to: "/loans",
      icon: "/icons/loan_icon.png",
      activeIcon: "/icons/credit-card_icon.png",
      header: "Loans",
    },
    {
      label: "Services",
      to: "/services",
      icon: "/icons/service_icon.png",
      activeIcon: "/icons/transfer_icon.png",
      header: "Services",
    },
    {
      label: "Setting",
      to: "/setting",
      icon: "/icons/settings_icon.png",
      activeIcon: "/icons/service_icon.png",
      header: "Setting",
    },
    {
      label: "Insights",
      to: "/insights",
      icon: "/icons/settings_icon.png",
      activeIcon: "/icons/service_icon.png",
      header: "Insights",
    },
  ];

  return (
    <div className="dashboard-sidebar">
      <div className="dashboard-name-section">
        <img src="/icons/bankdash_full_logo.png" alt="ERROR"></img>
      </div>
      <div className="dashboard-links-section">
        {links.map((link) => (
          <NavLink to={link.to} key={link.to}>
            {({ isActive }) => (
              <div> 
                <img
                  src="/icons/active_bar_icon.png"
                  alt="NF"
                  className={`active-bar ${isActive ? "active" : ""}`}
                ></img>

                <img className="dashboard-link-image" src={isActive ? link.activeIcon : link.icon}></img>

                <span
                  className={isActive ? "link active" : "link"}
                  onClick={() => {
                    setHeaderText(link.header);
                  }}
                >
                  {link.label}
                </span>
              </div>
            )}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
