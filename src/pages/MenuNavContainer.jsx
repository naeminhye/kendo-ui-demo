import React from 'react';
import { Menu, MenuItem } from '@progress/kendo-react-layout';
import { useHistory } from 'react-router-dom';


const MenuNavContainer = (props) => {
    const history = useHistory();
    const onSelect = (event) => {
        history.push(event.item.data.route);
    }
    return (
        <Menu onSelect={onSelect}>
            <MenuItem text="Home" data={{ route: '/' }}/>
            <MenuItem text="Products" data={{ route: '/products' }}/>
            <MenuItem text="Form" data={{ route: '/Form' }}/>
            <MenuItem text="Grid" data={{ route: '/grid-demo' }}/>
            <MenuItem text="Others" data={{ route: '/Others' }}/>
        </Menu>
    );
}

export default MenuNavContainer;
