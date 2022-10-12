/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Milieu.js                                          :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: Barhamou <hamabarhamou@gmail.com>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2022/10/12 10:27:49 by Barhamou          #+#    #+#             */
/*   Updated: 2022/10/12 13:10:33 by Barhamou         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import React from 'react';
import BodyProject from './BodyProject';
import Menus from './Menus';

const style = {
    display: 'flex',
    height: '500px'
}

const Milieu = () => {
    return (
        <div style={style}>
            <Menus/>
            <BodyProject/>
        </div>
    );
};

export default Milieu;