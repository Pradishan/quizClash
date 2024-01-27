import React from 'react'

export default function SettingUpdateUserDetailsForm() {
  return (
    <div class="col-xl-8">
    <div class="card mb-4">
      <div class="card-header">Account Details</div>
      <div class="card-body">
        <form>
          {/*name*/}
          <div class="mb-3">
            <label class="small mb-1" for="name">
              <b>Name</b>
            </label>
            <input
              class="form-control"
              id="name"
              type="text"
              placeholder="Enter your name"
              value=""
            />
          </div>

          {/*address*/}
          <div class="mb-3">
            <label class="small mb-1" for="address">
              <b>Address</b>
            </label>
            <input
              class="form-control"
              id="address"
              type="text"
              placeholder="Enter your address"
              value=""
            />
          </div>

          {/*email*/}
          <div class="mb-3">
            <label class="small mb-1" for="inputEmailAddress">
              <b>Email address</b>
            </label>
            <input
              class="form-control"
              id="inputEmailAddress"
              type="email"
              placeholder="Enter your email address"
              value=""
            />
          </div>

          {/*phone number*/}
          <div class="mb-3">
            <label class="small mb-1" for="phoneNo">
              <b>Phone Number</b>
            </label>
            <input
              class="form-control"
              id="phoneNo"
              type="text"
              placeholder="Enter your phone number"
              value=""
            />
          </div>

          {/*SAVE button*/}
          <button class="btn btn-primary" type="button">
            Save changes
          </button>
        </form>
      </div>
    </div>
  </div>
  )
}
