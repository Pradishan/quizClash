import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import { getUserID } from '../util/Authentication';
import LodingSpinner from '../components/LodingSpinner';

export default function SettingUpdateUserDetailsForm() {
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState({
    username: '',
    address: '',
    email: '',
    phone: '',
  });

  const [editMode, setEditMode] = useState(false);

  // fetch data
  const fetchUserData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get(`accounts/user/${getUserID()}`);
      if (response.status === 200) {
        setUserData(response.data);
      }
    } catch (error) {
      console.log('Something went wrong');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchUserData();
  }, [fetchUserData]);

  const handleEditModeToggle = () => {
    setEditMode(!editMode);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const response = await axios.patch(`accounts/update-user/${getUserID()}`, userData);
      if (response.status === 200) {
        console.log('Data updated successfully');
      }
    } catch (error) {
      console.log('Error updating data:', error);
    } finally {
      setLoading(false);
    }
  };

  // if data is fetching show loading spinner for user
  if (loading) return <LodingSpinner />;

  return (
    <div className="col-xl-8">
      <div className="card mb-4">
        <div className="card-header">Account Details</div>
        <div className="card-body">
          <form>
            {/* Username */}
            <div className="mb-3">
              <label className="small mb-1" htmlFor="editName">
                <b>Username</b>
              </label>
              <input
                className="form-control"
                id="editName"
                type="text"
                placeholder="Enter your name"
                name="username"
                value={userData.username}
                readOnly={!editMode}
                onChange={handleInputChange}
              />
            </div>

            {/* Address */}
            <div className="mb-3">
              <label className="small mb-1" htmlFor="address">
                <b>Address</b>
              </label>
              <input
                className="form-control"
                id="address"
                type="text"
                placeholder="Enter your address"
                name="address"
                value={userData.address}
                readOnly={!editMode}
                onChange={handleInputChange}
              />
            </div>

            {/* Email */}
            <div className="mb-3">
              <label className="small mb-1" htmlFor="emailaddress">
                <b>Email address</b>
              </label>
              <input
                className="form-control"
                id="emailaddress"
                type="email"
                placeholder="Enter your email address"
                name="email"
                value={userData.email}
                readOnly={!editMode}
                onChange={handleInputChange}
              />
            </div>

            {/* Phone number */}
            <div className="mb-3">
              <label className="small mb-1" htmlFor="phoneNo">
                <b>Phone Number</b>
              </label>
              <input
                className="form-control"
                id="phoneNo"
                type="text"
                placeholder="Enter your phone number"
                name="phone"
                value={userData.phone}
                readOnly={!editMode}
                onChange={handleInputChange}
              />
            </div>

            {/* Toggle Edit Mode button */}
            <button
              type="button"
              className="btn btn-secondary mr-2"
              onClick={handleEditModeToggle}
            >
              {editMode ? 'Cancel' : 'Edit'}
            </button>

            {/* Save Changes button */}
            {editMode && (
              <button type="button" className="btn btn-primary" onClick={handleSubmit}>
                Save Changes
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
