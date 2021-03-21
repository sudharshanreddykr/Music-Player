import React, { Component } from 'react';


export default class Track extends Component {
    state = {
        playing: false,
        audio: null,
        playingPreviewUrl: null
    }

    /* playing logic */
    playAudio(url) {
        const audio = new Audio(url)
        
        if(!this.state.playing) {
            audio.play();
            this.setState({ playing: true, audio, playingPreviewUrl: url})
        } else {
            // pause
            this.state.audio.pause();
        }
        // from pause to play
        if(this.state.playingPreviewUrl === url) {
            this.setState({ playing: false });
        } else {
            audio.play();
            this.setState({audio, playingPreviewUrl: url});
        }
    }

    trackIcon(url) {
        //if url is empty
        if(!url) {
            return <span class="texts-danger">N T</span> 
        }
        // track is playing 
        if (this.state.playing && this.state.playingPreviewUrl=== url) {
            return <i className='fa fa-pause text-warning'></i>;
        }
        // track is not playing 
            return <i className='fa fa-play-circle text-success'></i>;
    }

    msToTime(s) {
        var ms = s% 1000;
        s = (s - ms)/1000;
        var sec = s % 60;
        s = (s - sec) / 60;
        var min = s % 60;
        var hrs = (s- min)/60;
        return `${hrs}hr:${min}min:${sec}sec`;
    }

    render() {
        if(!this.props.trackList) return null;
        return(
            <div className="row">
                <div className="col-md-12">
                    <div className="jumbotron text-center">
                        <div className="display-3">Top Tracks</div>
                    </div>
                </div>
                <div className="row">
                    {
                        this.props.trackList.map((item, key) => {
                            const {name, album, popularity, type, duration_ms, preview_url} = item;
                            return(
                                <div className="col-md-2" key={key}>
                                    <div className="card" onClick={() => this.playAudio(preview_url)} >
                                        <div className="card-body">
                                            <img src={album.images[1].url} alt ="" className="card-img-top" />
                                            <ul className="list-group">
                                                <li className="list-group-items">
                                                    <h6 className="text-center">{name}</h6>
                                                </li>
                                                <li className="list-group-item">
                                                    <strong>Popularity</strong>
                                                    <span className="float-right">{popularity}</span>
                                                </li>
                                                <li className="list-group-item">
                                                    <strong>Type</strong>
                                                    <span className="float-right">{type}</span>
                                                </li>
                                                <li className="list-group-item">
                                                    <strong>Duration</strong>
                                                    <span className="float-right">{this.msToTime(duration_ms)}</span>
                                                </li>
                                                <li className="card-footer">
                                                    <h1 className="float-right" type="button">{this.trackIcon(preview_url)}</h1>
                                                </li>
                                                
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}