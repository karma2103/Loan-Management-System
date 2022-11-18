import React from "react";
import MUIDataTable from "mui-datatables";
import { Box } from "@mui/system";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import { GridActionsCellItem } from "@mui/x-data-grid";
import MainCard from "ui-component/cards/MainCard";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Grid,
  TextField,
} from "@mui/material";
const columns = [
  {
    name: "id",
    label: "SI No",
    options: {
      filter: false,
      sort: false,
    },
  },
  
  {
    name: "departmentCode",
    label: "Department Code",
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: "departmentName",
    label: "Department Name",
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: "branchName",
    label: "Branch Name",
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: "Action",
    options: {
      filter: false,
      sort: false,
      empty: true,
      customBodyRender: () => {
        return (
          <Box>
            <GridActionsCellItem icon={<EditIcon />} sx={{ fontSize: 28 }} />
            <GridActionsCellItem icon={<DeleteIcon />} sx={{ fontSize: 28 }} />
          </Box>
        );
      },
    },
  },
];

const data = [
  { id: 1,departmentCode:'IT',  departmentName: "IT Department",branchName:'Thimphu'},
  { id: 2,departmentCode:'INV',  departmentName: "Investment Department",branchName:'Paro' },
  
];

const options = {
  filter: false,
  download: false,
  print: false,
  viewColumns: false,
  selectableRows: false,
  fixedHeader :true
};
const useStyles = makeStyles({
  root: {
    background: "none",
    boxShadow: "none",
    textAlign: "center",
  },
});
export default function Department() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState("paper");

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <MainCard
      title="Department Lists"
      secondary={
        <Button onClick={handleClickOpen("body")} sx={{ border: "1px solid" }}>
          Create
        </Button>
      }
    >
      <MUIDataTable
        className={classes.root}
        data={data}
        columns={columns}
        options={options}
        elevation ={10}

      />
      <Dialog
        open={open}
        // onClose={handleClose}
        scroll={scroll}
        sx={{
          "& .MuiDialog-container": {
            "& .MuiPaper-root": {
              maxWidth: "100%",
            },
          },
        }}
      >
        <DialogContent>
          <DialogContentText>
            <MainCard title="Create Department">
              <Grid container spacing={2}>
                <Grid item xs={12} sm={4}>
                  <TextField
                    fullWidth
                    label="Department Code"
                    name="code"
                    type="text"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    fullWidth
                    label="Department Name"
                    name="name"
                    type="text"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    fullWidth
                    label="Branch Name"
                    name="id"
                    type="text"
                    autoFocus
                  />
                </Grid>
              </Grid>
            </MainCard>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="outlined" color="info">
            Cancel
          </Button>

          <Button
            onClick={handleClose}
            type="submit"
            variant="outlined"
            color="secondary"
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </MainCard>
  );
}
