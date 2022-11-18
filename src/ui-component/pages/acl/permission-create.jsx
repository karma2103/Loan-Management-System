import React from "react";
import MUIDataTable from "mui-datatables";
import { Box } from "@mui/system";
import { GridActionsCellItem } from "@mui/x-data-grid";
import MainCard from "ui-component/cards/MainCard";
import { makeStyles } from "@material-ui/core/styles";
import {Button,Dialog,DialogActions,DialogContent,DialogContentText,Grid,TextField,
} from "@mui/material";

return (
    
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
  );

