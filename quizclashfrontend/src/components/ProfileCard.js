import React from "react";
import ProfileEditModal from "./ProfileEditModal";
import { getUserName } from "../util/Authentication";

export default function ProfileCard() {
  return (
    <div>
      <div className="card mb-3">
        <div className="card-body">
          <div className="row">
            <div className="col-sm-3">
              <h6 className="mb-0">Username</h6>
            </div>
            <div className="col-sm-9 text-secondary">
              {getUserName()}
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-sm-3">
              <h6 className="mb-0">Full Name</h6>
            </div>
            <div className="col-sm-9 text-secondary">
              {localStorage.getItem("FIRST_NAME")}{" "}
              {localStorage.getItem("LAST_NAME")}
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-sm-3">
              <h6 className="mb-0">Email</h6>
            </div>
            <div className="col-sm-9 text-secondary">
              {localStorage.getItem("EMAIL")}
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-sm-3">
              <h6 className="mb-0">Phone</h6>
            </div>
            <div className="col-sm-9 text-secondary">
              {localStorage.getItem("PHONE")}
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-sm-3">
              <h6 className="mb-0">Address</h6>
            </div>
            <div className="col-sm-9 text-secondary">
              {localStorage.getItem("ADDRESS")}
            </div>
          </div>
          <hr />
          <div className="row">
            <ProfileEditModal />
          </div>
        </div>
      </div>
    </div>
  );
}
