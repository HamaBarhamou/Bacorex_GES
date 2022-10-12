/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Profile.js                                         :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: Barhamou <hamabarhamou@gmail.com>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2022/10/12 10:29:30 by Barhamou          #+#    #+#             */
/*   Updated: 2022/10/12 22:53:54 by Barhamou         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import React from 'react';
import login from '../images/login.jpeg'

const style ={
    background:'blue',
    width: '10%'
}

const loginStyle = {
    height: '100%',
    width: '100%'
}
const Profile = () => {
    return (
        <div style={style}>
            <img src={login} style={loginStyle}/>
            <h3>Profile user</h3>
        </div>
    );
};

export default Profile;