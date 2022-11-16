import { lazy } from "react";

// project imports
import Loadable from "ui-component/Loadable";
import MinimalLayout from "layout/MinimalLayout";

// login option 3 routing
const User = Loadable(lazy(() => import("views/user/user")));
const Role = Loadable(lazy(() => import("views/user/role")));
const Permission = Loadable(lazy(() => import("views/user/permission")));
const Department = Loadable(lazy(() => import("views/master/department")));
const Branch = Loadable(lazy(() => import("views/master/branch")));
// ==============================|| AUTHENTICATION ROUTING ||============================== //

const Users = {
  path: "/",
  element: <MinimalLayout />,
  children: [
    {
      path: "/Lms/dashboard/user",
      element: <User />,
    },
    {
      path: "/Lms/dashboard/role",
      element: <Role />,
    },
    {
      path: "/Lms/dashboard/permission",
      element: <Permission />,
    },
    {
      path: "/Lms/dashboard/department",
      element: <Department />,
    },
    {
      path: "/Lms/dashboard/branch",
      element: <Branch />,
    },
  ],
};

export default Users;
