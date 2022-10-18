/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Menus.js                                           :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: Barhamou <hamabarhamou@gmail.com>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2022/10/12 19:04:01 by Barhamou          #+#    #+#             */
/*   Updated: 2022/10/18 12:38:34 by Barhamou         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import React from 'react';
import { 
    Menu, 
    MenuItem, 
    MenuButton, 
    SubMenu,
    MenuDivider,
    MenuHeader
 } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';

const style ={
    background: '#C0C0C0',
    width: '15%'
}


const Menus = () => {
    return (
        <div style={style}>
            <Menu menuButton={<MenuButton> Gesttion DAO</MenuButton>} onItemClick={(e) => console.log(`[Menu] ${e.value}`)} transition>
                <MenuItem>new DAO</MenuItem>
            </Menu>
            <Menu menuButton={<MenuButton> Gestion Projet</MenuButton>}  transition>
                <MenuDivider />
                <MenuHeader>Caracteristique Genarale</MenuHeader>
                    <MenuItem>Affaire</MenuItem>
                    <MenuItem>Position</MenuItem>
                    <MenuItem>Intervenants</MenuItem>
                    <MenuItem>Planification</MenuItem>
                    <MenuItem>Travaux a faire</MenuItem>
                    <MenuItem>Caracteristique Technique</MenuItem>
                
                <MenuDivider />
                <MenuHeader>Suivie</MenuHeader>
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
               
            </Menu>    
        </div>
    );
};

export default Menus;