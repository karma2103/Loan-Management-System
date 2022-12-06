import { lazy } from "react";

// project imports
import Loadable from "ui-component/Loadable";
// import MinimalLayout from "layout/MinimalLayout";
import MainLayout from  "layout/MainLayout";

// login option 3 routing
const Applicant = Loadable(lazy(() => import("views/pages/loan-applicant/applicantform/applicantlist")));
// ==============================|| AUTHENTICATION ROUTING ||============================== //

const LoanApplicant = {
  path: "/",
  element: <MainLayout />,
  children: [
    {
      path: "/loan-applicant/lists",
      element: <Applicant />,
    },
  ],
};
export default LoanApplicant;
