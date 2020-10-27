import React from 'react';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import { process } from '@progress/kendo-data-query';

/** Grid component Wrapper
 * 
 * */  

function GridWrapper ({columns, data, total, gridConfig, onDataStateChange, className, ...restProps}) {
    const filterable = !!gridConfig.filter;
    const sortable = !!gridConfig.sort ? gridConfig.sort : false;
    const groupable = !!gridConfig.group ? gridConfig.group : false;
    const pageable = !!gridConfig.paging ? gridConfig.paging : false;
    const { expandField, expandComponent, onExpandChange } = !!gridConfig.expand ? gridConfig.expand : {};
    const { dataState = {} } = gridConfig;

    const _dataState = {
        filter: dataState.filter,
        group: dataState.group,
        sort: dataState.sort,
        take: dataState.pageSize,
        skip: (dataState.currentPage - 1) * dataState.pageSize
    }

    const _onDataStateChange = (e) => {
        onDataStateChange({
            ...e,
            dataState: {
                filter: e.dataState.filter,
                group: e.dataState.group,
                sort: e.dataState.sort,
                pageSize: e.dataState.take,
                currentPage: (e.dataState.skip / e.dataState.take) + 1
            }
        })
    }

    return (
        <Grid
            className={className}
            data={process(data, _dataState)}
            filterable={filterable}
            sortable={sortable}
            groupable={groupable}
            pageable={pageable}
            onDataStateChange={_onDataStateChange}
            total={total}
            expandField={expandField}
            detail={expandComponent}
            onExpandChange={onExpandChange}
            {..._dataState}
            {...restProps}
        >
            {
                columns.map(({field, title, ...rest}, index) => {
                    return <Column field={field} title={title} key={index} {...rest}/>
                })
            }
        </Grid>
    )
}

export default GridWrapper;