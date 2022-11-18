import React from "react";
import MUIDataTable from "mui-datatables";
import { Box } from "@mui/system";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import { GridActionsCellItem } from "@mui/x-data-grid";
import MainCard from "ui-component/cards/MainCard";
import { makeStyles } from "@material-ui/core/styles";
import {Button,Dialog,DialogActions,DialogContent,DialogContentText,Grid,TextField,
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
    name: "name",
    label: "Permission Name",
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
  { id: 1, name: "USer-List" },
  { id: 2, name: "User-Create" },
  { id: 3, name: "User-delete" },
  { id: 4, name: "RoleList" },
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
      title="Permission Lists"
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
        <DialogContent sx={{ width: "500px" }}>
          <DialogContentText>
            <MainCard title="Create Permission">
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12}>
                  <TextField
                    fullWidth
                    label="Permission Name"
                    name="name"
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
