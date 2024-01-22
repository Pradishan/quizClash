import React from "react";

export default function ProfileEditModal() {
  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#editModal"
        style={{ width: "15%" }}
      >
        Edit Profile
      </button>

      <div>
        {" "}
        {/*start edit modal*/}
        <div
          className="modal"
          id="editModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="editModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="editModalLabel">
                  Edit Details
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="form-group">
                  <label for="editName">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="editName"
                    placeholder="Enter your name"
                  />
                </div>
                <br></br>
                <div className="form-group">
                  <label for="editEmail">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="editEmail"
                    placeholder="Enter your email"
                  />
                </div>
                <br></br>
                <div className="form-group">
                  <label for="editEmail">Address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="editEmail"
                    placeholder="Enter your address"
                  />
                </div>
                <br></br>
                <div className="form-group">
                  <label for="editEmail">Phone No.</label>
                  <input
                    type="email"
                    className="form-control"
                    id="editEmail"
                    placeholder="Enter your phone number"
                  />
                </div>
                <br></br>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>

                <button type="button" className="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
        {/*end edit modal*/}
      </div>
    </>
  );
}
