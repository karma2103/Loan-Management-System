// assets
import { IconKey } from '@tabler/icons';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
// constant
const icons = {
    IconKey,
    LockOpenIcon,
    AppRegistrationIcon
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const pages = {
    id: 'pages',
    title: 'Pages',
    type: 'group',
    children: [
        {
            id: 'authentication',
            title: 'Authentication',
            type: 'collapse',
            icon: icons.IconKey,

            children: [
                {
                    id: 'login3',
                    title: 'User',
                    type: 'item',
                    url: '/user',
                    breadcrumbs: false,
                   
                },
                {
                    id: 'Role',
                    title: 'Role',
                    type: 'item',
                    url: '/role',
                    breadcrumbs: false,
                },
                {
                    id: 'permission ',
                    title: 'Permission',
                    type: 'item',
                    url: '/permission',
                    breadcrumbs: false,
                }
            ]
        }
    ]
};

export default pages;
