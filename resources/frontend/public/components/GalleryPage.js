import React from 'react';
import {Router, Route} from 'react-router';
import Search from './Search';
import Gallery from './Gallery';
import GalleryFilter from './GalleryFilter';

class GalleryPage extends React.Component{

    render() {
        return(
            <div>
                <Search />
                <section id="gallery">

                    <div className="container-fluid">

                        <GalleryFilter />
                        <Gallery />
                        </div>
                    </section>
            </div>
        )
    }

}

export default GalleryPage;