import React, { useState } from 'react';
// Antd
import InputNumber from 'antd/es/input-number';

import 'antd/es/input-number/style/css';

const GridInputNumber = ({ dataItem, field, onChange, ...others }) => {
    const [value, setValue] = useState(dataItem[field] === null ? false : dataItem[field]);

    const handleChange = (value) => {
        setValue(value);
        onChange(value);
    }
    
    return <td {...others}>{dataItem.inEdit ? 
        <InputNumber value={value} onChange={handleChange} />
        : (
            value
        )}
    </td>
}

export default GridInputNumber;