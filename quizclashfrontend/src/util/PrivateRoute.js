import { Outlet,Navigate } from 'react-router-dom'

export default function PrivateRoute() {
    let auth = {token:sessionStorage.getItem("Token")};
  return (
    (auth.token !== null)? <Outlet />:<Navigate to={'/login'} />
  )
}
