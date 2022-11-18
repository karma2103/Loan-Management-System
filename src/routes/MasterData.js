import { lazy } from "react";

// project imports
import Loadable from "ui-component/Loadable";
import MainLayout from "layout/MainLayout";

// login option 3 routing
const Department = Loadable(lazy(() => import("views/pages/master-data/Department")));
const Branch = Loadable(lazy(() => import("views/pages/master-data/Branch")));
// ==============================|| AUTHENTICATION ROUTING ||============================== //

const MasterData = {
  path: "/",
  element: <MainLayout />,
  children: [
    {
      path: "/master-data/department",
      element: <Department />,
    },
    {
      path: "/master-data/branch",
      element: <Branch />,
    },
  ],
};

export default MasterData;
