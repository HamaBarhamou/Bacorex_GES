import React from 'react';
import BodyProject from '../components/BodyProject';
import Logos from '../components/Logos';
import Menus from '../components/Menus';
import Profile from '../components/Profile';
import TitleProject from '../components/TitleProject';

const Home = () => {
    return (
        <div>
            <Logos/>
            <Menus/>
            <Profile/>
            <BodyProject/>
            <TitleProject/>
        </div>
    );
};

export default Home;