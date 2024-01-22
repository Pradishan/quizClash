import React from 'react';
import { BiSearch, BiCog, BiLogOut } from 'react-icons/bi';
import avatar from '../assets/pro pic.jpg';

const TopNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">Dashboard</a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item">
              <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-primary" type="submit">
                  <BiSearch />
                </button>
              </form>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                <img src={avatar} alt="Profile" className="rounded-circle" width="30" height="30" />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                <BiCog />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                <BiLogOut />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default TopNavbar;
