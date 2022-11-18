import React from "react";
import MUIDataTable from "mui-datatables";
import { Box } from "@mui/system";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import { GridActionsCellItem } from "@mui/x-data-grid";
import MainCard from "ui-component/cards/MainCard";
import { makeStyles } from "@material-ui/core/styles";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import {
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  FormControlLabel,
  Grid,
} from "@mui/material";
const columns = [
  {
    name: "si",
    label: "SI No",
    
  },
  {
    name: "name",
    label: "Name",
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
      customBodyRender: (value, tableMeta, updateValue) => {
        return (
          <Box>
            <GridActionsCellItem icon={<EditIcon />} />
            <GridActionsCellItem icon={<DeleteIcon />} />
          </Box>
        );
      },
    },
  },
];

const data = [
  {si: 1,name: "Admin"},
  {si:2, name: "Casher" },
  {si:3, name: "IT Department" },
  {si:4, name: "Investment" },
];
// const AddButton = () => (
//   // <Tooltip disableFocusListener title="Add User">
//   //   <IconButton>
//   //     <PersonAdd />
//   //   </IconButton>
//   // </Tooltip>
// );
const options = {
  filter: true,
  download: true,
  print: true,
  viewColumns: true,
  // customToolbar: AddButton
  filterType: "dropdown",
  selectableRows: false,
  responsive: "scroll",
};
const useStyles = makeStyles({
  root: {
    background: "none",
    boxShadow: "none",
    marginTop: "-35px",
  },
});
export default function DataTable() {
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
      title="Role List"
      secondary={
        <Button onClick={handleClickOpen("body")} sx={{ border: "1px solid" }}>
          Create
        </Button>
      }
    >
      <MuiThemeProvider theme={myTheme}>
        <MUIDataTable
          className={classes.root}
          data={data}
          columns={columns}
          options={options}
        />
      </MuiThemeProvider>
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
        <DialogContent sx={{ width: "700px" }}>
          <DialogContentText>
            <MainCard title="Create">
              <Grid container spacing={2}>
                <Grid item xs={6} sm={3}>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Admin"
                    sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
                  />
                </Grid>
                <Grid item xs={6} sm={3}>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Admin"
                    sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
                  />
                </Grid>
                <Grid item xs={6} sm={3}>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Admin"
                    sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
                  />
                </Grid>
                <Grid item xs={6} sm={3}>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Admin"
                    sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
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

const myTheme = createMuiTheme({
  overrides: {
    MUIDataTable: {
      responsiveScroll: {
        maxHeight: "580px",
        overflowX: "scroll",
      },
    },
  },
});
