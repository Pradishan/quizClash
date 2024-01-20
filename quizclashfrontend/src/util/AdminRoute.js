import React from 'react'
import { adminAccess } from './Authentication'
import { Navigate, Outlet } from 'react-router-dom'

export default function AdminRoute() { return adminAccess() ? <Outlet /> : <Navigate to={'/login'} />}

