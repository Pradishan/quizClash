import React from "react";
import TopNavbar from "../../components/TopNavbar";
import Bargraph from "../../components/Bargraph";

export default function Dashboard() {
  return (
    <div className="px-3">
      <TopNavbar />

      <div className="container-fluid">
        <div className="row g-3 my-2">
          <div className="col-md-4 p-1">
            <div className="p-3 bg-success shadow-sm d-flex justify-content-around align-items-center rounded">
              <i className="bi bi-book p-3 fs-1"></i>
              <div>
                <p className="fs-5"> Quiz Attempts </p>
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
                <p className="fs-5"> Total Participants </p>
                <h3 className="fs-2">6088</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-8 col-md-6 col-sm-12">
            <h5 className="mt-3 mb-3 text-secondary">Quiz Details</h5>
            <div className="table-responsive">
              <table className="table table-striped">
                <thead className="thead-light">
                  <tr>
                    <th>User</th>
                    <th>Quiz Id </th>
                    <th>No of Attempts</th>
                    <th>Total Quizzes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Nimesha Maduwanthi</td>
                    <td>Q01</td>
                    <td>2</td>
                    <td>2</td>
                  </tr>
                  <tr>
                    <td>Pradishan</td>
                    <td>Q02</td>
                    <td>2</td>
                    <td>2</td>
                  </tr>
                  <tr>
                    <td>Dilshan</td>
                    <td>Q03</td>
                    <td>5</td>
                    <td>5</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div>
                <Bargraph/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
