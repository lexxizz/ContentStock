import React from 'react';
import {Router, Route} from 'react-router';
import Application from '../components/Application';
import MainPage from '../components/MainPage';
import GalleryPage from '../components/GalleryPage';

export default (
    <Route component={Application}>
        <Route path="/" component={MainPage} />
        <Route path="/gallery" component={GalleryPage} />
        <Route path="/account" component={MainPage} />
    </Route>
);