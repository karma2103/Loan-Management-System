import React from "react";
import "bootstrap-css-only/css/bootstrap.min.css";
import { MDBDataTable } from "mdbreact";
import MainCard from "ui-component/cards/MainCard";
import { Button, Card } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import { Box } from "@mui/system";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import { GridActionsCellItem } from "@mui/x-data-grid";
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';
import PersonalInformation from './personalinformation';
import LoanProcess from "./loanprocess";
import LoanApply from "./loanapply";

const steps = ['Personal Information', 'Loan Process', 'Apply Loan'];

export function ApplicantList() {
  // const classes = useStyles();
  const [scroll, setScroll] = React.useState("paper");
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const [open, setOpen] = React.useState({
    status: false,
    title: ''
  });
// const ApplicantList = () => {
  const data = {
    columns: [
      {
        label: "Policy No",
        field: "policy_no",
        sort: "asc",
        width: 150,
      },
      {
        label: "Name",
        field: "name",
        sort: "asc",
        width: 270,
      },
      {
        label: "Contact No",
        field: "contact_no",
        sort: "asc",
        width: 200,
      },
      {
        label: "Action",
        customBodyRender: () => {
          return (
            <Box>
              <GridActionsCellItem icon={<EditIcon />} sx={{ fontSize: 28 }} />
              <GridActionsCellItem icon={<DeleteIcon />} sx={{ fontSize: 28 }} />
            </Box>
          );
        },
      },
    ],

    rows: [
      {
        policy_no: "Tiger Nixon",
        name: "System Architect",
        contact_no: "Edinburgh",
      },
      {
        policy_no: "Tiger Nixon",
        name: "System Architect",
        contact_no: "Edinburgh",
      },
      {
        policy_no: "Tiger Nixon",
        name: "System Architect",
        contact_no: "Edinburgh",
      },
    ],
  };

  // const [open, setOpen] = React.useState(false);


  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <MainCard
      title="Loan Applicant Details"
      secondary={
        <Button onClick={handleClickOpen('body')} sx={{ border: "1px solid" }}>
          Create
        </Button>
      }
    >
      <MDBDataTable
        hover data={data}
      />
      <Dialog
        open={open}
        // onClose={handleClose}
        scroll={scroll}
        sx={{
          "& .MuiDialog-container": {
            "& .MuiPaper-root": {
              maxWidth: "100%", // Set your width here
            },
          },
        }}
      >
        <DialogContent>
          <DialogContentText>
            <MainCard title="Loan Application Form">
              <Card>
                <Box sx={{ width: '100%' }}>
                  <Stepper activeStep={activeStep}>
                    {steps.map((label, index) => {
                      const stepProps = {};
                      const labelProps = {};
                      if (isStepOptional(index)) {
                        labelProps.optional = (
                          <Typography variant="caption">Optional</Typography>
                        );
                      }
                      if (isStepSkipped(index)) {
                        stepProps.completed = false;
                      }
                      return (
                        <Step key={label} {...stepProps}>
                          <StepLabel {...labelProps}>{label}</StepLabel>
                        </Step>
                      );
                    })}
                  </Stepper>
                  {activeStep === steps.length ? (
                    <React.Fragment>
                      <Typography sx={{ mt: 2, mb: 1 }}>
                        All the required information is completed - Now you can submit or reset as per your decision. 
                        </Typography>
                      <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Box sx={{ flex: '1 1 auto' }} />
                        <Button onClick={handleReset} variant="outlined">Reset</Button>
                        <Button onClick={handleClose} variant="outlined">Submit</Button>
                      </Box>
                    </React.Fragment>
                  ) : (
                      <React.Fragment>
                        <Typography sx={{ mt: 2, mb: 1 }}>
                          {activeStep === 0 ? <Typography>
                            <PersonalInformation />
                          </Typography> : ''}

                          {activeStep === 1 ? <Typography>
                            <LoanProcess />
                          </Typography> : ''}

                          {activeStep === 2 ? <Typography>
                            <LoanApply />
                          </Typography> : ''}

                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                          <Button color="inherit" variant="outlined" disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 1 }}>Back</Button>
                          <Box sx={{ flex: '1 1 auto' }} />
                          {isStepOptional(activeStep) && (
                            <Button color="inherit"variant="outlined" onClick={handleSkip} sx={{ mr: 1 }}>Skip</Button>
                          )}
                          <Button onClick={handleNext} variant="outlined">
                            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                          </Button>
                        </Box>
                      </React.Fragment>
                    )}
                </Box>
              </Card>
            </MainCard>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </MainCard>
  );
};

export default ApplicantList;
