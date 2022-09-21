import React from "react";
import MUIDataTable from "mui-datatables";
import { Box } from "@mui/system";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import { GridActionsCellItem } from "@mui/x-data-grid";
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
      sort: false,
    },
  },
  {
    name: "city",
    label: "City",
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: "state",
    label: "State",
    options: {
      filter: true,
      sort: false,
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
  { name: "Joe James", company: "Test Corp", city: "Yonkers", state: "NY" },
  { name: "John Walsh", company: "Test Corp", city: "Hartford", state: "CT" },
  { name: "Bob Herm", company: "Test Corp", city: "Tampa", state: "FL" },
  { name: "James Houston", company: "Test Corp", city: "Dallas", state: "TX" },
];

const options = {};
export default function DataTable() {
  return (
    <MUIDataTable
    sortFilterList='false'
    viewColumns='false'
    filter='false'
      title={"Employee List"}
      data={data}
      columns={columns}
      options={options}
    />
  );
}
