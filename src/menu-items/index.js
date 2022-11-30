import dashboard from './dashboard';
import utilities from './utilities';
import other from './other';
import audittrails from './loanapplicant';
import usermanagement from './usermanagement';

// ==============================|| MENU ITEMS ||============================== //

const menuItems = {
    items: [dashboard, usermanagement, utilities, other,audittrails]
};

export default menuItems;
