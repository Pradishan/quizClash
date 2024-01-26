import React from "react";
import ProfileEditModal from "./ProfileEditModal";

export default function ProfileCard({user}) {

  return (
    <div>
      <div className="card mb-3">
        <div className="card-body">
          <div className="row">
            <div className="col-sm-3">
              <h6 className="mb-0">Username</h6>
            </div>
            <div className="col-sm-9 text-secondary">
              {user?.username}
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-sm-3">
              <h6 className="mb-0">Full Name</h6>
            </div>
            <div className="col-sm-9 text-secondary">
            {user?.first_name}{" "}
            {user?.last_name}
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-sm-3">
              <h6 className="mb-0">Email</h6>
            </div>
            <div className="col-sm-9 text-secondary">
            {user?.email}
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-sm-3">
              <h6 className="mb-0">Phone</h6>
            </div>
            <div className="col-sm-9 text-secondary">
            {user?.phone}
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-sm-3">
              <h6 className="mb-0">Address</h6>
            </div>
            <div className="col-sm-9 text-secondary">
            {user?.address}
            </div>
          </div>
          <hr />
          <div className="row">
            <ProfileEditModal user={user}/>
          </div>
        </div>
      </div>
    </div>
  );
}
