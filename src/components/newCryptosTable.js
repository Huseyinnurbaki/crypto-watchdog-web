import React from "react";
import Table from "./table";
import { getMinDiff } from '../utils/timeutils';

const columns = ["name", "symbol", "holders", "network", "source", 
  {
    name: "address",
    options: {
      filter: false,
      customBodyRender: (value) => {
        const poocoinAddress = `https://poocoin.app/tokens/${value}`
        return (
          <a target="_blank" rel="noopener noreferrer" href={`${poocoinAddress}`}>💩{value}</a>
        );
      }
    }
  }];

const options = {
  responsive: "standard",
  selectableRowsHeader: false,
  selectableRows: 'none',
  rowsPerPage: 10
};

const NewCryptosTable = (props) => {
  const { data, site } = props;
  const diffMins = `Last Updated: ${getMinDiff(site.buildTime)} minutes ago`
  const eligibleData = data.nodes.filter(function (value) {
    return value?.address?.length > 5;
  })

  return (
    <Table
      data={eligibleData}
      options={options}
      columns={columns}
      tableHeader="Recently released coins 🚀🌖"
      tableTitle={diffMins}
    />
  )
}

export default NewCryptosTable;