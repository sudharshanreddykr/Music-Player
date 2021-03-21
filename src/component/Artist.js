import React, { Component } from 'react';


export default class Artist extends Component {

    render() {
        let {name,popularity,genres} = this.props;
        return(
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-tile text-center">
                                <strong>Artist:</strong><span>{ name }</span>
                            </h3>
                        </div>
                        {/* <img src="{this.props.images[1].url}" alt="profiled" className="card-img-top"/>
 */}                    <div className="card-body">
                            <ul className="list-group">
                                <li className="list-group-item">
                                    <strong>Popularity:</strong><span className="float-right">{popularity}</span>
                                </li>
                                <li className="list-group-item">
                                    <strong>genres:</strong><span className="float-right">{genres}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}