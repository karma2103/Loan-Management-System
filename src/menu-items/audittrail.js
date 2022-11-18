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
    id: 'audittrail',
    title: 'Audit Trails',
    type: 'group',
    children: [
        {
            id: 'page',
            title: 'Log Management',
            type: 'collapse',
            icon: icons.GroupAddOutlinedIcon,
            children: [
                {
                    id: 'user',
                    title: 'User Log',
                    type: 'item',
                    url: '/audit-trail/user-log',
                    breadcrumbs: false,
                   
                },
                {
                    id: 'loan',
                    title: 'Loan Log',
                    type: 'item',
                    url: '/log-management/loan',
                    breadcrumbs: false,
                },
                {
                    id: 'test ',
                    title: 'test',
                    type: 'item',
                    url: '/log-management/permission',
                    breadcrumbs: false,
                },
                
               
            ],
        },
    ]
    
};

export default pages;
