import React from 'react';
import {Router, Route, Link} from 'react-router';

class Gallery extends React.Component{

    render() {
        return(
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

                    <div className="row">

                        <div className="img-fluid sigmapad col-lg-3 col-md-4 col-sm-6 col-xs-12">
                            <div className="hovereffect">
                                <img className="img-responsive" src="images/wave.jpg" alt="" />
                                <div className="overlay">
                                    <h2>Название трека</h2>
                                    <a className="info" href="#">Прослушать</a>
                                </div>
                            </div>
                        </div>
                        <div className="img-fluid sigmapad col-lg-3 col-md-4 col-sm-6 col-xs-12">
                            <div className="hovereffect">
                                <img className="img-responsive" src="images/wave.jpg" alt="" />
                                <div className="overlay">
                                    <h2>Название трека</h2>
                                    <a className="info" href="#">Прослушать</a>
                                </div>
                            </div>
                        </div>
                        <div className="img-fluid sigmapad col-lg-3 col-md-4 col-sm-6 col-xs-12">
                            <div className="hovereffect">
                                <img className="img-responsive" src="images/wave.jpg" alt="" />
                                <div className="overlay">
                                    <h2>Название трека</h2>
                                    <a className="info" href="#">Прослушать</a>
                                </div>
                            </div>
                        </div>
                        <div className="img-fluid sigmapad col-lg-3 col-md-4 col-sm-6 col-xs-12">
                            <div className="hovereffect">
                                <img className="img-responsive" src="images/wave.jpg" alt="" />
                                <div className="overlay">
                                    <h2>Название трека</h2>
                                    <a className="info" href="#">Прослушать</a>
                                </div>
                            </div>
                        </div>
                        <div className="img-fluid sigmapad col-lg-3 col-md-4 col-sm-6 col-xs-12">
                            <div className="hovereffect">
                                <img className="img-responsive" src="images/wave.jpg" alt="" />
                                <div className="overlay">
                                    <h2>Название трека</h2>
                                    <a className="info" href="#">Прослушать</a>
                                </div>
                            </div>
                        </div>
                        <div className="img-fluid sigmapad col-lg-3 col-md-4 col-sm-6 col-xs-12">
                            <div className="hovereffect">
                                <img className="img-responsive" src="images/wave.jpg" alt="" />
                                <div className="overlay">
                                    <h2>Название трека</h2>
                                    <a className="info" href="#">Прослушать</a>
                                </div>
                            </div>
                        </div>
                        <div className="img-fluid sigmapad col-lg-3 col-md-4 col-sm-6 col-xs-12">
                            <div className="hovereffect">
                                <img className="img-responsive" src="images/wave.jpg" alt="" />
                                <div className="overlay">
                                    <h2>Название трека</h2>
                                    <a className="info" href="#">Прослушать</a>
                                </div>
                            </div>
                        </div>
                        <div className="img-fluid sigmapad col-lg-3 col-md-4 col-sm-6 col-xs-12">
                            <div className="hovereffect">
                                <img className="img-responsive" src="images/wave.jpg" alt="" />
                                <div className="overlay">
                                    <h2>Название трека</h2>
                                    <a className="info" href="#">Прослушать</a>
                                </div>
                            </div>
                        </div>
                        <div className="img-fluid sigmapad col-lg-3 col-md-4 col-sm-6 col-xs-12">
                            <div className="hovereffect">
                                <img className="img-responsive" src="images/wave.jpg" alt="" />
                                <div className="overlay">
                                    <h2>Название трека</h2>
                                    <a className="info" href="#">Прослушать</a>
                                </div>
                            </div>
                        </div>
                        <div className="img-fluid sigmapad col-lg-3 col-md-4 col-sm-6 col-xs-12">
                            <div className="hovereffect">
                                <img className="img-responsive" src="images/wave.jpg" alt="" />
                                <div className="overlay">
                                    <h2>Название трека</h2>
                                    <a className="info" href="#">Прослушать</a>
                                </div>
                            </div>
                        </div>
                        <div className="img-fluid sigmapad col-lg-3 col-md-4 col-sm-6 col-xs-12">
                            <div className="hovereffect">
                                <img className="img-responsive" src="images/wave.jpg" alt="" />
                                <div className="overlay">
                                    <h2>Название трека</h2>
                                    <a className="info" href="#">Прослушать</a>
                                </div>
                            </div>
                        </div>
                        <div className="img-fluid sigmapad col-lg-3 col-md-4 col-sm-6 col-xs-12">
                            <div className="hovereffect">
                                <img className="img-responsive" src="images/wave.jpg" alt="" />
                                <div className="overlay">
                                    <h2>Название трека</h2>
                                    <a className="info" href="#">Прослушать</a>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </section>
        )
    }

}

export default Gallery;