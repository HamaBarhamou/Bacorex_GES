import React from 'react';
import Logos from './Logos';
import Profile from './Profile';

const style ={
    background: 'blue'
}

const TitleProject = () => {
    return (
        <div style={style}>
            <Logos/>
            <h3>Title of project</h3>
            <Profile/>
        </div>
    );
};

export default TitleProject;