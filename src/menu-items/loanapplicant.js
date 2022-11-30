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
    id: 'applicant',
    title: 'Loan Applicant Setup',
    type: 'group',
    children: [
        {
            id: 'page',
            title: 'Loan Applicant List',
            type: 'collapse',
            icon: icons.GroupAddOutlinedIcon,
            children: [
                {
                    id: 'applicant',
                    title: 'Applicant Lists',
                    type: 'item',
                    url: '/loan-applicant/lists',
                    breadcrumbs: false,
                },
            ],
        },
    ]
    
};

export default pages;
