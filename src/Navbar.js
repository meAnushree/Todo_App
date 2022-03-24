import React from "react";
import "./Navbar.css";

const Navbar = ({ selectedTab, setSelectedTab }) => {
  const getClass = (id) => (selectedTab === id ? " active" : "");
  console.log(selectedTab);

  return (
    <nav className="navbar">
      <div
        className={`navItem ${getClass(1)}`}
        onClick={() => setSelectedTab(1)}
      >
        Pending
      </div>
      <div
        className={`navItem ${getClass(2)}`}
        onClick={() => setSelectedTab(2)}
      >
        Completed
      </div>
    </nav>
  );
};

export default Navbar;
