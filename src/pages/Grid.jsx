import React from "react";

import Grid from '../components/Grid';
import orders from '../data/orders';

const columns = [
    {field: "orderID", title: "Order ID"},
    {field: "customerID", title: "Customer ID"},
    {field: "employeeID", title: "Employee ID"},
    {field: "shipName", title: "Ship Name"},
]

function GridDemo () {
    const [dataState, setDataState] = React.useState({
        filter: undefined,
        group: undefined,
        sort: undefined,
        pageSize: 10,
        currentPage: 1,
    })

    const gridConfig = {
        filter: undefined,
        sort: true,
        group: undefined,
        paging: {
            info: true,
            type: 'numeric',
            pageSizes: true,
            previousNext: true
        },
        expand: undefined,
        dataState,
    }

    const onDataStateChange = (e) => {
        console.log(e)
        setDataState({
            ...dataState,
            ...e.dataState
        })
    }

    return (
        <Grid 
            columns={columns}
            data={orders}
            onDataStateChange={onDataStateChange}
            total={orders.length}
            gridConfig={gridConfig}
        />
    )
}

export default GridDemo;
