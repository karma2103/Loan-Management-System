import React from "react";
import MUIDataTable from "mui-datatables";
import { Box } from "@mui/system";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import { GridActionsCellItem } from "@mui/x-data-grid";
import MainCard from "ui-component/cards/MainCard";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@mui/material";
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
  return (
    <MainCard
      title="User List"
      secondary={<Button sx={{ border: "1px solid" }}>Add User</Button>}
    >
      <MUIDataTable
        className={classes.root}
        data={data}
        columns={columns}
        options={options}
      />
    </MainCard>
  );
}
