import React, { lazy } from "react";

const Admin = lazy(() => import("../pages/Admin"));

// routings
const adminRoutingData = {
  "/admin": <Admin />,
};

export default adminRoutingData;
