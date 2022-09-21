import * as React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { DataGrid } from "@mui/x-data-grid";
import SecondaryAction from "ui-component/cards/CardSecondaryAction";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Grid, TextField, Button } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import { Formik } from "formik";
import { Card } from "@mui/material";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import AnimateButton from "ui-component/extended/AnimateButton";

import {
  randomCreatedDate,
  randomTraderName,
  randomEmail,
  randomUpdatedDate,
} from "@mui/x-data-grid-generator";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MainCard from "ui-component/cards/MainCard";
// import CloseIcon from "@mui/icons-material/Close";

export default function BasicColumnPinning() {
  const [hoveredRow, setHoveredRow] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState("paper");
  //for model
  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const onMouseEnterRow = (event) => {
    const id = Number(event.currentTarget.getAttribute("data-id"));
    setHoveredRow(id);
  };

  const onMouseLeaveRow = (event) => {
    setHoveredRow(null);
  };

  const columns = [
    { field: "name", headerName: "Name", width: 160, editable: true },
    { field: "email", headerName: "Email", width: 200, editable: true },
    { field: "age", headerName: "Age", type: "number", editable: true },
    {
      field: "dateCreated",
      headerName: "Date Created",
      type: "date",
      width: 180,
      editable: true,
    },
    {
      field: "lastLogin",
      headerName: "Last Login",
      type: "dateTime",
      width: 220,
      editable: true,
    },
    {
      field: "department",
      headerName: "Department",
      width: 120,
      editable: true,
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 120,
      sortable: false,
      disableColumnMenu: true,
      renderCell: (params) => {
        if (hoveredRow === params.id) {
          return (
            <Box
              sx={{
                // backgroundColor: "whitesmoke",
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <IconButton onClick={() => console.log(params.id)}>
                <EditIcon />
              </IconButton>
              <IconButton onClick={() => console.log(params.id)}>
                <DeleteIcon />
              </IconButton>
            </Box>
          );
        } else return null;
      },
    },
  ];

  return (
    <MainCard
      title="Users List"
      secondary={
        <Button onClick={handleClickOpen("body")}>
          <SecondaryAction
            icon={<AddCircleIcon fontSize="large" color="primary" />}
          />
        </Button>
      }
    >
      <DataGrid
        checkboxSelection
        rows={rows}
        columns={columns}
        autoPageSize={true}
        autoHeight={true}
        pageSize={5}
        initialState={{ pinnedColumns: { right: ["actions"] } }}
        componentsProps={{
          row: {
            onMouseEnter: onMouseEnterRow,
            onMouseLeave: onMouseLeaveRow,
          },
        }}
      />
      <Dialog
        open={open}
        // onClose={handleClose}
        scroll={scroll}
        sx={{
          "& .MuiDialog-container": {
            "& .MuiPaper-root": {
              width: "100%",
              maxWidth: "1000px", // Set your width here
            },
          },
        }}
      >
        <DialogContent>
          <DialogContentText>
            <Formik>
              <MainCard
                title={"Add User"}
                secondary={
                  <Button onClick={handleClickOpen("body")}/>
                  
                }
              >
                <Card>
                  <form noValidate>
                    <Grid container spacing={2}>
                      <Grid item xs={4} sm={6}>
                        <TextField
                          fullWidth
                          label="Full Name"
                          margin="normal"
                          name="CFAN"
                          type="text"
                        />
                      </Grid>
                      <Grid item xs={4} sm={6}>
                        <TextField
                          fullWidth
                          label="Email address"
                          margin="normal"
                          name="PCFAN"
                          type="text"
                        />
                      </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                      <Grid item xs={4} sm={6}>
                        <TextField
                          fullWidth
                          label="Department"
                          margin="normal"
                          name="CFAN"
                          type="text"
                        />
                      </Grid>
                      <Grid item xs={4} sm={6}>
                        <TextField
                          fullWidth
                          label="Designation"
                          margin="normal"
                          name="PCFAN"
                          type="text"
                        />
                      </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                      <Grid item xs={4} sm={6}>
                        <TextField
                          fullWidth
                          label="Password"
                          margin="normal"
                          name="CFAN"
                          type="text"
                        />
                      </Grid>
                      <Grid item xs={4} sm={6}>
                        <TextField
                          fullWidth
                          label="phone Number"
                          margin="normal"
                          name="PCFAN"
                          type="text"
                        />
                      </Grid>
                    </Grid>
                  </form>
                </Card>
              </MainCard>
            </Formik>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <AnimateButton spacing={2}>
            <Button onClick={handleClose} variant="contained" color="info" >
              Cancel
            </Button>
          </AnimateButton> 
          <AnimateButton spacing={2}>
            <Button
              // onClick={handleClose}
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
}

const rows = [
  {
    id: 1,
    name: randomTraderName(),
    email: randomEmail(),
    age: 25,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
    department: 'IT department',
  },
  {
    id: 2,
    name: randomTraderName(),
    email: randomEmail(),
    age: 36,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
    department: 'IT department',
  },
  {
    id: 3,
    name: randomTraderName(),
    email: randomEmail(),
    age: 19,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
    department: 'IT department',
  },
  {
    id: 4,
    name: randomTraderName(),
    email: randomEmail(),
    age: 28,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
    department: 'IT department',
  },
  {
    id: 5,
    name: randomTraderName(),
    email: randomEmail(),
    age: 23,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
    department: 'IT department',
  },
  {
    id: 6,
    name: randomTraderName(),
    email: randomEmail(),
    age: 27,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
    department: 'IT department',
  },
  {
    id: 7,
    name: randomTraderName(),
    email: randomEmail(),
    age: 18,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
    department: 'IT department',
  },
  {
    id: 8,
    name: randomTraderName(),
    email: randomEmail(),
    age: 31,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
    department: 'IT department',
  },
  {
    id: 9,
    name: randomTraderName(),
    email: randomEmail(),
    age: 24,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
    department: 'IT department',
  },
  {
    id: 10,
    name: randomTraderName(),
    email: randomEmail(),
    age: 35,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
    department: 'IT department',
  },
];
