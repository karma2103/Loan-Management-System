import React  from "react";
import MUIDataTable from "mui-datatables";
import { Box } from "@mui/system";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import { GridActionsCellItem } from "@mui/x-data-grid";
import MainCard from "ui-component/cards/MainCard";
import { makeStyles } from "@material-ui/core/styles";
import { Button,Dialog,DialogActions,DialogContent,DialogContentText,Grid,TextField,} from "@mui/material";

const options = {
  filter: false,
  download: true,
  print: true,
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
  const [open, setOpen] = React.useState({
    status: false,
    title: ''
  });

  const columns = [
    {
      name: "code",
      label: "Department Code",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "name",
      label: "Department Name",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "branch_name",
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
              <GridActionsCellItem icon={<EditIcon />} sx={{ fontSize: 28 }} onClick={()=>handleClickOpen('Edit Department')} />
              <GridActionsCellItem icon={<DeleteIcon />} sx={{ fontSize: 28 }} />
            </Box>
          );
        },
      },
    },
  ];

  const data = [
    { code:'PA',  name: "Insurance" , branch_name:"paro"},
    { code:'HA',  name: "IT" ,  branch_name:"haa"},
  ];

  const handleClickOpen = (title) => {
    setOpen({
      status:true,
      title: title,
     
    });
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  return (
    <MainCard
      title= 'Department List'
      secondary={
        <Button onClick={()=>handleClickOpen('Create Department')} sx={{ border: "1px solid" }}>
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
        open={open.status}
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
            <MainCard title={open.title}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12}>
                  <TextField
                    fullWidth
                    label="Department Code"
                    name="code"
                    type="text"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField
                    fullWidth
                    label="Department Name"
                    name="name"
                    type="text"
                    
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField
                    fullWidth
                    label="Branch Name"
                    name="branch_name"
                    type="text"
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
       {open.title === 'Edit Department'? 
          <Button
            onClick={handleClose}
            type="submit"
            variant="outlined"
            color="secondary"
          >
            Update
          </Button>
          : 
          <Button
          onClick={handleClose}
          type="submit"
          variant="outlined"
          color="secondary"
        >
          Submit
        </Button>
        } 
        </DialogActions>
      </Dialog>
    </MainCard>
  );
}
