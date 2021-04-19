import React from 'react';
import Home from '../../Home/Home/Home';
import NavigationBar from '../../Shared/NavigationBar/NavigationBar';
import NotFoundFile from '../NotFoundFile/NotFoundFile';

const NotFound = () => {

    return (
        <div >
            <NavigationBar />
            <NotFoundFile />
        </div>
    );
};

export default NotFound;