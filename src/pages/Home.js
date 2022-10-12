/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Home.js                                            :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: Barhamou <hamabarhamou@gmail.com>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2022/10/12 10:29:35 by Barhamou          #+#    #+#             */
/*   Updated: 2022/10/12 10:29:36 by Barhamou         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import React from 'react';
import Footer from '../components/Footer';
import Milieu from '../components/Milieu';
import TitleProject from '../components/TitleProject';

const Home = () => {
    return (
        <div>
            <TitleProject/>
            <Milieu/>
            <Footer/>
        </div>
    );
};

export default Home;