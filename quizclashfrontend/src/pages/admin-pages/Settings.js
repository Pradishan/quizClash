import React from 'react'
import '../../styles/admin-setting.css'
import proPic from '../../assets/pro pic.jpg';

export default function Settings() {
  return (
    <div class="container-xl px-4 mt-4">
    <div class="row">

     {/*Profile picture card*/ }
          
        <div class="col-xl-4">
            <div class="card mb-4 mb-xl-0">
                <div class="card-header">Profile Picture</div>
                <div class="card-body text-center">
                     {/*Profile picture image*/ }
                    <img class="img-account-profile rounded-circle mb-2" src={ proPic } alt="pro-pic"/>
                    <div class="mt-3">
                        <h4><b>John Doe</b></h4>
                        <p class="text-secondary mb-1"><b>SDT0054</b></p>
                        
                    </div>
                    <br/>
                    <br/>
                    <label class="custom-upload"><input type="file" name="upload_file" />Update Profile Picture</label>
                    
                </div>
                <br/>
          
            </div>
        </div>

  {/*Personal information card*/ }
        <div class="col-xl-8">
           
            <div class="card mb-4">
                <div class="card-header">Account Details</div>
                <div class="card-body">
                    <form>
                         {/*name*/ }
                        <div class="mb-3">
                            <label class="small mb-1" for="name">Name</label>
                            <input class="form-control" id="name" type="text" placeholder="Enter your name" value=""/>
                        </div>

                         {/*address*/ }
                        <div class="mb-3">
                           
                                <label class="small mb-1" for="address">Address</label>
                                <input class="form-control" id="address" type="text" placeholder="Enter your address" value=""/>
                            </div>
                            
                        
                         {/*email*/ }
                        <div class="mb-3">
                            <label class="small mb-1" for="inputEmailAddress">Email address</label>
                            <input class="form-control" id="inputEmailAddress" type="email" placeholder="Enter your email address" value=""/>
                        </div>
                       
                        {/*phone number*/ }
                        <div class="mb-3">
                            <label class="small mb-1" for="phoneNo">Phone Number</label>
                            <input class="form-control" id="phoneNo" type="text" placeholder="Enter your phone number" value=""/>
                        </div>

                       {/*SAVE button*/ }
                        <button class="btn btn-primary" type="button">Save changes</button>
                    </form>
                </div>
            </div>
        </div>

        {/*Security Setting*/ }
        <div class="col-xl-6">
  <div class="card mb-4 mb-xl-0">
    <div class="card-header">Change Password</div>
    <div class="card-body">
        <form>
            
            <div class="mb-3">
                <label class="small mb-1" for="currentPassword">Current Password</label>
                <input class="form-control" id="currentPassword" type="password" placeholder="Enter current password"/>
            </div>
            
            <div class="mb-3">
                <label class="small mb-1" for="newPassword">New Password</label>
                <input class="form-control" id="newPassword" type="password" placeholder="Enter new password"/>
            </div>
            
            <div class="mb-3">
                <label class="small mb-1" for="confirmPassword">Confirm Password</label>
                <input class="form-control" id="confirmPassword" type="password" placeholder="Confirm new password"/>
            </div>
            <button class="btn btn-primary" type="button">Save Changes</button>
        </form>
    </div>
</div>
</div>

        </div>
       </div>
  )
}
