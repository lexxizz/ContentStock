import React from 'react';
import {Router, Route} from 'react-router';
import Search from './Search';

class GalleryPage extends React.Component{

    render() {
        return(
            <div>
                <Search />
            </div>
        )
    }

}

export default GalleryPage;