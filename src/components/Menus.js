import React from 'react';
import { Menu, MenuItem, MenuButton, SubMenu } from '@szhsin/react-menu';

const style ={
    background: '#C0C0C0',
    width: '15%'
}


const Menus = () => {
    return (
        <div style={style}>
           <Menu menuButton={<MenuButton>Open menu</MenuButton>}>
            <MenuItem>New File</MenuItem>
            <MenuItem>Save</MenuItem>
            <SubMenu label="Edit">
                <MenuItem>Cut</MenuItem>
                <MenuItem>Copy</MenuItem>
                <MenuItem>Paste</MenuItem>
            </SubMenu>
            <MenuItem>Print...</MenuItem>
        </Menu>
                    
        </div>
    );
};

export default Menus;