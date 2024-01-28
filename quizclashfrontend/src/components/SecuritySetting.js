import React, { useState } from 'react';
import axios from 'axios';

export default function SecuritySetting() {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleChangePassword = async () => {
      try {
           
          if (!currentPassword || !newPassword || !confirmPassword) {
              alert('Please fill in all fields');
              return;
          }

          
          const response = await axios.post('/api/change-password/', {
              currentPassword,
              newPassword,
              confirmPassword,
          });

          
          alert('Password changed successfully');
      } catch (error) {
          
          alert('Error changing password');
      }
  };

  return (
      <div className="col-xl-6">
          <div className="card mb-4 mb-xl-0">
              <div className="card-header">Change Password</div>
              <div className="card-body">
                  <form>
                      <div className="mb-3">
                          <label className="small mb-1" htmlFor="currentPassword">
                              <b>Current Password</b>
                          </label>
                          <input
                              className="form-control"
                              id="currentPassword"
                              type="password"
                              placeholder="Enter current password"
                              value={currentPassword}
                              onChange={(e) => setCurrentPassword(e.target.value)}
                          />
                      </div>

                      <div className="mb-3">
                          <label className="small mb-1" htmlFor="newPassword">
                              <b>New Password</b>
                          </label>
                          <input
                              className="form-control"
                              id="newPassword"
                              type="password"
                              placeholder="Enter new password"
                              value={newPassword}
                              onChange={(e) => setNewPassword(e.target.value)}
                          />
                      </div>

                      <div className="mb-3">
                          <label className="small mb-1" htmlFor="confirmPassword">
                              <b>Confirm Password</b>
                          </label>
                          <input
                              className="form-control"
                              id="confirmPassword"
                              type="password"
                              placeholder="Confirm new password"
                              value={confirmPassword}
                              onChange={(e) => setConfirmPassword(e.target.value)}
                          />
                      </div>
                      <button className="btn btn-primary" type="button" onClick={handleChangePassword}>
                          Save Changes
                      </button>
                  </form>
              </div>
          </div>
      </div>
  );
}
