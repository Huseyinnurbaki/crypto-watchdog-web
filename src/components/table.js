import React from "react";
import MUIDataTable from "mui-datatables";
import { Gradient } from 'react-gradient';
import * as styles from '../styles/table.module.css';

const gradients = [
    ['#bd19d6', '#ea7d10'],
    ['#ff2121', '#25c668'],
];

const Table = (props) => {
    const { data, columns, options, tableHeader, tableTitle } = props;
    const lastUpdated = new Date().toUTCString();
    const lastUpdatedStr = `Updated At: ${lastUpdated}`

    return (
        <>
            <h1 className={styles.tableHeader} >
                {tableHeader}
            </h1>
            <Gradient
                gradients={gradients}
                property="background"
                duration={300}
                angle="45deg"
                className={styles.gradient}
            >

                {typeof window !== 'undefined' &&
                    <MUIDataTable
                        title={tableTitle || lastUpdatedStr}
                        data={data}
                        columns={columns}
                        options={options}
                    />}

            </Gradient>
        </>
    )
}

export default Table;

