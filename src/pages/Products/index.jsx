﻿import React, { useState, useEffect } from 'react';
import { MyCommandCell } from './myCommandCell.jsx';
import { Grid, GridColumn as Column, GridToolbar } from '@progress/kendo-react-grid';
import { process } from '@progress/kendo-data-query';

import { connect } from 'react-redux';
import { compose } from 'redux';

import * as actions from './actions'

// Antd
import Button from 'antd/es/button';

import 'antd/es/button/style/css';

// Customized Components
// import Input from './components/Input';
// import Checkbox from './components/Checkbox';
// import InputNumber from './components/InputNumber';
import Pagination from './components/Pagination';

const mapStateToProps = (state) => ({
  products: state.products,
});

// const mapDispatchToProps = (dispatch) => ({
//     fetchProducts: () => dispatch(actions.fetchProducts()),
//     addProduct: (product) => dispatch(actions.addProduct(product)),
//     removeProduct: (product) => dispatch(actions.removeProduct(product)),
//     updateProduct: (product) => dispatch(actions.updateProduct(product)),
// });

const mapDispatchToProps = {
    fetchProducts: actions.fetchProducts,
    addProduct: actions.addProduct,
    removeProduct: actions.removeProduct,
    updateProduct: actions.updateProduct
};
  

const CustomGrid = (props) => {   
    const editField = "inEdit";
    const [data, setData] = useState(props.products);
    const [dataState, setDataState ] = useState({skip: 0, take: 10 });
    
    const generateId = data => data.reduce((acc, current) => Math.max(acc, current.ProductID), 0) + 1;

    const removeItem = (data, item) => {
        let index = data.findIndex(p => p === item || item.ProductID && p.ProductID === item.ProductID);
        if (index >= 0) {
            data.splice(index, 1);
        }
    }

    const enterEdit = (dataItem) => {
        setData(data.map(item =>
            item.ProductID === dataItem.ProductID ?
                { ...item, inEdit: true } : item
        ));
    }

    const remove = (dataItem) => {
        props.removeProduct(dataItem);
    }

    const add = (dataItem) => {
        dataItem.inEdit = undefined;
        dataItem.ProductID = generateId(props.products);
        props.addProduct(dataItem)
    }

    const discard = (dataItem) => {
        const newData = [...data];
        removeItem(newData, dataItem);

        setData(newData);
    }

    const update = (dataItem) => {
        // const newData = [...data]
        const updatedItem = { ...dataItem, inEdit: undefined };

        // updateItem(newData, updatedItem);
        props.updateProduct(updatedItem);

        // setData(newData);
    }

    const cancel = (dataItem) => {
        const originalItem = props.products.find(p => p.ProductID === dataItem.ProductID);
        const newData = data.map(item => item.ProductID === originalItem.ProductID ? originalItem : item);

        setData(newData);
    }

    const updateItem = (data, item) => {
        let index = data.findIndex(p => p === item || (item.ProductID && p.ProductID === item.ProductID));
        if (index >= 0) {
            data[index] = { ...item };
        }
    }

    const itemChange = (event) => {
        const newData = data.map(item =>
            item.ProductID === event.dataItem.ProductID ?
                { ...item, [event.field]: event.value } : item
        );
        setData(newData);
    }

    const addNew = () => {
        const newDataItem = { inEdit: true, Discontinued: false };
        setData([newDataItem, ...data]);
    }

    const cancelCurrentChanges = () => {
        setData([...props.products]);
    }
    let CommandCell = MyCommandCell({
        edit: enterEdit,
        remove: remove,

        add: add,
        discard: discard,

        update: update,
        cancel: cancel,

        editField: editField
    });
    const hasEditedItem = data.some(p => p.inEdit);
    return (
        <div className="container-fluid">
            <Grid
                data={process(data, dataState)}
                onItemChange={itemChange}
                editField={editField}
                pageable // uncomment to enable paging
                skip={0}
                take={10}
                // total={products.length}
                // onPageChange={this.pageChange}
                pager={Pagination}
                sortable // uncomment to enable sorting
                // filterable // uncomment to enable filtering
                onDataStateChange={(e) => setDataState(e.data)} // uncomment to enable data operations
                {...dataState} // uncomment to enable data operations
            >
                <GridToolbar>
                    <Button type="primary" onClick={addNew}>Add new</Button>
                    {hasEditedItem && (
                        <Button onClick={cancelCurrentChanges}>Cancel current changes</Button>
                    )}
                </GridToolbar>
                <Column field="ProductID" title="Id" width="50px" editable={false} />
                <Column field="ProductName" title="Product Name" width="250px" /* cell={Input} */ />
                <Column field="FirstOrderedOn" title="First Ordered" width="250px" editor="date" format="{0:d}" />
                <Column field="UnitsInStock" title="Units" width="100px" editor="numeric" /* cell={InputNumber} */ />
                <Column field="Discontinued" title="Discontinued" editor="boolean" /* cell={Checkbox} */ />
                <Column cell={CommandCell} width="240px" />
            </Grid>
        </div>
    );
}

const enhance = compose(
    connect(
      mapStateToProps,
      mapDispatchToProps,
    ),
);
  
  
export default enhance(CustomGrid);