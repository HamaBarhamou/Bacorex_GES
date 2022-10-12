/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Logos.js                                           :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: Barhamou <hamabarhamou@gmail.com>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2022/10/12 10:27:56 by Barhamou          #+#    #+#             */
/*   Updated: 2022/10/12 19:19:56 by Barhamou         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import React from 'react';
import logo from '../images/logo.jpg'

const style ={
    background: 'yellow',
    width: '15%'
}

const Logos = () => {
    return (
        <div style={style}>
            <img src={logo}/>
        </div>
    );
};

export default Logos;