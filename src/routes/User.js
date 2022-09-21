import { lazy } from 'react';

// project imports
import Loadable from 'ui-component/Loadable';
import MinimalLayout from 'layout/MinimalLayout';

// login option 3 routing
const User = Loadable(
    lazy(() => import("views/pages/authentication/user/user"))
  );
  const Role = Loadable(
    lazy(() => import("views/pages/authentication/user/role"))
  );
  const Permission = Loadable(
    lazy(() => import("views/pages/authentication/user/permission"))
  );
// ==============================|| AUTHENTICATION ROUTING ||============================== //

const AuthenticationRoutes = {
    path: '/',
    element: <MinimalLayout />,
    children: [
        {
            path: '/user',
            element: <User />
        },
        {
            path: '/role',
            element: <Role />
        },
        {
            path: '/permission',
            element: <Permission />
        }
    ]
};

export default AuthenticationRoutes;
