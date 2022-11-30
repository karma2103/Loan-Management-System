import { lazy } from "react";

// project imports
import Loadable from "ui-component/Loadable";
// import MinimalLayout from "layout/MinimalLayout";
import MainLayout from  "layout/MainLayout";

// login option 3 routing
const User = Loadable(lazy(() => import("views/pages/acl/user-role/user")));
const Role = Loadable(lazy(() => import("views/pages/acl/role/role")));
const Permission = Loadable(lazy(() => import("views/pages/acl/permission/permission")));
// ==============================|| AUTHENTICATION ROUTING ||============================== //

const ACL = {
  path: "/",
  element: <MainLayout />,
  children: [
    {
      path: "/acl/user",
      element: <User />,
    },
    {
      path: "/acl/role",
      element: <Role />,
    },
    {
      path: "/acl/permission",
      element: <Permission />,
    },
  ],
};
export default ACL;
