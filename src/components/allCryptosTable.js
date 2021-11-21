import React from "react";
import Table from "./table";

const cellProps = {
  style: {
    whiteSpace: "nowrap",
    position: "sticky",
    left: "0",
    background: "white",
    zIndex: 0
  }
}
const columnOptions = {
  filter: true,
  setCellProps: () => cellProps,
    setCellHeaderProps: () => cellProps,
  }

const columns = [{
    name: "name",
    options: columnOptions
  },
  {
    name: "symbol",
    options: columnOptions
  },
  {
    name: "price",
    options: columnOptions
  },
  {
    name: "priceChangePercentage1h",
    options: columnOptions
  },
  {
    name: "priceChangePercentage24h",
    options: columnOptions
  },
  {
    name: "source",
    options: columnOptions
  }];

const options = {
  search: true,
  selectableRowsHeader: false,
  selectableRows: 'none',
  rowsPerPage:15
};
export default function AllCryptosTable(props) {
const { data } = props;

return (
    <Table
    data={data.nodes}
    options={options}
    columns={columns}
    tableHeader="Crypto-Watchdog Findings 🤑💸"
    />
)
}

