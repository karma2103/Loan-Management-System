import * as React from 'react';
import Box from '@mui/material/Box';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';

import {
  GridRowModes,
  GridActionsCellItem,
} from '@mui/x-data-grid-pro';

import { DataGrid } from '@mui/x-data-grid';
import MainCard from 'ui-component/cards/MainCard';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, Grid, TextField } from '@mui/material';
import AnimateButton from 'ui-component/extended/AnimateButton';

const initialRows = [
  {
    id: 1,
    name: 'User-List',
  },
  {
    id: 2,
    name: 'user-create',
    
  },
  {
    id: 3,
    name: 'user-edit',
    
  },
  {
    id: 4,
    name: 'role-list ',
    
  },
  {
    id: 5,
    name: 'role-create',
    
  },
  {
    id: 6,
    name: 'role-edit',
    
  },
  {
    id: 7,
    name: 'role-list',
    
  },
];
export default function Permission() {
  const [rows, setRows] = React.useState(initialRows);
  const [rowModesModel, setRowModesModel] = React.useState({});
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState("paper");
  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };
  const handleClose = () => {
    setOpen(false);
  };
  

  const handleEditClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
  };

  const handleDeleteClick = (id) => () => {
    setRows(rows.filter((row) => row.id !== id));
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 250, editable: true, },

    { field: 'name', headerName: 'Name', width: 250, editable: true },
    
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Actions',
      width: 250,
      cellClassName: 'actions',
      renderCell: (id) => {
        return (
          <Box>
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Edit"
            className="textPrimary"
            onClick={handleEditClick(id)}
            color="inherit"
          />,
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={handleDeleteClick(id)}
            color="inherit"
          />,
          </Box>
        );
      },
    },
  ];

  return (
    <MainCard title="Permission List" secondary={
      <Button  onClick={handleClickOpen("body")} sx={{border: '1px solid'}}>
        Add permission
      </Button>
    }>
    <Box
      sx={{
        height: 500,
        width: '100%',
        '& .actions': {
          color: 'text.secondary',
        },
        '& .textPrimary': {
          color: 'text.primary',
        },
      }}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        editMode="row"
        rowModesModel={rowModesModel}
        componentsProps={{
          toolbar: { setRows, setRowModesModel },
        }}
      />
    </Box>
    <Dialog
        open={open}
        // onClose={handleClose}
        scroll={scroll}
        sx={{
          "& .MuiDialog-container": {
            "& .MuiPaper-root": {
              width: "100%",
              maxWidth: "400px", // Set your width here
            },
          },
        }}
      >
        <DialogContent>
          <DialogContentText>
            <MainCard title="Role Details">
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12}>
                  <TextField
                    fullWidth
                    label="Permission List"
                    name="name"
                    type="text"
                  />
                </Grid>
                </Grid>
            </MainCard>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <AnimateButton spacing={2}>
            <Button onClick={handleClose} variant="contained" color="error">
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
              Update
            </Button>
          </AnimateButton>
        </DialogActions>
      </Dialog>
      </MainCard>
  );
}
