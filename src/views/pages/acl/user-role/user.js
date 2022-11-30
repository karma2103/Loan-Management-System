import React from "react";
import MUIDataTable from "mui-datatables";
import { Box } from "@mui/system";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import { GridActionsCellItem } from "@mui/x-data-grid";
import MainCard from "ui-component/cards/MainCard";
import { makeStyles } from "@material-ui/core/styles";
import { Button, CardContent, CardHeader, Checkbox, Dialog, DialogActions, DialogContent, DialogContentText, Divider, FormControlLabel, Grid, TextField } from "@mui/material";

const options = {
  filter: true,
  download: true,
  print: true,
  viewColumns: true,
};
const useStyles = makeStyles({
  root: {
    background: "none",
    boxShadow: "none",
    textAlign: "center",
  },
  
});
export default function User() {
  const classes = useStyles();
  const [open, setOpen] = React.useState({
    status: false,
    title: ''
  });


const columns = [
  {
    name: "name",
    label: "Name",
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: "department",
    label: "Department",
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: "branch",
    label: "Branch Name",
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: "designation",
    label: "Designation",
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: "phone",
    label: "PhoneNo",
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: "role",
    label: "Role",
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
            <GridActionsCellItem icon={<EditIcon />} sx={{ fontSize: 28 }} onClick={()=>handleClickOpen('Edit User')} />
            <GridActionsCellItem icon={<DeleteIcon />} sx={{ fontSize: 28 }} />
          </Box>
        );
      },
    },
  },
];

const data = [
  { name: "John Walsh", deaprtment: "Test Corp", branch: "Hartford", designation: "CT",phone:"12345" },
  { name: "Bob Herm", department: "Test Corp", branch: "Tampa", designation: "FL", phone:"1234" },
  { name: "James Houston", department: "Test Corp", branch: "Dallas", designation: "TX", phone:"124"},
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
      title="User Lists"
      secondary={
        <Button onClick={()=>handleClickOpen('Create User')} sx={{ border: "1px solid" }}>
          Create
        </Button>
      }
    >
      <MUIDataTable
        className={classes.root}
        data={data}
        columns={columns}
        options={options}
      />
      <Dialog
            open={open.status}
            sx={{
              '& .MuiDialog-container': {
                '& .MuiPaper-root': {
                  maxWidth: '100%',
                },
              },
            }}
          >
            <DialogContent>
              <DialogContentText>
                <MainCard title={open.title}>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={3}>
                        <TextField
                          fullWidth
                          label="Full Name"
                          margin="normal"
                          name="name"
                          type="text"
                          size="small"
                        />
                      </Grid>
                      <Grid item xs={12} sm={3}>
                        <TextField
                          fullWidth
                          label="Employee ID"
                          margin="normal"
                          name="emp"
                          type="text"
                          size="small"
                        />
                      </Grid>
                      <Grid item xs={12} sm={3}>
                        <TextField
                          fullWidth
                          label="Department"
                          margin="normal"
                          name="deartment"
                          type="text"
                          size="small"
                        />

                      </Grid>
                      <Grid item xs={12} sm={3}>
                        <TextField
                          fullWidth
                          label="Branch"
                          margin="normal"
                          name="branch"
                          type="text"
                          size="small"
                        />
                      </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={3}>
                        <TextField
                          fullWidth
                          label="Designation"
                          margin="normal"
                          name="designation"
                          type="text"
                          size="small"
                        />
                      </Grid>
                      <Grid item xs={12} sm={3}>
                        <TextField
                          fullWidth
                          label="Phone No."
                          margin="normal"
                          name="phone"
                          type="text"
                          size="small"
                        />
                      </Grid>
                      <Grid item xs={12} sm={3}>
                        <TextField
                          fullWidth
                          label="Email"
                          margin="normal"
                          name="email"
                          type="text"
                          size="small"
                        />
                      </Grid>
                      <Grid item xs={12} sm={3}>
                        <TextField
                          fullWidth
                          label="User Name"
                          margin="normal"
                          name="name"
                          type="text"
                          size="small"
                        />
                      </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={3}>
                        <TextField
                          fullWidth
                          label="Password"
                          margin="normal"
                          name="password"
                          type="text"
                          size="small"
                        />
                      </Grid>
                      <Grid item xs={12} sm={3}>
                        <TextField
                          fullWidth
                          label="Password Confirmation"
                          margin="normal"
                          name="password confirmation"
                          type="text"
                          size="small"
                        />
                      </Grid>
                      <Grid item xs={12} sm={12}>
                      <FormControlLabel
                         
                          label="IsActive"
                          sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                          control={<Checkbox />}
                        />
                      </Grid>
                    </Grid>
                  <Divider sx={{ mt: 2 }}></Divider>
                  <CardHeader title="Role" />
                  <CardContent sx={{ mt: -4 }}>
                    <Grid container spacing={2}>
                      <Grid item xs={6} sm={3}>
                        <FormControlLabel
                          control={<Checkbox />}
                          label="Admin"
                          sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                        />
                      </Grid>
                      <Grid item xs={6} sm={3}>
                        <FormControlLabel
                          control={<Checkbox />}
                          label="Admin"
                          sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                        />
                      </Grid>
                      <Grid item xs={6} sm={3}>
                        <FormControlLabel
                          control={<Checkbox />}
                          label="Admin"
                          sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                        />
                      </Grid>
                      <Grid item xs={6} sm={3}>
                        <FormControlLabel
                          control={<Checkbox />}
                          label="Admin"
                          sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                        />
                      </Grid>
                    </Grid>
                    
                  </CardContent>
                  <Divider sx={{ mt: 2 }}></Divider>
                  <CardHeader title="Permission" />
                  <CardContent sx={{ mt: -4 }}>
                    <Grid container spacing={2}>
                      <Grid item xs={6} sm={3}>
                        <FormControlLabel
                          control={<Checkbox />}
                          label="Admin"
                          sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                        />
                      </Grid>
                      <Grid item xs={6} sm={3}>
                        <FormControlLabel
                          control={<Checkbox />}
                          label="Admin"
                          sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                        />
                      </Grid>
                      <Grid item xs={6} sm={3}>
                        <FormControlLabel
                          control={<Checkbox />}
                          label="Admin"
                          sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                        />
                      </Grid>
                      <Grid item xs={6} sm={3}>
                        <FormControlLabel
                          control={<Checkbox />}
                          label="Admin"
                          sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                        />
                      </Grid>
                    </Grid>
                  </CardContent>
                </MainCard>
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} variant="outlined" color="info">
                Cancel
              </Button>

            {open.title === 'Edit User'? 
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
