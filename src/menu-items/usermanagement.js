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

const usermanagement = {
    id: 'pages',
    title: 'User Management',
    type: 'group',
    children: [
        {
            id: 'acl',
            title: 'ACL',
            type: 'collapse',
            icon: icons.GroupAddOutlinedIcon,
            children: [
                {
                    id: 'user',
                    title: 'User',
                    type: 'item',
                    url: '/acl/user',
                    breadcrumbs: false,
                   
                },
                {
                    id: 'Role',
                    title: 'Role',
                    type: 'item',
                    url: '/acl/role',
                    breadcrumbs: false,
                },
                {
                    id: 'permission ',
                    title: 'Permission',
                    type: 'item',
                    url: '/acl/permission',
                    breadcrumbs: false,
                },
                
               
            ],
        },
        {
            id: 'master-data',
            title: 'Master Setup',
            type: 'collapse',
            icon: icons.SchoolOutlinedIcon,
            children: [
                {
                    id: 'department',
                    title: 'Department',
                    type: 'item',
                    url: '/master-data/department',
                    breadcrumbs: false
                },
                {
                    id: 'Branch',
                    title: 'Branch',
                    type: 'item',
                    url: '/master-data/branch',
                    breadcrumbs: false
                }
            ]
        }
    ]
};

export default usermanagement;
