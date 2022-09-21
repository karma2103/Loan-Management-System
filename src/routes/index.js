import { useRoutes } from 'react-router-dom';

// routes
import MainRoutes from './MainRoutes';
import User from './User';
import config from 'config';
import AuthenticationRoutes from './User';

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
    return useRoutes([MainRoutes, User,AuthenticationRoutes ], config.basename);
}
