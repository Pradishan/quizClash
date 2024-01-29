import React from 'react'
import proPic from "../assets/user.png";
import { getUserEmail, getUserName } from '../util/Authentication';
import ProfileImage from './ProfileImage';

export default function UpdateProPictureCard({user}) {
  return (
    

    <div class="col-xl-4">
      <div class="card mb-4 mb-xl-0">
        <div class="card-header">Profile Picture</div>
        <div class="card-body text-center">
          <br></br>
          <ProfileImage size={'150px'} src={user?.profile} />
   
          <div class="mt-3">
            <h4>
              <b> {user?.username}</b>
            </h4>
            <p class="text-secondary mb-1">
              <b> {user?.email}</b>
            </p>
          </div>
          <br />
          <br />

          <div className="d-flex justify-content-between align-items-center">
                        <label className="custom-upload">
                            <input type="file" name="upload_file" className="btn btn-secondary" />
                            Choose Image
                        </label>

                        <button className="btn btn-primary" type="button" >
                            Save Changes
                        </button>
                    </div>
                      
                <br></br>     
        </div>
      </div>
    </div>
  )
}
