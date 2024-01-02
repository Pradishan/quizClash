import React, { lazy } from "react";

const Home = lazy(() => import("../pages/Home"));
const Admin = lazy(() => import("../pages/Admin"));
const Profile = lazy(() => import("../pages/Profile"));
const Quizzes = lazy(() => import("../pages/Quizzes"));
const Leaderboard = lazy(() => import("../pages/Leaderboard"));
const Page404 = lazy(() => import("../pages/Page404"));

// routings
const routingData = {
  "/": <Home />,
  "/admin": <Admin />,
  "/profile": <Profile />,
  "/quizzes": <Quizzes />,
  "/leaderboard": <Leaderboard />,

  "*": <Page404 />,
};

export default routingData;
