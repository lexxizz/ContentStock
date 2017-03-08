import React from 'react';
import {Router, Route, Link} from 'react-router';
import Search from './Search';
import Gallery from './Gallery';

class Main extends React.Component{
    render() {
        return(
            <div>
               <Search />

                <section id="gallery">

                    <div className="container-fluid">

                        <div className="row sigma-home single-page-nav">

                            <div className="col-md-offset-2 col-lg-offset-3 col-lg-6 col-md-8 col-sm-12 text-center">
                                <h1>ContentStock</h1>
                                <p>Sigma is free Bootstrap 4 (alpha 2) theme designed for a metro-style image grid gallery.
                                    Download, modify and use this layout for your websites.</p>
                                <Link to={'/gallery'} className="btn btn-danger sigma-start">Галерея</Link>
                                <a href="#about" className="btn btn-success sigma-start">О проекте</a>
                            </div>
                            <div className="col-md-offset-2 col-lg-offset-3 col-lg-6 col-md-8 col-sm-12 text-center main-buttons">
                                <h2>Популярное</h2>
                            </div>
                        </div>
                        <Gallery />


                        </div>
                    </section>

                <section id="home">

                    <div className="container-fluid">

                        <div className="row">
                            <div className="sigma-content col-lg-3 col-md-6 sigma-bg-lightgray text-center">
                                <span className="sigma-icon fa fa-power-off"></span>
                                <h2>Design</h2>
                                <p>Praesent lorem dui, suscipit eu volutpat id, sollicitudin ut mi. Praesent ornare massa vehicula.</p>
                            </div>
                            <div className="sigma-content col-lg-3 col-md-6 sigma-bg-gray text-center">
                                <span className="sigma-icon fa fa-bolt"></span>
                                <h2>Implement</h2>
                                <p>Praesent lorem dui, suscipit eu volutpat id, sollicitudin ut mi. Praesent ornare massa vehicula.</p>
                            </div>
                            <div className="sigma-content col-lg-3 col-md-6 sigma-bg-darkgray text-center">
                                <span className="sigma-icon fa fa-thumbs-up"></span>
                                <h2>Enhance</h2>
                                <p>Praesent lorem dui, suscipit eu volutpat id, sollicitudin ut mi. Praesent ornare massa vehicula.</p>
                            </div>
                            <div className="sigma-content col-lg-3 col-md-6 sigma-bg-black text-center">
                                <span className="sigma-icon fa fa-bar-chart"></span>
                                <h2>Monitor</h2>
                                <p>Praesent lorem dui, suscipit eu volutpat id, sollicitudin ut mi. Praesent ornare massa vehicula.</p>
                            </div>
                        </div>

                    </div>

                </section>
                
                <section id="about">

                    <div className="container-fluid">

                        <div className="row single-page-nav">
                            <div className="sigma-content col-lg-6 col-md-6 sigma-bg-black text-center">
                                <h2>Каталог</h2>
                                <div className="col-lg-3 col-md-6  text-center">
                                    <p>Стиль</p>
                                    <p>Стиль</p>
                                    <p>Стиль</p>
                                    <p>Стиль</p>
                                </div>
                                <div className="col-lg-3 col-md-6 text-center">

                                    <p>Стиль</p>
                                    <p>Стиль</p>
                                    <p>Стиль</p>
                                    <p>Стиль</p>
                                </div>
                                <div className="col-lg-3 col-md-6 text-center">
                                    <p>Стиль</p>
                                    <p>Стиль</p>
                                    <p>Стиль</p>
                                    <p>Стиль</p>
                                </div>
                                <div className="col-lg-3 col-md-6 text-center">
                                    <p>Стиль</p>
                                    <p>Стиль</p>
                                    <p>Стиль</p>
                                    <p>Стиль</p>
                                </div>
                            </div>
                            <div className="sigma-content col-lg-6 col-md-6 sigma-bg-lightgray text-center">
                                <h2>Популярные инструменты</h2>
                                <div className="col-lg-6 col-md-6 text-center">
                                    <p>Гитара</p>
                                    <p>Укулеле</p>
                                    <p>Фортепиано</p>
                                    <p>Барабан</p>
                                </div>
                                <div className="col-lg-6 col-md-6 text-center">
                                    <p>Стиль</p>
                                    <p>Стиль</p>
                                    <p>Стиль</p>
                                    <p>Стиль</p>
                                </div>

                            </div>

                        </div>

                        <div className="row sigma-section-header">
                            <div className="col-md-offset-2 col-lg-offset-3 col-lg-6 col-md-8 col-sm-12 text-center">
                                <h1>About Us</h1>
                                <p>Sed elit elit, dictum eu turpis non, fringilla efficitur ipsum. Phasellus ultrices, nunc et tempus porta, tellus purus elementum ex, volutpat lobortis orci dolor in tortor.</p>
                            </div>
                        </div>

                    </div>

                </section>
            </div>
        )
    }
}
export default Main;