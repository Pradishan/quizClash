import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { getAccessToken } from './Authentication'

export default function PrivateRoute() {

  return (
    (getAccessToken()) ? <Outlet /> : <Navigate to={'/login'} />
  )
}
