import { lazy } from "react";

// project imports
import MainLayout from "layout/MainLayout";
import Loadable from "ui-component/Loadable";
// import { addEdit } from 'views/sample-page/addEdit';

// dashboard routing
const DashboardDefault = Loadable(
  lazy(() => import("views/dashboard/Default"))
);

// utilities routing
const UtilsTypography = Loadable(
  lazy(() => import("views/utilities/Typography"))
);
const UtilsColor = Loadable(lazy(() => import("views/utilities/Color")));
const UtilsShadow = Loadable(lazy(() => import("views/utilities/Datatable")));
const UtilsMaterialIcons = Loadable(
  lazy(() => import("views/utilities/MaterialIcons"))
);
const UtilsTablerIcons = Loadable(
  lazy(() => import("views/utilities/TablerIcons"))
);

// sample page routing
const SamplePage = Loadable(lazy(() => import("views/sample-page")));

const User = Loadable(
  lazy(() => import("views/pages/authentication/user/user"))
);
const Role = Loadable(
  lazy(() => import("views/pages/authentication/user/role"))
);
const Permission = Loadable(
  lazy(() => import("views/pages/authentication/user/permission"))
);
const Department = Loadable(
  lazy(() => import("views/pages/authentication/user/department"))
);
const Branch = Loadable(
  lazy(() => import("views/pages/authentication/user/branch"))
);
// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: "/",
  element: <MainLayout />,
  children: [
    {
      path: "/",
      element: <DashboardDefault />,
    },
    {
      path: "/dashboard/user",
      element: <User />,
    },
    {
      path: "/dashboard/role",
      element: <Role />,
    },
    {
      path: "/dashboard/permission",
      element: <Permission />,
    },
    {
      path: "/dashboard/department",
      element: <Department />,
    },
    {
      path: "/dashboard/branch",
      element: <Branch />,
    },

    {
      path: "/utils/util-typography",
      element: <UtilsTypography />,
    },
    {
      path: "/utils/util-color",
      element: <UtilsColor />,
    },
    {
      path: "/utils/util-shadow",
      element: <UtilsShadow />,
    },
    {
      path: "/icons/tabler-icons",
      element: <UtilsTablerIcons />,
    },
    {
      path: "/icons/material-icons",
      element: <UtilsMaterialIcons />,
    },
    {
      path: "/sample-page",
      element: <SamplePage />,
    },
  ],
};

export default MainRoutes;
