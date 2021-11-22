import React from "react";
import Table from "./table";
import { getMinDiff } from '../utils/timeutils';

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
  label: "1h Change %",
  options: columnOptions,
},
{
  name: "priceChangePercentage24h",
  label: "24h Change %",
  options: columnOptions
},
{
  name: "source",
  options: columnOptions
}];

const options = {
  search: true,
  responsive: "standard",
  selectableRowsHeader: false,
  selectableRows: 'none'
};

const AllCryptosTable = (props) => {
  const { data, site } = props;
  const diffMins = `Last Updated: ${getMinDiff(site.buildTime)} minutes ago`

  return (
    <Table
      data={data.nodes}
      options={options}
      columns={columns}
      tableHeader="Crypto-Watchdog Findings 🤑💸"
      tableTitle={diffMins}
    />
  )
}

export default AllCryptosTable;