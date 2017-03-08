import React from 'react';
import {Router, Route} from 'react-router';
import Application from '../components/Application';
import MainPage from '../components/MainPage';
import GalleryPage from '../components/GalleryPage';
import Account from '../components/Account';
import AccountProfile from '../components/AccountProfile';
import AccountPurchases from '../components/AccountPurchases';

export default (
    <Route component={Application}>
        <Route path="/" component={MainPage} />
        <Route path="/gallery" component={GalleryPage} />
        <Route component={Account}>
            <Route path="/account/profile" component={AccountProfile} />
            <Route path="/account/purchases" component={AccountPurchases} />
        </Route>
    </Route>
);