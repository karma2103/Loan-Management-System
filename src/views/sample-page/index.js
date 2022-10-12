import React  from "react";
import MUIDataTable from "mui-datatables";
import MainCard from "ui-component/cards/MainCard";
import { makeStyles } from "@material-ui/core/styles";
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
    name: "code",
    label: "Register Date",
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: "name",
    label: "Login Date",
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: "location",
    label: "Logout Date",
    options: {
      filter: true,
      sort: true,
    },
  },
];

const data = [
  { id: 1,code:'PA',  name: "Paro", location:'Paro' },
  { id: 2,code:'HA',  name: "Ha", location:'HA' },
  { id: 3,code:'TH',  name: "Thimphu", location:'Thimphu' },
  { id: 4,code:'MO',  name: "Mongar", location:'mongar' },
];

const options = {
  filter: false,
  download: false,
  print: false,
  viewColumns: false,
  selectableRows: false,
  fixedHeader :true,
  search: true
};
const useStyles = makeStyles({
  root: {
    background: "none",
    boxShadow: "none",
    textAlign: "center",
  },
});
export default function Branch() {
  const classes = useStyles();
  return (
    <MainCard title="Log Management ">
      <MUIDataTable
        className={classes.root}
        data={data}
        columns={columns}
        options={options}
        elevation ={10}
      />   
    </MainCard>
  );
}
