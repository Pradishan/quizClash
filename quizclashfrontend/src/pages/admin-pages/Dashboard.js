import React from "react";
import TopNavbar from "../../components/TopNavbar";
import Bargraph from "../../components/Bargraph";
import AdminPanel from "../../components/AdminPanel";

export default function Dashboard() {
  return (
    <div className="px-3">
      <TopNavbar />

      <div className="container-fluid">
        <div className="col-sm-6 p-0 flex justify-content-lg-start justify-content-center">
          <h2 className="ml-lg-2">Dashboard</h2>
        </div>
        <div className="row g-3 my-2">
          <div className="col-md-4 p-1">
            <div className="p-3 bg-success shadow-sm d-flex justify-content-around align-items-center rounded">
              <i className="bi bi-book p-3 fs-1"></i>
              <div>
                <p className="fs-5"> Total Quizzes </p>
                <h3 className="fs-2">198</h3>
              </div>
            </div>
          </div>
          <div className="col-md-4 p-1">
            <div className="p-3 bg-info shadow-sm d-flex justify-content-around align-items-center rounded">
              <i className="bi bi-person p-3 fs-1"></i>
              <div>
                <p className="fs-5"> Users </p>
                <h3 className="fs-2">248</h3>
              </div>
            </div>
          </div>
          <div className="col-md-4 p-1">
            <div className="p-3 bg-secondary shadow-sm d-flex justify-content-around align-items-center rounded">
              <i className="bi bi-people p-3 fs-1"></i>
              <div>
                <p className="fs-5"> Total Questions </p>
                <h3 className="fs-2">6088</h3>
              </div>
            </div>
          </div>
        </div>
        {/*Bargraph */}
        <div className="row">
          <div className="col-lg-8 col-md-6 col-sm-12">
            <div>
              <Bargraph />
            </div>
          </div>
        </div>
        {/*Admin Panel*/}
        <div className="row">
          <div className="col-lg-8 col-md-6 col-sm-12">
            <AdminPanel />
          </div>
        </div>
      </div>
    </div>
  );
}
