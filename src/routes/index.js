import { useRoutes } from 'react-router-dom';

// routes
import MainRoutes from './MainRoutes';
import ACL from './ACL';
import MasterData from './MasterData';
import config from 'config';
import Authentication from './Authentication';
import Applicant from './LoanApplicant';


// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
    return useRoutes([MainRoutes, MasterData, Authentication, ACL,Applicant], config.basename);
}
