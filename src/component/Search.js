import React, { Component } from 'react';


export default class Search extends Component {
    constructor(props){
        super(props);
        this.state = {
            album: " "
        }
        this.submitHandler = this.submitHandler.bind(this);
        this.onChangeInput = this.onChangeInput.bind(this);
    }
    submitHandler(e) {
        e.preventDefault();
        console.log(this.state.album);
        this.props.search(this.state.album);
    }
    onChangeInput(e) {
        
        
        this.setState({
            album: e.target.value
        });
    }
    render() {
        return(
            <div>
                <div className="row">
                    <div className="col-md-8 offset-md-2">
                        <div className="card">
                            <div className="card-body">
                                <form  onSubmit={this.submitHandler}>
                                    <div className="form-group">
                                        <label htmlFor="album">search for album/artist</label>
                                        <input type="text" name="album" className="form-control" value={this.state.album} onChange={this.onChangeInput}></input>
                                    </div>
                                    <div className="form-group">
                                        <button type="submit" className="btn btn-outline-success">Search</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}