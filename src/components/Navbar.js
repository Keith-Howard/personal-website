import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css';
import React from 'react';


function NavBar() {
    return (
        <Navbar className="navbar navbar-expand-lg bg-secondary">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">Keith Howard</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <NavLink className="nav-link" to="/components/RockPaperScissors">Rock Paper Scissors</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to="/components/MyArt">My Art</NavLink>
                    </li>
                    {/*<li className="nav-item">
                    <NavLink className="nav-link" to="/components/Magic8Ball">Magic 8 Ball</NavLink>
                    </li>*/}
                </ul>
                </div>
            </div>
        </Navbar>
    )
}
export default NavBar;