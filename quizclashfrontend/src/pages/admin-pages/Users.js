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
                      <h2 className="ml-lg-2"> Users </h2>
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
                        <th>Email</th>
                        <th>Phone No</th>
                        <th>Score</th>
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
                        <td>001</td>
                        <td>Nimesha Maduwanthi</td>
                        <td>maduwanthi20@gmail.com</td>
                        <td>0716835447</td>
                        <td>80</td>
                        <td>
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
                        </td>
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
                        <td>002</td>
                        <td>Pradishan</td>
                        <td>maduwanthi20@gmail.com</td>
                        <td>0716835447</td>
                        <td>70</td>
                        <td>
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
                        </td>
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
                        <td>003</td>
                        <td>Dilshan</td>
                        <td>maduwanthi20@gmail.com</td>
                        <td>0716835447</td>
                        <td>60</td>
                        <td>
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
                        </td>
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
                        <td>004</td>
                        <td>Nimesha Maduwanthi</td>
                        <td>maduwanthi20@gmail.com</td>
                        <td>0716835447</td>
                        <td>80</td>
                        <td>
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
                        </td>
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
                        <td>005</td>
                        <td>Nimesha Maduwanthi</td>
                        <td>maduwanthi20@gmail.com</td>
                        <td>0716835447</td>
                        <td>90</td>
                        <td>
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
                        </td>
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
