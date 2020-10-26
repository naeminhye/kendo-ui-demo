import React, { useState } from 'react';
// Antd
import Input from 'antd/es/input';

import 'antd/es/input/style/css';

const GridInput = ({ dataItem, field, onChange, ...others }) => {
    const [value, setValue] = useState(dataItem[field] === null ? '' : dataItem[field]);

    const handleChange = (e) => {
        setValue(e.target.value);
        onChange(e.target.value);
    }
    
    return <td {...others}>{dataItem.inEdit ? 
        <Input value={value} onChange={handleChange} />
        : (
            value
        )}
    </td>
}

export default GridInput;