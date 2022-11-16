import { lazy } from "react";

// project imports
import Loadable from "ui-component/Loadable";
import MainLayout from "layout/MainLayout";

// login option 3 routing
const Department = Loadable(lazy(() => import("views/master/department")));
const Branch = Loadable(lazy(() => import("views/master/branch")));
// ==============================|| AUTHENTICATION ROUTING ||============================== //

const Master = {
  path: "/",
  element: <MainLayout />,
  children: [
    {
      path: "/Lms/master/department",
      element: <Department />,
    },
    {
      path: "/Lms/master/branch",
      element: <Branch />,
    },
  ],
};

export default Master;
