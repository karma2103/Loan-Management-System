import { lazy } from "react";

// project imports
import Loadable from "ui-component/Loadable";
import MainLayout from "layout/MainLayout";

// login option 3 routing
const UserLog = Loadable(lazy(() => import("views/pages/audit-trail/UserLog")));
// ==============================|| AUTHENTICATION ROUTING ||============================== //

const AuditTrail = {
  path: "/",
  element: <MainLayout />,
  children: [
    {
      path: "/audit-trail/user-log",
      element: <UserLog />,
    },
  ],
};
export default AuditTrail;
