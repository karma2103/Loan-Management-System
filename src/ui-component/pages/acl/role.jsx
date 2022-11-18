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
    name: "si",
    label: "SI No",
    options: {
      filter: false,
      sort: false,
    },
  },
  {
    name: "role",
    label: "Role Name",
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: "permission",
    label: "Permission",
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
  {si:"1", role: "John Walsh", permission: "Test Corp" },
  {si:"2", role: "Bob Herm", permission: "Test Corp" },
  { si:"3",role: "James Houston", permission: "Test Corp"},
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
      title="Role-Permission Lists"
      secondary={<Button onClick={handleClickOpen('body')} sx={{ border: "1px solid" }}>Create</Button>}
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
                <MainCard title="Create Role">
                  <form noValidate>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={12}>
                        <TextField
                          fullWidth
                          label="Role Name"
                          margin="normal"
                          name="name"
                          type="text"
                          size="small"
                        />
                      </Grid>
                    </Grid>
                  </form>
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

              <Button onClick={handleClose} type="submit" variant="outlined" color="secondary">
                Submit
              </Button>
            </DialogActions>
          </Dialog>
    </MainCard>
  );
}
