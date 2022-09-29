import { lazy } from "react";

// project imports
import Loadable from "ui-component/Loadable";
import MainLayout from "layout/MainLayout";

// login option 3 routing
const Department = Loadable(lazy(() => import("views/pages/authentication/user/department")));
const Branch = Loadable(lazy(() => import("views/pages/authentication/user/branch")));
// ==============================|| AUTHENTICATION ROUTING ||============================== //

const Master = {
  path: "/",
  element: <MainLayout />,
  children: [
    {
      path: "/master/department",
      element: <Department />,
    },
    {
      path: "/master/branch",
      element: <Branch />,
    },
  ],
};

export default Master;
