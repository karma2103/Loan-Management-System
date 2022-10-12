import { lazy } from 'react';

// project imports
import Loadable from 'ui-component/Loadable';
import MinimalLayout from 'layout/MinimalLayout';

// login option 3 routing
const AuthLogin3 = Loadable(lazy(() => import('views/pages/authentication/authentication3/Login3')));
const AuthRegister3 = Loadable(lazy(() => import('views/pages/authentication/authentication3/Register3')));

// ==============================|| AUTHENTICATION ROUTING ||============================== //

const Authentication = {
    path: '/',
    element: <MinimalLayout />,
    children: [
        {
            path: '/Lms/login',
            element: <AuthLogin3 />
        },
        {
            path: '/Lms/register',
            element: <AuthRegister3 />
        },
        
    ]
};

export default Authentication;