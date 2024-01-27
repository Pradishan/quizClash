import React from 'react'
import proPic from "../assets/pro pic.jpg";

export default function UpdateProPictureCard() {
  return (
    

    <div class="col-xl-4">
      <div class="card mb-4 mb-xl-0">
        <div class="card-header">Profile Picture</div>
        <div class="card-body text-center">
          <br></br>
          {/*Profile picture image*/}
          <img
            class="img-account-profile rounded-circle mb-2"
            src={proPic}
            alt="pro-pic"
          />
          <div class="mt-3">
            <h4>
              <b>John Doe</b>
            </h4>
            <p class="text-secondary mb-1">
              <b>SDT0054</b>
            </p>
          </div>
          <br />
          <br />

          <label class="custom-upload">
            <input type="file" name="upload_file" />
            Update Profile Picture
          </label>
        </div>
      </div>
    </div>
  )
}
