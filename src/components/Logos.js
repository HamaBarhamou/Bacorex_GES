/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Logos.js                                           :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: Barhamou <hamabarhamou@gmail.com>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2022/10/12 10:27:56 by Barhamou          #+#    #+#             */
/*   Updated: 2022/10/12 19:24:27 by Barhamou         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import React from 'react';
import logo from '../images/logo.jpg'

const style ={
    background: 'yellow',
    width: '15%',
}

const Logos = () => {
    return (
        <div style={style}>
            <img src={logo} style={{height: '100%'}}/>
        </div>
    );
};

export default Logos;