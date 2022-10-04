import React from 'react';
import BodyProject from '../components/BodyProject';
import Menus from '../components/Menus';
import TitleProject from '../components/TitleProject';

const Home = () => {
    return (
        <div>
            <TitleProject/>
            <Menus/>
            <BodyProject/>
        </div>
    );
};

export default Home;