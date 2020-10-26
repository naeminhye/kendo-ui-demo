import React from 'react';
import { GridCell } from '@progress/kendo-react-grid';

// Antd
import Button from 'antd/es/button';

import 'antd/es/button/style/css';

export function MyCommandCell({ edit, remove, add, update, discard, cancel, editField }) {
    return class extends GridCell {
        render() {
            const { dataItem } = this.props;
            const inEdit = dataItem[editField];
            const isNewItem = dataItem.ProductID === undefined;

            return inEdit ? (
                <td className="k-command-cell">
                    <Button className="mr-1" type="primary" onClick={() => isNewItem ? add(dataItem) : update(dataItem)}>{isNewItem ? 'Add' : 'Update'}</Button>
                    <Button onClick={() => isNewItem ? discard(dataItem) : cancel(dataItem)}>{isNewItem ? 'Discard' : 'Cancel'}</Button>
                </td>
            ) : (
                <td className="k-command-cell">
                    <Button className="mr-1" type="primary" onClick={() => edit(dataItem)}>Edit</Button>
                    <Button danger 
                        onClick={() =>
                            remove(dataItem)
                        }>Remove</Button>
                </td>
            );
        }
    }
};