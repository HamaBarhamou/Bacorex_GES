/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   BodyTitle.js                                       :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: Barhamou <hamabarhamou@gmail.com>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2022/10/12 10:33:49 by Barhamou          #+#    #+#             */
/*   Updated: 2022/10/12 10:48:28 by Barhamou         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import React from 'react';
const style ={
    display: 'flex',
    background: 'green',
    width: '60%'
}

const BodyTitle = () => {
    return (
        <div style={style}>
            <h3>Body Title</h3>
        </div>
    );
};

export default BodyTitle;