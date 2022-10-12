/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   TitleProject.js                                    :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: Barhamou <hamabarhamou@gmail.com>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2022/10/12 10:27:34 by Barhamou          #+#    #+#             */
/*   Updated: 2022/10/12 19:22:36 by Barhamou         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import React from 'react';
import BodyTitle from './BodyTitle';
import Logos from './Logos';
import Profile from './Profile';

const style ={
    display: 'flex',
    height: '100px'
}

const TitleProject = () => {
    return (
        <div style={style}>
            <Logos/>
            <BodyTitle/>
            <Profile/>
        </div>
    );
};

export default TitleProject;