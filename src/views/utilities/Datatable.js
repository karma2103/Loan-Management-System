import React from "react";
import "bootstrap-css-only/css/bootstrap.min.css";
import { MDBDataTable } from "mdbreact";
import MainCard from "ui-component/cards/MainCard";
import SecondaryAction from "ui-component/cards/CardSecondaryAction";
import { Grid, TextField, FormHelperText, Button } from "@mui/material";
import AnimateButton from "ui-component/extended/AnimateButton";
import * as Yup from "yup";
import { Formik } from "formik";
import { Card } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// assets
import AddCircleIcon from "@mui/icons-material/AddCircle";
// import CloseIcon from "@mui/icons-material/Close";
// import { GridCloseIcon } from "@mui/x-data-grid";

const Datatable = () => {
  const data = {
    columns: [
      {
        label: "Name",
        field: "name",
        sort: "asc",
        width: 150,
      },
      {
        label: "Position",
        field: "position",
        sort: "asc",
        width: 270,
      },
      {
        label: "Office",
        field: "office",
        sort: "asc",
        width: 200,
      },
      {
        label: "Age",
        field: "age",
        sort: "asc",
        width: 100,
      },
      {
        label: "Start date",
        field: "date",
        sort: "asc",
        width: 150,
      },
      {
        label: "Salary",
        field: "salary",
        sort: "asc",
        width: 100,
      },
    ],
    rows: [
      {
        name: "Tiger Nixon",
        position: "System Architect",
        office: "Edinburgh",
        age: "61",
        date: "2011/04/25",
        salary: "$320",
      },
      {
        name: "Garrett Winters",
        position: "Accountant",
        office: "Tokyo",
        age: "63",
        date: "2011/07/25",
        salary: "$170",
      },
      {
        name: "Ashton Cox",
        position: "Junior Technical Author",
        office: "San Francisco",
        age: "66",
        date: "2009/01/12",
        salary: "$86",
      },
      {
        name: "Cedric Kelly",
        position: "Senior Javascript Developer",
        office: "Edinburgh",
        age: "22",
        date: "2012/03/29",
        salary: "$433",
      },
      {
        name: "Airi Satou",
        position: "Accountant",
        office: "Tokyo",
        age: "33",
        date: "2008/11/28",
        salary: "$162",
      },
      {
        name: "Brielle Williamson",
        position: "Integration Specialist",
        office: "New York",
        age: "61",
        date: "2012/12/02",
        salary: "$372",
      },
      {
        name: "Herrod Chandler",
        position: "Sales Assistant",
        office: "San Francisco",
        age: "59",
        date: "2012/08/06",
        salary: "$137",
      },
      {
        name: "Rhona Davidson",
        position: "Integration Specialist",
        office: "Tokyo",
        age: "55",
        date: "2010/10/14",
        salary: "$327",
      },
      {
        name: "Colleen Hurst",
        position: "Javascript Developer",
        office: "San Francisco",
        age: "39",
        date: "2009/09/15",
        salary: "$205",
      },
      {
        name: "Sonya Frost",
        position: "Software Engineer",
        office: "Edinburgh",
        age: "23",
        date: "2008/12/13",
        salary: "$103",
      },
      {
        name: "Jena Gaines",
        position: "Office Manager",
        office: "London",
        age: "30",
        date: "2008/12/19",
        salary: "$90",
      },
      {
        name: "Quinn Flynn",
        position: "Support Lead",
        office: "Edinburgh",
        age: "22",
        date: "2013/03/03",
        salary: "$342",
      },
      {
        name: "Charde Marshall",
        position: "Regional Director",
        office: "San Francisco",
        age: "36",
        date: "2008/10/16",
        salary: "$470",
      },
      {
        name: "Haley Kennedy",
        position: "Senior Marketing Designer",
        office: "London",
        age: "43",
        date: "2012/12/18",
        salary: "$313",
      },
      {
        name: "Tatyana Fitzpatrick",
        position: "Regional Director",
        office: "London",
        age: "19",
        date: "2010/03/17",
        salary: "$385",
      },
      {
        name: "Michael Silva",
        position: "Marketing Designer",
        office: "London",
        age: "66",
        date: "2012/11/27",
        salary: "$198",
      },
      {
        name: "Paul Byrd",
        position: "Chief Financial Officer (CFO)",
        office: "New York",
        age: "64",
        date: "2010/06/09",
        salary: "$725",
      },
      {
        name: "Gloria Little",
        position: "Systems Administrator",
        office: "New York",
        age: "59",
        date: "2009/04/10",
        salary: "$237",
      },
      {
        name: "Bradley Greer",
        position: "Software Engineer",
        office: "London",
        age: "41",
        date: "2012/10/13",
        salary: "$132",
      },
      {
        name: "Dai Rios",
        position: "Personnel Lead",
        office: "Edinburgh",
        age: "35",
        date: "2012/09/26",
        salary: "$217",
      },
      {
        name: "Jenette Caldwell",
        position: "Development Lead",
        office: "New York",
        age: "30",
        date: "2011/09/03",
        salary: "$345",
      },
      {
        name: "Yuri Berry",
        position: "Chief Marketing Officer (CMO)",
        office: "New York",
        age: "40",
        date: "2009/06/25",
        salary: "$675",
      },
      {
        name: "Caesar Vance",
        position: "Pre-Sales Support",
        office: "New York",
        age: "21",
        date: "2011/12/12",
        salary: "$106",
      },
      {
        name: "Doris Wilder",
        position: "Sales Assistant",
        office: "Sidney",
        age: "23",
        date: "2010/09/20",
        salary: "$85",
      },
      {
        name: "Angelica Ramos",
        position: "Chief Executive Officer (CEO)",
        office: "London",
        age: "47",
        date: "2009/10/09",
        salary: "$1",
      },
      {
        name: "Gavin Joyce",
        position: "Developer",
        office: "Edinburgh",
        age: "42",
        date: "2010/12/22",
        salary: "$92",
      },
      {
        name: "Jennifer Chang",
        position: "Regional Director",
        office: "Singapore",
        age: "28",
        date: "2010/11/14",
        salary: "$357",
      },
      {
        name: "Brenden Wagner",
        position: "Software Engineer",
        office: "San Francisco",
        age: "28",
        date: "2011/06/07",
        salary: "$206",
      },
      {
        name: "Fiona Green",
        position: "Chief Operating Officer (COO)",
        office: "San Francisco",
        age: "48",
        date: "2010/03/11",
        salary: "$850",
      },
      {
        name: "Shou Itou",
        position: "Regional Marketing",
        office: "Tokyo",
        age: "20",
        date: "2011/08/14",
        salary: "$163",
      },
      {
        name: "Michelle House",
        position: "Integration Specialist",
        office: "Sidney",
        age: "37",
        date: "2011/06/02",
        salary: "$95",
      },
      {
        name: "Suki Burks",
        position: "Developer",
        office: "London",
        age: "53",
        date: "2009/10/22",
        salary: "$114",
      },
      {
        name: "Prescott Bartlett",
        position: "Technical Author",
        office: "London",
        age: "27",
        date: "2011/05/07",
        salary: "$145",
      },
      {
        name: "Gavin Cortez",
        position: "Team Leader",
        office: "San Francisco",
        age: "22",
        date: "2008/10/26",
        salary: "$235",
      },
      {
        name: "Martena Mccray",
        position: "Post-Sales support",
        office: "Edinburgh",
        age: "46",
        date: "2011/03/09",
        salary: "$324",
      },
      {
        name: "Unity Butler",
        position: "Marketing Designer",
        office: "San Francisco",
        age: "47",
        date: "2009/12/09",
        salary: "$85",
      },
      {
        name: "Howard Hatfield",
        position: "Office Manager",
        office: "San Francisco",
        age: "51",
        date: "2008/12/16",
        salary: "$164",
      },
      {
        name: "Hope Fuentes",
        position: "Secretary",
        office: "San Francisco",
        age: "41",
        date: "2010/02/12",
        salary: "$109",
      },
      {
        name: "Vivian Harrell",
        position: "Financial Controller",
        office: "San Francisco",
        age: "62",
        date: "2009/02/14",
        salary: "$452",
      },
      {
        name: "Timothy Mooney",
        position: "Office Manager",
        office: "London",
        age: "37",
        date: "2008/12/11",
        salary: "$136",
      },
      {
        name: "Jackson Bradshaw",
        position: "Director",
        office: "New York",
        age: "65",
        date: "2008/09/26",
        salary: "$645",
      },
      {
        name: "Olivia Liang",
        position: "Support Engineer",
        office: "Singapore",
        age: "64",
        date: "2011/02/03",
        salary: "$234",
      },
      {
        name: "Bruno Nash",
        position: "Software Engineer",
        office: "London",
        age: "38",
        date: "2011/05/03",
        salary: "$163",
      },
      {
        name: "Sakura Yamamoto",
        position: "Support Engineer",
        office: "Tokyo",
        age: "37",
        date: "2009/08/19",
        salary: "$139",
      },
      {
        name: "Thor Walton",
        position: "Developer",
        office: "New York",
        age: "61",
        date: "2013/08/11",
        salary: "$98",
      },
      {
        name: "Finn Camacho",
        position: "Support Engineer",
        office: "San Francisco",
        age: "47",
        date: "2009/07/07",
        salary: "$87",
      },
      {
        name: "Serge Baldwin",
        position: "Data Coordinator",
        office: "Singapore",
        age: "64",
        date: "2012/04/09",
        salary: "$138",
      },
      {
        name: "Zenaida Frank",
        position: "Software Engineer",
        office: "New York",
        age: "63",
        date: "2010/01/04",
        salary: "$125",
      },
      {
        name: "Zorita Serrano",
        position: "Software Engineer",
        office: "San Francisco",
        age: "56",
        date: "2012/06/01",
        salary: "$115",
      },
      {
        name: "Jennifer Acosta",
        position: "Junior Javascript Developer",
        office: "Edinburgh",
        age: "43",
        date: "2013/02/01",
        salary: "$75",
      },
      {
        name: "Cara Stevens",
        position: "Sales Assistant",
        office: "New York",
        age: "46",
        date: "2011/12/06",
        salary: "$145",
      },
      {
        name: "Hermione Butler",
        position: "Regional Director",
        office: "London",
        age: "47",
        date: "2011/03/21",
        salary: "$356",
      },
      {
        name: "Lael Greer",
        position: "Systems Administrator",
        office: "London",
        age: "21",
        date: "2009/02/27",
        salary: "$103",
      },
      {
        name: "Jonas Alexander",
        position: "Developer",
        office: "San Francisco",
        age: "30",
        date: "2010/07/14",
        salary: "$86",
      },
      {
        name: "Shad Decker",
        position: "Regional Director",
        office: "Edinburgh",
        age: "51",
        date: "2008/11/13",
        salary: "$183",
      },
      {
        name: "Michael Bruce",
        position: "Javascript Developer",
        office: "Singapore",
        age: "29",
        date: "2011/06/27",
        salary: "$183",
      },
      {
        name: "Donna Snider",
        position: "Customer Support",
        office: "New York",
        age: "27",
        date: "2011/01/25",
        salary: "$112",
      },
    ],
  };
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState("paper");

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [value, setValue] = React.useState(null);

  const onChangeHandler = (e) => {};

  return (
    <MainCard
      title="Loan Application Details"
      secondary={
        <Button onClick={handleClickOpen("body")}>
          <SecondaryAction
            icon={<AddCircleIcon fontSize="large" color="primary" />}
          />
        </Button>
      }
    >
      <MDBDataTable hover data={data} />
      <Dialog
        open={open}
        // onClose={handleClose}
        scroll={scroll}
        sx={{
          "& .MuiDialog-container": {
            "& .MuiPaper-root": {
              width: "100%",
              maxWidth: "1450px", // Set your width here
            },
          },
        }}
      >
        <DialogContent>
          <DialogContentText>
            <Formik
              initialValues={{
                name: "",
                grade: "",
                nationlity: "",
                mobile: "",
                phone: "",
                cid: "",
                address: "",
                accNo: "",
                branch: "",
                reason: "",
              }}
              validationSchema={Yup.object().shape({
                name: Yup.string().required("Namee is required"),
                grade: Yup.string().required("Grade is required"),
                nation: Yup.string().required("Nationality is required"),
                mobile: Yup.string().required("Mobile No is required"),
                cid: Yup.number().required("CID is required"),
                address: Yup.string().required("Address is required"),
                accno: Yup.number().required("Account No. is required"),
                branch: Yup.string().required("Branch is required"),
                reason: Yup.string().required("Required"),
              })}
            >
              {({
                errors,
                handleBlur,
                handleSubmit,
                handleChange,
                touched,
              }) => (
                <MainCard title="Loan Application Form">
                  <Card>
                    <form noValidate onSubmit={handleSubmit}>
                      <Grid container spacing={2}>
                        <Grid item xs={6} sm={3}>
                          <TextField
                            fullWidth
                            label="Credit Facility Account No"
                            margin="normal"
                            name="CFAN"
                            type="text"
                            onBlur={handleBlur}
                            onChange={(e) => {
                              handleChange(e);
                              onChangeHandler(e);
                            }}
                          />
                          {touched.name && errors.name && (
                            <FormHelperText
                              error
                              id="standard-weight-helper-text--register"
                            >
                              {errors.name}
                            </FormHelperText>
                          )}
                        </Grid>
                        <Grid item xs={6} sm={3}>
                          <TextField
                            fullWidth
                            label="Previous Credit Facility Account No"
                            margin="normal"
                            name="PCFAN"
                            type="text"
                            onBlur={handleBlur}
                            onChange={(e) => {
                              handleChange(e);
                              onChangeHandler(e);
                            }}
                          />
                          {touched.grade && errors.grade && (
                            <FormHelperText
                              error
                              id="standard-weight-helper-text--register"
                            >
                              {errors.grade}
                            </FormHelperText>
                          )}
                        </Grid>
                        <Grid item xs={6} sm={3}>
                          <TextField
                            fullWidth
                            label="Date Of Credit Facility Approval"
                            margin="normal"
                            name="DCFA"
                            type="text"
                            onBlur={handleBlur}
                            onChange={(e) => {
                              handleChange(e);
                              onChangeHandler(e);
                            }}
                          />
                          {touched.nation && errors.nation && (
                            <FormHelperText
                              error
                              id="standard-weight-helper-text--register"
                            >
                              {errors.nation}
                            </FormHelperText>
                          )}
                        </Grid>
                        <Grid item xs={6} sm={3}>
                          <TextField
                            fullWidth
                            label="Interest Rate"
                            margin="normal"
                            name="IR"
                            type="number"
                            onBlur={handleBlur}
                            onChange={(e) => {
                              handleChange(e);
                              onChangeHandler(e);
                            }}
                          />
                          {touched.mobile && errors.mobile && (
                            <FormHelperText
                              error
                              id="standard-weight-helper-text--register"
                            >
                              {errors.mobile}
                            </FormHelperText>
                          )}
                        </Grid>
                      </Grid>
                      <Grid container spacing={2}>
                        <Grid item xs={6} sm={3}>
                          <TextField
                            fullWidth
                            label="Sanctional Amount/limit"
                            margin="normal"
                            name="phone"
                            onBlur={handleBlur}
                            onChange={(e) => {
                              handleChange(e);
                              onChangeHandler(e);
                            }}
                          />
                          {touched.phone && errors.phone && (
                            <FormHelperText
                              error
                              id="standard-weight-helper-text--register"
                            >
                              {errors.phone}
                            </FormHelperText>
                          )}
                        </Grid>
                        <Grid item xs={6} sm={3}>
                          <TextField
                            fullWidth
                            label="First Disbursement Date"
                            margin="normal"
                            name="FD"
                            type="text"
                            onBlur={handleBlur}
                            onChange={(e) => {
                              handleChange(e);
                              onChangeHandler(e);
                            }}
                          />
                          {touched.cid && errors.cid && (
                            <FormHelperText
                              error
                              id="standard-weight-helper-text--register"
                            >
                              {errors.cid}
                            </FormHelperText>
                          )}
                        </Grid>
                        <Grid item xs={6} sm={3}>
                          <TextField
                            fullWidth
                            label="Higest Credit"
                            margin="normal"
                            name="HC"
                            type="text"
                            onBlur={handleBlur}
                            onChange={(e) => {
                              handleChange(e);
                              onChangeHandler(e);
                            }}
                          />
                          {touched.address && errors.address && (
                            <FormHelperText
                              error
                              id="standard-weight-helper-text--register"
                            >
                              {errors.address}
                            </FormHelperText>
                          )}
                        </Grid>

                        <Grid item xs={6} sm={3}>
                          <TextField
                            fullWidth
                            label="Currency"
                            margin="normal"
                            name="currency"
                            type="text"
                            onBlur={handleBlur}
                            onChange={(e) => {
                              handleChange(e);
                              onChangeHandler(e);
                            }}
                          />
                        </Grid>
                      </Grid>
                      <Grid container spacing={2}>
                        <Grid item xs={6} sm={3}>
                          <TextField
                            fullWidth
                            label="Ownership Indicator"
                            margin="normal"
                            name="ownership"
                            type="text"
                            onBlur={handleBlur}
                            onChange={(e) => {
                              handleChange(e);
                              onChangeHandler(e);
                            }}
                          />
                          {touched.branch && errors.branch && (
                            <FormHelperText
                              error
                              id="standard-weight-helper-text--register"
                            >
                              {errors.branch}
                            </FormHelperText>
                          )}
                        </Grid>
                        <Grid item xs={6} sm={3}>
                          <TextField
                            fullWidth
                            label="Credit Facility Type"
                            margin="normal"
                            name="CFT"
                            type="text"
                            onBlur={handleBlur}
                            onChange={(e) => {
                              handleChange(e);
                              onChangeHandler(e);
                            }}
                          />
                          {touched.address && errors.address && (
                            <FormHelperText
                              error
                              id="standard-weight-helper-text--register"
                            >
                              {errors.address}
                            </FormHelperText>
                          )}
                        </Grid>

                        <Grid item xs={6} sm={3}>
                          <TextField
                            fullWidth
                            label="Purpose of Credit Facility"
                            margin="normal"
                            multiline
                            rows={2}
                            maxRows={4}
                            name="PCF"
                            type="text"
                            onBlur={handleBlur}
                            onChange={(e) => {
                              handleChange(e);
                              onChangeHandler(e);
                            }}
                          />
                        </Grid>
                        <Grid item xs={6} sm={3}>
                          <TextField
                            fullWidth
                            label="Credit Facility Description"
                            margin="normal"
                            name="CFD"
                            multiline
                            rows={2}
                            maxRows={5}
                            type="text"
                            onBlur={handleBlur}
                            onChange={(e) => {
                              handleChange(e);
                              onChangeHandler(e);
                            }}
                          />
                          {touched.branch && errors.branch && (
                            <FormHelperText
                              error
                              id="standard-weight-helper-text--register"
                            >
                              {errors.branch}
                            </FormHelperText>
                          )}
                        </Grid>
                      </Grid>
                      <Grid container spacing={2}>
                        <Grid item xs={6} sm={3}>
                          <TextField
                            fullWidth
                            label="Number of Installment"
                            margin="normal"
                            name="NI"
                            type="text"
                            onBlur={handleBlur}
                            onChange={(e) => {
                              handleChange(e);
                              onChangeHandler(e);
                            }}
                          />
                          {touched.address && errors.address && (
                            <FormHelperText
                              error
                              id="standard-weight-helper-text--register"
                            >
                              {errors.address}
                            </FormHelperText>
                          )}
                        </Grid>

                        <Grid item xs={6} sm={3}>
                          <TextField
                            fullWidth
                            label="Repayment Type"
                            margin="normal"
                            name="RT"
                            type="text"
                            onBlur={handleBlur}
                            onChange={(e) => {
                              handleChange(e);
                              onChangeHandler(e);
                            }}
                          />
                        </Grid>
                        <Grid item xs={6} sm={3}>
                          <TextField
                            fullWidth
                            label="Repayment Source 1"
                            margin="normal"
                            name="RS1"
                            type="text"
                            onBlur={handleBlur}
                            onChange={(e) => {
                              handleChange(e);
                              onChangeHandler(e);
                            }}
                          />
                          {touched.branch && errors.branch && (
                            <FormHelperText
                              error
                              id="standard-weight-helper-text--register"
                            >
                              {errors.branch}
                            </FormHelperText>
                          )}
                        </Grid>
                        <Grid item xs={6} sm={3}>
                          <TextField
                            fullWidth
                            label="Repayment Source 2"
                            margin="normal"
                            name="RS2"
                            type="text"
                            onBlur={handleBlur}
                            onChange={(e) => {
                              handleChange(e);
                              onChangeHandler(e);
                            }}
                          />
                        </Grid>
                      </Grid>
                      <Grid container spacing={2}>
                        <Grid item xs={6} sm={3}>
                          <TextField
                            fullWidth
                            label="Repayment Source 3"
                            margin="normal"
                            name="RS3"
                            type="text"
                            onBlur={handleBlur}
                            onChange={(e) => {
                              handleChange(e);
                              onChangeHandler(e);
                            }}
                          />
                        </Grid>
                        <Grid item xs={6} sm={3}>
                          <TextField
                            fullWidth
                            label="Ballon Payment Amount "
                            margin="normal"
                            name="BPA"
                            type="text"
                            onBlur={handleBlur}
                            onChange={(e) => {
                              handleChange(e);
                              onChangeHandler(e);
                            }}
                          />

                          {touched.branch && errors.branch && (
                            <FormHelperText
                              error
                              id="standard-weight-helper-text--register"
                            >
                              {errors.branch}
                            </FormHelperText>
                          )}
                        </Grid>
                        <Grid item xs={6} sm={3}>
                          <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DatePicker
                              label="Balloon Payment Date"
                              value={value}
                              margin="normal"
                              onChange={(newValue) => {
                                setValue(newValue);
                              }}
                              renderInput={(params) => (
                                <TextField
                                  {...params}
                                  fullWidth
                                  margin="normal"
                                />
                              )}
                            />
                          </LocalizationProvider>

                          {touched.address && errors.address && (
                            <FormHelperText
                              error
                              id="standard-weight-helper-text--register"
                            >
                              {errors.address}
                            </FormHelperText>
                          )}
                        </Grid>
                        <Grid item xs={6} sm={3}>
                          <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DatePicker
                              fullWidth
                              label="Credit Facility Contract Expiry Date"
                              value={value}
                              name="CFCED"
                              onChange={(newValue) => {
                                setValue(newValue);
                              }}
                              renderInput={(params) => (
                                <TextField
                                  {...params}
                                  fullWidth
                                  margin="normal"
                                />
                              )}
                            />
                          </LocalizationProvider>
                        </Grid>
                      </Grid>
                      <Grid container spacing={2}>
                        <Grid item xs={6} sm={3}>
                          <TextField
                            fullWidth
                            label="Total Outstanding/Contigent Liability Amount"
                            margin="normal"
                            name="TO"
                            type="text"
                            onBlur={handleBlur}
                            onChange={(e) => {
                              handleChange(e);
                              onChangeHandler(e);
                            }}
                          />
                          {touched.branch && errors.branch && (
                            <FormHelperText
                              error
                              id="standard-weight-helper-text--register"
                            >
                              {errors.branch}
                            </FormHelperText>
                          )}
                        </Grid>
                        <Grid item xs={6} sm={3}>
                          <TextField
                            fullWidth
                            label="Outstanding Interest Rate"
                            margin="normal"
                            name="OIR"
                            type="text"
                            onBlur={handleBlur}
                            onChange={(e) => {
                              handleChange(e);
                              onChangeHandler(e);
                            }}
                          />
                          {touched.address && errors.address && (
                            <FormHelperText
                              error
                              id="standard-weight-helper-text--register"
                            >
                              {errors.address}
                            </FormHelperText>
                          )}
                        </Grid>
                        <Grid item xs={6} sm={3}>
                          <TextField
                            fullWidth
                            label="Number of Days Over Due"
                            margin="normal"
                            name="ndod"
                            type="text"
                            onBlur={handleBlur}
                            onChange={(e) => {
                              handleChange(e);
                              onChangeHandler(e);
                            }}
                          />
                        </Grid>
                        <Grid item xs={6} sm={3}>
                          <TextField
                            fullWidth
                            label="Amount In Arrears"
                            margin="normal"
                            name="AIA"
                            type="text"
                            onBlur={handleBlur}
                            onChange={(e) => {
                              handleChange(e);
                              onChangeHandler(e);
                            }}
                          />
                          {touched.branch && errors.branch && (
                            <FormHelperText
                              error
                              id="standard-weight-helper-text--register"
                            >
                              {errors.branch}
                            </FormHelperText>
                          )}
                        </Grid>
                      </Grid>
                      <Grid container spacing={2}>
                        <Grid item xs={6} sm={3}>
                          <TextField
                            fullWidth
                            label="Number of Payments/Installment Overdue"
                            margin="normal"
                            name="NoP"
                            type="text"
                            onBlur={handleBlur}
                            onChange={(e) => {
                              handleChange(e);
                              onChangeHandler(e);
                            }}
                          />
                          {touched.address && errors.address && (
                            <FormHelperText
                              error
                              id="standard-weight-helper-text--register"
                            >
                              {errors.address}
                            </FormHelperText>
                          )}
                        </Grid>

                        <Grid item xs={6} sm={3}>
                          <TextField
                            fullWidth
                            label="Assets Classification(AC)"
                            margin="normal"
                            name="AC"
                            type="text"
                            onBlur={handleBlur}
                            onChange={(e) => {
                              handleChange(e);
                              onChangeHandler(e);
                            }}
                          />
                        </Grid>
                        <Grid item xs={6} sm={3}>
                          <TextField
                            fullWidth
                            label="Credit Facility Categorization"
                            margin="normal"
                            name="ownership"
                            type="text"
                            onBlur={handleBlur}
                            onChange={(e) => {
                              handleChange(e);
                              onChangeHandler(e);
                            }}
                          />
                          {touched.branch && errors.branch && (
                            <FormHelperText
                              error
                              id="standard-weight-helper-text--register"
                            >
                              {errors.branch}
                            </FormHelperText>
                          )}
                        </Grid>
                        <Grid item xs={6} sm={3}>
                          <TextField
                            fullWidth
                            label="Credit Facility Status"
                            margin="normal"
                            name="CFS"
                            type="text"
                            onBlur={handleBlur}
                            onChange={(e) => {
                              handleChange(e);
                              onChangeHandler(e);
                            }}
                          />
                          {touched.address && errors.address && (
                            <FormHelperText
                              error
                              id="standard-weight-helper-text--register"
                            >
                              {errors.address}
                            </FormHelperText>
                          )}
                        </Grid>
                      </Grid>
                      <Grid container spacing={2}>
                        <Grid item xs={6} sm={3}>
                          <TextField
                            fullWidth
                            label="Credit Facility Restructing/Rescheduled/Renewed/Enhanced Date"
                            margin="normal"
                            name="HC"
                            type="text"
                            onBlur={handleBlur}
                            onChange={(e) => {
                              handleChange(e);
                              onChangeHandler(e);
                            }}
                          />
                          {touched.address && errors.address && (
                            <FormHelperText
                              error
                              id="standard-weight-helper-text--register"
                            >
                              {errors.address}
                            </FormHelperText>
                          )}
                        </Grid>

                        <Grid item xs={6} sm={3}>
                          <TextField
                            fullWidth
                            label="Amount Written Off"
                            margin="normal"
                            name="AWO"
                            type="text"
                            onBlur={handleBlur}
                            onChange={(e) => {
                              handleChange(e);
                              onChangeHandler(e);
                            }}
                          />
                        </Grid>
                        <Grid item xs={6} sm={3}>
                          <TextField
                            fullWidth
                            label="Reason For Amount Written off"
                            margin="normal"
                            name="ownership"
                            type="text"
                            onBlur={handleBlur}
                            onChange={(e) => {
                              handleChange(e);
                              onChangeHandler(e);
                            }}
                          />
                          {touched.branch && errors.branch && (
                            <FormHelperText
                              error
                              id="standard-weight-helper-text--register"
                            >
                              {errors.branch}
                            </FormHelperText>
                          )}
                        </Grid>
                        <Grid item xs={6} sm={3}>
                          <TextField
                            fullWidth
                            label="Credit Facility Closing Date"
                            margin="normal"
                            name="HC"
                            type="text"
                            onBlur={handleBlur}
                            onChange={(e) => {
                              handleChange(e);
                              onChangeHandler(e);
                            }}
                          />
                          {touched.address && errors.address && (
                            <FormHelperText
                              error
                              id="standard-weight-helper-text--register"
                            >
                              {errors.address}
                            </FormHelperText>
                          )}
                        </Grid>
                      </Grid>
                      <Grid container spacing={2}>
                        <Grid item xs={6} sm={3}>
                          <TextField
                            fullWidth
                            label="Reason For Closure"
                            margin="normal"
                            name="currency"
                            type="text"
                            onBlur={handleBlur}
                            onChange={(e) => {
                              handleChange(e);
                              onChangeHandler(e);
                            }}
                          />
                        </Grid>
                        <Grid item xs={6} sm={3}>
                          <TextField
                            fullWidth
                            label="Legal Action Status"
                            margin="normal"
                            name="ownership"
                            type="text"
                            onBlur={handleBlur}
                            onChange={(e) => {
                              handleChange(e);
                              onChangeHandler(e);
                            }}
                          />
                          {touched.branch && errors.branch && (
                            <FormHelperText
                              error
                              id="standard-weight-helper-text--register"
                            >
                              {errors.branch}
                            </FormHelperText>
                          )}
                        </Grid>
                        <Grid item xs={6} sm={3}>
                          <TextField
                            fullWidth
                            label="Suit Reference Number"
                            margin="normal"
                            name="HC"
                            type="text"
                            onBlur={handleBlur}
                            onChange={(e) => {
                              handleChange(e);
                              onChangeHandler(e);
                            }}
                          />
                          {touched.address && errors.address && (
                            <FormHelperText
                              error
                              id="standard-weight-helper-text--register"
                            >
                              {errors.address}
                            </FormHelperText>
                          )}
                        </Grid>

                        <Grid item xs={6} sm={3}>
                          <TextField
                            fullWidth
                            label="Suit Amount"
                            margin="normal"
                            name="currency"
                            type="text"
                            onBlur={handleBlur}
                            onChange={(e) => {
                              handleChange(e);
                              onChangeHandler(e);
                            }}
                          />
                        </Grid>
                      </Grid>
                      <Grid container spacing={2}>
                        <Grid item xs={6} sm={4}>
                          <TextField
                            fullWidth
                            label="Type of Court"
                            margin="normal"
                            name="ownership"
                            type="text"
                            onBlur={handleBlur}
                            onChange={(e) => {
                              handleChange(e);
                              onChangeHandler(e);
                            }}
                          />
                          {touched.branch && errors.branch && (
                            <FormHelperText
                              error
                              id="standard-weight-helper-text--register"
                            >
                              {errors.branch}
                            </FormHelperText>
                          )}
                        </Grid>
                        <Grid item xs={6} sm={4}>
                          <TextField
                            fullWidth
                            label="Date Latest Payment Received"
                            margin="normal"
                            name="currency"
                            type="text"
                            onBlur={handleBlur}
                            onChange={(e) => {
                              handleChange(e);
                              onChangeHandler(e);
                            }}
                          />
                        </Grid>
                        <Grid item xs={6} sm={4}>
                          <TextField
                            fullWidth
                            label="Minumum Payment Due"
                            margin="normal"
                            name="MPD"
                            type="text"
                            onBlur={handleBlur}
                            onChange={(e) => {
                              handleChange(e);
                              onChangeHandler(e);
                            }}
                          />
                          {touched.branch && errors.branch && (
                            <FormHelperText
                              error
                              id="standard-weight-helper-text--register"
                            >
                              {errors.branch}
                            </FormHelperText>
                          )}
                        </Grid>
                      </Grid>
                    </form>
                  </Card>
                </MainCard>
              )}
            </Formik>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <AnimateButton spacing={2}>
            <Button onClick={handleClose} variant="contained" color="info">
              Cancel
            </Button>
          </AnimateButton>
          <AnimateButton spacing={2}>
            <Button
              onClick={handleClose}
              type="submit"
              variant="contained"
              color="secondary"
            >
              Submit
            </Button>
          </AnimateButton>
        </DialogActions>
      </Dialog>
    </MainCard>
  );
};

export default Datatable;
