import React, { useCallback, useEffect } from 'react'
import { Outlet, Navigate, useNavigate } from 'react-router-dom'
import { getAccessToken, getUserID, loadCridential, removeCookie, removeCridential } from './Authentication'
import axios from 'axios';

export default function PrivateRoute() {
  const navigate = useNavigate()

  const  id = getUserID(); 
  // fetch data
  const fetchData = useCallback(async () => {
    await axios
      .get(`accounts/user/${id}`)
      .then((response) => {
        if (response.status === 200) {
          loadCridential(response.data)
        }
      })
      .catch((error) => {
        console.log("Something went wrong",error);
        removeCookie("TOKEN")
        removeCridential();
        navigate('/login')
      })
      .finally(() => {
      });
  }, [id,navigate]);

  useEffect(() => {
    fetchData()
  }, [fetchData]);

  return (
    (getAccessToken) ? <Outlet /> : <Navigate to={'/login'} />
  )
}
