import React from "react";
import logo from "../assets/logo.png";
import propic from "../assets/pro pic.jpg";
import "../styles/admin-panel.css";

export default function AdminPanel() {
  return (
    <div className="card-wrapper">
    <div className="container mt-5">
      <h2>Admin Panel</h2>
      <div className="row mt-5">
        <div className="col-md-6">
          <div className="card">
            <div className="img01">
              <img src={logo} alt="img01" />
            </div>
            <div className="img02">
              <img src={propic} alt="profile" />
            </div>
            <div className="main">
              <h2>Nimesha</h2>
              <h5>Admin</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
              </p>
              <p className="socials">
                <i className="fa fa-facebook"></i>
                <i className="fa fa-twitter"></i>
                <i className="fa fa-linkedin"></i>
                <i className="fa fa-youtube"></i>
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card">
            <div className="img01">
              <img src={logo} alt="img01" />
            </div>
            <div className="img02">
              <img src={propic} alt="profile" />
            </div>
            <div className="main">
              <h2>Nimesha</h2>
              <h5>Admin</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card">
            <div className="img01">
              <img src={logo} alt="img01" />
            </div>
            <div className="img02">
              <img src={propic} alt="profile" />
            </div>
            <div className="main">
              <h2>Nimesha</h2>
              <h5>Admin</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card">
            <div className="img01">
              <img src={logo} alt="img01" />
            </div>
            <div className="img02">
              <img src={propic} alt="profile" />
            </div>
            <div className="main">
              <h2>Nimesha</h2>
              <h5>Admin</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card">
            <div className="img01">
              <img src={logo} alt="img01" />
            </div>
            <div className="img02">
              <img src={propic} alt="profile" />
            </div>
            <div className="main">
              <h2>Nimesha</h2>
              <h5>Admin</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>

  );
}
