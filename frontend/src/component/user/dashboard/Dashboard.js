import React from "react";
import Card from "../card/Card";
import {Link} from 'react-router-dom'
import '../dashboard/Dashboard.css'

function Dashboard() {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-light "
        style={{ backgroundColor: "brown" }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Home / Activity
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
         
        </div>
      </nav>

      <Card />
    </div>
  );
}

export default Dashboard;
