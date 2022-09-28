import { lazy } from "react";

// project imports
import Loadable from "ui-component/Loadable";
import MinimalLayout from "layout/MinimalLayout";

// login option 3 routing
const User = Loadable(lazy(() => import("views/pages/authentication/user/user")));
const Role = Loadable(lazy(() => import("views/pages/authentication/user/role")));
const Permission = Loadable(lazy(() => import("views/pages/authentication/user/permission")));
const Department = Loadable(lazy(() => import("views/pages/authentication/user/department")));
const Branch = Loadable(lazy(() => import("views/pages/authentication/user/branch")));
// ==============================|| AUTHENTICATION ROUTING ||============================== //

const AuthenticationRoutes = {
  path: "/",
  element: <MinimalLayout />,
  children: [
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
  ],
};

export default AuthenticationRoutes;
