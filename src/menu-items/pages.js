// assets

import { IconKey } from '@tabler/icons';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import GroupAddOutlinedIcon from '@mui/icons-material/GroupAddOutlined';
// constant
const icons = {
    IconKey,
    LockOpenIcon,
    AppRegistrationIcon,
    SchoolOutlinedIcon,
    GroupAddOutlinedIcon
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const pages = {
    id: 'pages',
    title: 'Authentication',
    type: 'group',
    children: [
        {
            id: 'page',
            title: 'Users',
            type: 'collapse',
            icon: icons.GroupAddOutlinedIcon,
            children: [
                {
                    id: 'user',
                    title: 'User',
                    type: 'item',
                    url: '/dashboard/user',
                    breadcrumbs: false,
                   
                },
                {
                    id: 'Role',
                    title: 'Role',
                    type: 'item',
                    url: '/dashboard/role',
                    breadcrumbs: false,
                },
                {
                    id: 'permission ',
                    title: 'Permission',
                    type: 'item',
                    url: '/dashboard/permission',
                    breadcrumbs: false,
                },
                
               
            ],
        },
        {
            id: 'pages',
            title: 'Master Setup',
            type: 'collapse',
            icon: icons.SchoolOutlinedIcon,
            children: [
                {
                    id: 'department',
                    title: 'Department',
                    type: 'item',
                    url: '/dashboard/department',
                    breadcrumbs: false
                },
                {
                    id: 'Branch',
                    title: 'Branch',
                    type: 'item',
                    url: '/dashboard/branch',
                    breadcrumbs: false
                }
            ]
        }
    ]
    
};

export default pages;
