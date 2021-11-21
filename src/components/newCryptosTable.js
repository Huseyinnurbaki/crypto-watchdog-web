import React from "react";
import Table from "./table";

const columns = ["name", "symbol", "holders", "network", "source", "address"];

const options = {
  responsive: "standard",
  selectableRowsHeader: false,
  selectableRows: 'none',
  rowsPerPage: 10
};

const NewCryptosTable = (props) => {
  const { data } = props;
  const eligibleData = data.nodes.filter(function (value) {
    return value?.address?.length > 5;
  })

  return (
    <Table
      data={eligibleData}
      options={options}
      columns={columns}
      tableHeader="Recently registered coins 🚀🌖"
    />
  )
}

export default NewCryptosTable;