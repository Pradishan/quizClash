import React, { lazy } from "react";

const Admin = lazy(() => import("../pages/Admin"));
const Profile = lazy(() => import("../pages/Profile"));
const Quiz = lazy(() => import("../pages/Quiz"));


// routings
const privateRoutingData = {
  "/admin": <Admin />,
  "/profile": <Profile />,
  "/quiz/:id": <Quiz />,
};

export default privateRoutingData;
