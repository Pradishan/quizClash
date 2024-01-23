import React, { useCallback, useEffect, useState } from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { getAccessToken, getUserID, loadCridential, removeCridential } from './Authentication'
import axios from 'axios';

export default function PrivateRoute() {

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
        removeCridential();
      })
      .finally(() => {
      });
  }, [id]);

  useEffect(() => {
    fetchData()
  }, [fetchData]);

  return (
    (getAccessToken) ? <Outlet /> : <Navigate to={'/login'} />
  )
}
