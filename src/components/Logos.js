/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Logos.js                                           :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: Barhamou <hamabarhamou@gmail.com>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2022/10/12 10:27:56 by Barhamou          #+#    #+#             */
/*   Updated: 2022/10/12 22:56:55 by Barhamou         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import React from 'react';
import logo from '../images/logo.jpg'

const style ={
    background: 'yellow',
    width: '10%',
}
const logoStyle = {
    height: '100%',
    width: '100%'
}
const Logos = () => {
    return (
        <div style={style}>
            <img src={logo} style={logoStyle}/>
        </div>
    );
};

export default Logos;