import React from 'react';
import {Router, Route} from 'react-router';

class Search extends React.Component{

    render() {
        return(
            <div className="container">
                <div className="row">
                    <div id="custom-search-input">
                        <div className="input-group col-md-10 col-md-offset-1 search-input">
                            <input type="text" className="  search-query form-control" placeholder="Search" />
                                <span className="input-group-btn">
                                    <button className="btn btn-danger" type="button">
                                        <span className=" glyphicon glyphicon-search"></span>
                                    </button>
                                </span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Search;