import React from 'react'

export default function SecuritySetting() {
  return (
    <div class="col-xl-6">
          <div class="card mb-4 mb-xl-0">
            <div class="card-header">Change Password</div>
            <div class="card-body">
              <form>
                <div class="mb-3">
                  <label class="small mb-1" for="currentPassword">
                    <b>Current Password</b>
                  </label>
                  <input
                    class="form-control"
                    id="currentPassword"
                    type="password"
                    placeholder="Enter current password"
                  />
                </div>

                <div class="mb-3">
                  <label class="small mb-1" for="newPassword">
                    <b>New Password</b>
                  </label>
                  <input
                    class="form-control"
                    id="newPassword"
                    type="password"
                    placeholder="Enter new password"
                  />
                </div>

                <div class="mb-3">
                  <label class="small mb-1" for="confirmPassword">
                    <b>Confirm Password</b>
                  </label>
                  <input
                    class="form-control"
                    id="confirmPassword"
                    type="password"
                    placeholder="Confirm new password"
                  />
                </div>
                <button class="btn btn-primary" type="button">
                  Save Changes
                </button>
              </form>
            </div>
          </div>
        </div>
  )
}
