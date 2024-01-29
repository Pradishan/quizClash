import React, { lazy } from "react";

const Profile = lazy(() => import("../pages/Profile"));
const Quiz = lazy(() => import("../pages/Quiz"));

// routings
const privateRoutingData = {
  "/profile": <Profile />,
  "/quiz/:id": <Quiz />,
};

export default privateRoutingData;
