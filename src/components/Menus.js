import React from 'react';
import { Menu, MenuItem, MenuButton, SubMenu } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';

const style ={
    background: '#C0C0C0',
    width: '15%'
}


const Menus = () => {
    return (
        <div style={style}>
            <Menu menuButton={<MenuButton> Open Menu</MenuButton>} transition>
                <SubMenu label="Generale">
                    <MenuItem>Affaire</MenuItem>
                    <MenuItem>Position</MenuItem>
                    <MenuItem>Intervenants</MenuItem>
                    <MenuItem>Planification</MenuItem>
                    <MenuItem>Travaux a faire</MenuItem>
                    <MenuItem>Caracteristique Technique</MenuItem>
                </SubMenu>
                <SubMenu label="Suivie">
                    <MenuItem>Retroplannig</MenuItem>
                    <MenuItem>Liste des modifications</MenuItem>
                    <MenuItem>Revue portefeuille</MenuItem>
                    <MenuItem>Alerte</MenuItem>
                    <MenuItem>Achat</MenuItem>
                    <MenuItem>Courier</MenuItem>
                    <MenuItem>Clients</MenuItem>
                    <MenuItem>Pieces Joint</MenuItem>
                    <MenuItem>Ajour agent</MenuItem>
                    <MenuItem>nouveau courier</MenuItem>
                    <MenuItem>Rechercher</MenuItem>
                    <MenuItem>CRET</MenuItem>
                </SubMenu>
            </Menu>
                    
        </div>
    );
};

export default Menus;