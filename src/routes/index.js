import { useRoutes } from 'react-router-dom';

// routes
import MainRoutes from './MainRoutes';
import Users from './User';
import config from 'config';
import Authentication from './Authentication';

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
    return useRoutes([MainRoutes, Users,Authentication ], config.basename);
}
