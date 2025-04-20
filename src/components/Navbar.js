import React from 'react';
import {Link} from "react-router-dom"
import './Navbar.css';

function Navbar() {
  return (
    <div className="nav">
      <nav className="navbar">
        <ul className="navbar-list">
          <li className="navbar-item dropdown">
            <Link to="/">Home Page</Link>
            <div className="dropdown-content">
              <Link to="/mission-vision">Mission & Vision</Link>
              <Link to="/goals">Placement Goals</Link>
              <Link to="/recruiters">Our Recruiters</Link>
            </div>
          </li>
          <li className="navbar-item dropdown">
            <Link to="/">Associations</Link>
            <div className="dropdown-content">
              {/* <Link to="/accreditations">Govt. Accreditations</Link> */}
              <Link to="/professional-memberships">Professional Memberships</Link>
              <Link to="/mous">Industry MoUs</Link>
              <Link to="/coe">Center of Excellence</Link>
            
            </div>
          </li>
          {/* <li className="navbar-item dropdown">
            <div className="dropdown-content">
              <Link to="/bosch">Bosch</Link>
              <Link to="/mitsubishi">Mitsubishi</Link>
              <Link to="/virtusa">Virtusa FEE</Link>
              <Link to="/globallogic">Global Logic UAP</Link>
            </div>
          </li> */}
          <li className="navbar-item"><Link to="/skilling">Skilling Initiatives</Link></li>
          <li className="navbar-item dropdown">
            <Link to="/">Internships</Link>
            <div className="dropdown-content">
              <Link to="/internship-calendar">Internship Calendar</Link>
              <Link to="/internship-stats">Internship Statistics</Link>
              <Link to="/internship-coordinators">Internship Coordinator</Link>
            </div>
          </li>
          <li className="navbar-item dropdown">
            <Link to="/">Placements</Link>
            <div className="dropdown-content">
              <Link to="/workshop-calendar">Workshop Calendar</Link>
              <Link to="/placement-calendar">Placement Calendar</Link>
              <Link to="/placement-stats">Placement Statistics</Link>
            </div>
          </li>
          <li className="navbar-item dropdown">
            <Link to="/">Contact Us</Link>
            <div className="dropdown-content">
              <Link to="/cdc-team">CDC Team</Link>
              <Link to="/cdc-coordinators">CDC Coordinators</Link>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
