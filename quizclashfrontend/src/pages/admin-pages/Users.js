import React from "react";
import TopNavbar from "../../components/TopNavbar";

export default function Users() {
  return (
    <div className="wrapper">
      <div className="body-overlay">
        <div id="sidebar"></div>
      </div>
      <div id="content">
        <div>
          <TopNavbar />
        </div>
        <div className="main-content">
          <div className="row">
            <div className="col-md-12">
              <div className="table-wrapper">
                <div className="table-title">
                  <div className="row">
                    <div className="col-sm-6 p-0 flex justify-content-lg-start justify-content-center">
                      <h2 className="ml-lg-2">Users</h2>
                    </div>
                  </div>

                  {/*Table of User Information*/}
                  <table className="table table-stripped table-hover">
                    <thead>
                      <tr>
                        <th>
                          <span className="custom-checkbox">
                            <input type="checkbox" id="selectAll" />
                            <label for="selectAll"></label>
                          </span>
                        </th>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Role</th>
                        <th>Email</th>
                        <th>Phone No</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th>
                          <span className="custom-checkbox">
                            <input
                              type="checkbox"
                              id="checkbox1"
                              name="option[]"
                              value="1"
                            />
                            <label for="checkbox1"></label>
                          </span>
                        </th>
                        <th>001</th>
                        <th>Nimesha Maduwanthi</th>
                        <th>Student</th>
                        <th>maduwanthi20@gmail.com</th>
                        <th>0716835447 No</th>
                        <th>
                          <a href="#" className="view" data-toggle="modal">
                            <button
                              type="button"
                              className="btn btn-success btn-sm"
                            >
                              View
                            </button>
                          </a>
                          <a href="#" className="edit" data-toggle="modal">
                            <button
                              type="button"
                              className="btn btn-danger btn-sm"
                            >
                              Block
                            </button>
                          </a>
                        </th>
                      </tr>

                      <tr>
                        <th>
                          <span className="custom-checkbox">
                            <input
                              type="checkbox"
                              id="checkbox2"
                              name="option[]"
                              value="1"
                            />
                            <label for="checkbox2"></label>
                          </span>
                        </th>
                        <th>002</th>
                        <th>Pradishan</th>
                        <th>Student</th>
                        <th>maduwanthi20@gmail.com</th>
                        <th>0716835447 No</th>
                        <th>
                          <a href="#" className="view" data-toggle="modal">
                            <button
                              type="button"
                              className="btn btn-success btn-sm"
                            >
                              View
                            </button>
                          </a>
                          <a href="#" className="edit" data-toggle="modal">
                            <button
                              type="button"
                              className="btn btn-danger btn-sm"
                            >
                              Block
                            </button>
                          </a>
                        </th>
                      </tr>

                      <tr>
                        <th>
                          <span className="custom-checkbox">
                            <input
                              type="checkbox"
                              id="checkbox3"
                              name="option[]"
                              value="1"
                            />
                            <label for="checkbox3"></label>
                          </span>
                        </th>
                        <th>003</th>
                        <th>Dilshan</th>
                        <th>Student</th>
                        <th>maduwanthi20@gmail.com</th>
                        <th>0716835447 No</th>
                        <th>
                          <a href="#" className="view" data-toggle="modal">
                            <button
                              type="button"
                              className="btn btn-success btn-sm"
                            >
                              View
                            </button>
                          </a>
                          <a href="#" className="edit" data-toggle="modal">
                            <button
                              type="button"
                              className="btn btn-danger btn-sm"
                            >
                              Block
                            </button>
                          </a>
                        </th>
                      </tr>

                      <tr>
                        <th>
                          <span className="custom-checkbox">
                            <input
                              type="checkbox"
                              id="checkbox4"
                              name="option[]"
                              value="1"
                            />
                            <label for="checkbox4"></label>
                          </span>
                        </th>
                        <th>004</th>
                        <th>Nimesha Maduwanthi</th>
                        <th>Student</th>
                        <th>maduwanthi20@gmail.com</th>
                        <th>0716835447 No</th>
                        <th>
                          <a href="#" className="view" data-toggle="modal">
                            <button
                              type="button"
                              className="btn btn-success btn-sm"
                            >
                              View
                            </button>
                          </a>
                          <a href="#" className="edit" data-toggle="modal">
                            <button
                              type="button"
                              className="btn btn-danger btn-sm"
                            >
                              Block
                            </button>
                          </a>
                        </th>
                      </tr>

                      <tr>
                        <th>
                          <span className="custom-checkbox">
                            <input
                              type="checkbox"
                              id="checkbox5"
                              name="option[]"
                              value="1"
                            />
                            <label for="checkbox5"></label>
                          </span>
                        </th>
                        <th>005</th>
                        <th>Nimesha Maduwanthi</th>
                        <th>Student</th>
                        <th>maduwanthi20@gmail.com</th>
                        <th>0716835447 No</th>
                        <th>
                          <a href="#" className="view" data-toggle="modal">
                            <button
                              type="button"
                              className="btn btn-success btn-sm"
                            >
                              View
                            </button>
                          </a>
                          <a href="#" className="edit" data-toggle="modal">
                            <button
                              type="button"
                              className="btn btn-danger btn-sm"
                            >
                              Block
                            </button>
                          </a>
                        </th>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
