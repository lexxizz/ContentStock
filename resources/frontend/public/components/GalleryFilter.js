import React from 'react';
import {Router, Route, Link} from 'react-router';

class GalleryFilter extends React.Component{

    render() {
        return(
            <div className="row single-page-nav">
                <div className="gallery-filter col-lg-12 col-md-12 sigma-bg-lightgray">
                    <div className=" col-lg-12 col-md-12 ">
                        <div className="form-group  col-lg-3">
                            <label for="1">Стили</label>
                            <select className="form-control" id="1">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                            </select>
                            <label for="2">Сортировать по</label>
                            <select className="form-control" id="2">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                            </select>
                        </div>
                        <div className="form-group col-lg-6">
                            <div className="col-lg-6">
                                <label>Цена</label>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <input type="text" className="form-control" placeholder="от" />
                                    </div>
                                    <div className="col-lg-6">
                                        <input type="text" className="form-control" placeholder="до" />
                                    </div>
                                </div>
                                <label>Продолжительность</label>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <input type="text" className="form-control" placeholder="от" />
                                    </div>
                                    <div className="col-lg-6">
                                        <input type="text" className="form-control" placeholder="до" />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default GalleryFilter;