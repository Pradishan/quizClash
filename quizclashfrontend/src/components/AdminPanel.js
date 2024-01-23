import React from "react";
import logo from "../assets/logo.png";
import propic from "../assets/pro pic.jpg";
import '../styles/admin-panel.css';

export default function AdminPanel() {
  return (
    <div className="container mt-5">
      <h2>Admin Panel</h2>
      <div className="row mt-5">
        <div className="col-md-4">
          <div className="card">
            <div className="img01">
              <img src={logo} alt="img01" />
            </div>
            <div className="img02">
              <img src={propic} alt="profile" />
            </div>
            <div className="main">
              <h2>Nimesha</h2>
              <h3>Admin</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card">
            <div className="img01">
              <img src={logo} alt="img01" />
            </div>
            <div className="img02">
              <img src={propic} alt="profile" />
            </div>
            <div className="main">
              <h2>Nimesha</h2>
              <h3>Admin</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card">
            <div className="img01">
              <img src={logo} alt="img01" />
            </div>
            <div className="img02">
              <img src={propic} alt="profile" />
            </div>
            <div className="main">
              <h2>Nimesha</h2>
              <h3>Admin</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
