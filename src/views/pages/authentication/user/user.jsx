import React from "react";
import MUIDataTable from "mui-datatables";
import { Box } from "@mui/system";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import { GridActionsCellItem } from "@mui/x-data-grid";
import MainCard from "ui-component/cards/MainCard";
import { makeStyles } from "@material-ui/core/styles";
import { Button, CardContent, CardHeader, Checkbox, Dialog, DialogActions, DialogContent, DialogContentText, Divider, FormControlLabel, Grid, TextField } from "@mui/material";
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
    name: "company",
    label: "Company",
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: "city",
    label: "City",
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: "state",
    label: "State",
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
            <GridActionsCellItem icon={<EditIcon />} />
            <GridActionsCellItem icon={<DeleteIcon />} />
          </Box>
        );
      },
    },
  },

];

const data = [
  {
    name: "Karma Tshewang",
    company: "Test Corp",
    city: "Yonkers",
    state: "NY",
  },
  { name: "John Walsh", company: "Test Corp", city: "Hartford", state: "CT" },
  { name: "Bob Herm", company: "Test Corp", city: "Tampa", state: "FL" },
  { name: "James Houston", company: "Test Corp", city: "Dallas", state: "TX" },
];

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
  },
  
});
export default function DataTable() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <MainCard
      title="User List"
      secondary={<Button onClick={handleClickOpen('body')} sx={{ border: "1px solid" }}>Add User</Button>}
    >
      <MUIDataTable
        className={classes.root}
        data={data}
        columns={columns}
        options={options}
      />
      <Dialog
            open={open}
            // onClose={handleClose}
            scroll={scroll}
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
                <MainCard title="Add User">
                  <form noValidate>
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
                          label="Designation"
                          margin="normal"
                          name="designation"
                          type="text"
                          size="small"
                        />
                      </Grid>
                    </Grid>
                    <Grid container spacing={2}>
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
                          label="Address"
                          margin="normal"
                          name="address"
                          type="text"
                          size="small"
                        />
                      </Grid>
                      <Grid item xs={12} sm={3}>
                        <TextField
                          fullWidth
                          label="CID No."
                          margin="normal"
                          name="cid"
                          type="number"
                          size="small"
                        />
                      </Grid>
                    </Grid>
                  </form>
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
                </MainCard>
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} variant="outlined" color="info">
                Cancel
              </Button>

              <Button onClick={handleClose} type="submit" variant="outlined" color="secondary">
                Submit
              </Button>
            </DialogActions>
          </Dialog>
    </MainCard>
  );
}
