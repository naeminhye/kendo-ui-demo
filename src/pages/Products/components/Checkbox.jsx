import React, { useState } from 'react';
// Antd
import Checkbox from 'antd/es/checkbox';

import 'antd/es/checkbox/style/css';

const GridCheckbox = ({ dataItem, field, onChange, ...others }) => {
    const [checked, setChecked] = useState(dataItem[field] === null ? false : dataItem[field]);

    const handleChange = (e) => {
        setChecked(e.target.checked);
        onChange(e.target.checked);
    }
    
    return <td {...others}>{dataItem.inEdit ? 
        <Checkbox checked={checked} onChange={handleChange} />
        : (
            checked.toString().toUpperCase()
        )}
    </td>
}

export default GridCheckbox;