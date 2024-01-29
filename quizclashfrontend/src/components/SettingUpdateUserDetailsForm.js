import axios from "axios";
import React, {lazy,useState} from 'react';
import { toast } from "react-toastify";
import tostDefault from "../data/tostDefault";
import { getUserID } from "../util/Authentication";

const LodingSpinner = lazy(() => import('./LodingSpinner'))

export default function SettingUpdateUserDetailsForm({user}) {

  const [formData, setFormData] = useState({
    "username": user?.username,
    "address": user?.address,
    "email": user?.email,
    "phone": user?.phone,
   
  })

  const [loading, setLoading] = useState(false)

  const handlechange = ({ currentTarget: input }) => {
    let newData = { ...formData };
    newData[input.name] = input.value;
    setFormData(newData);
  }


  const submitForm = async (e) => {
    e.preventDefault();
    const id = toast.loading("Please wait...", tostDefault);
    setLoading(true)
    await axios
      .patchForm(`accounts/update-user/${getUserID()}`, formData)
      .then((response) => {
        // console.log(response.data)
        if (response.status === 200) {

          toast.update(id, {
            ...tostDefault,
            render: "saved",
            type: "success",
            isLoading: false,
           // closeButton: true,
          });
        }
        setLoading(false)
      })
      .catch((error) => {
        if (error?.response?.status === 400) {
          toast.update(id, {
            ...tostDefault,
            render: "Invaild input",
            type: "error",
            isLoading: false,
            closeButton: true,
          });
        } else if (error?.code === "ERR_NETWORK") {
          toast.update(id, {
            ...tostDefault,
            render: "Network Error",
            type: "error",
            isLoading: false,
            closeButton: true,
          });
        } else {
          toast.update(id, {
            ...tostDefault,
            render: "Something went wrong",
            type: "error",
            isLoading: false,
            closeButton: true,
          });
        }

        console.log({
          message: error.message,
          code: error.code,
          response: error.response?.data
        });

        setLoading(false)

      })
      .finally(() =>{
        setLoading(false)
      });
  };

  // if data is fetching show loading spinner for user
  if (loading) return;


  return (
    <div class="col-xl-8">
    <div class="card mb-4">
      <div class="card-header">Account Details</div>
      <div class="card-body">
        <form onSubmit={(e) => (submitForm(e))}>
          {/*name*/}
          <div class="mb-3">
            <label class="small mb-1" for="editName">
              <b>Username</b>
            </label>
            <input
              class="form-control"
              id="editName"
              type="text"
              placeholder="Enter your name"
              name="username"
              onChange={(e) => {
                handlechange(e);
              }}
              value={formData.username}
              readOnly
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
              name="address"
                        onChange={(e) => {
                          handlechange(e);
                        }}
                        value={formData.address}
                        required
            />
          </div>

          {/*email*/}
          <div class="mb-3">
            <label class="small mb-1" for="emailaddress">
              <b>Email address</b>
            </label>
            <input
              class="form-control"
              id="emailaddress"
              type="email"
              placeholder="Enter your email address"
              name="email"
              onChange={(e) => {
                handlechange(e);
              }}
              value={formData.email}
              readOnly
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
              name="phone"
              onChange={(e) => {
                handlechange(e);
              }}
              value={formData.phone}
              required
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
  )}
  
