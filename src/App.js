import React, { Component } from "react";
import Search from "./component/Search";
import Artist from "./component/Artist";
import Track from "./component/Track";

const URL = "https://spotify-api-wrapper.appspot.com";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artist: "",
      tracks: [],
    };
    this.searchHandler = this.searchHandler.bind(this);
  }
  componentDidMount() {
    this.searchHandler("dsp");
  }
  searchHandler(name) {
    //call rest api
    fetch(`${URL}/artist/${name}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("data = ", data);

        if (data.artists.total > 0) {
          const artist = data.artists.items[0];
          this.setState({ artist });

          /* logic to fetch tracks */
          fetch(`${URL}/artist/${artist.id}/top-tracks`)
            .then((res) => res.json())
            .then((result) => {
              console.log(result.track);
              this.setState({
                tracks: result.tracks,
              });
              console.log(result.tracks);
            })
            .catch((err) => console.log(err));
        }
      })
      .catch((err) => console.log(err));
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="jumbotron text-center">
              <h3 className="display-3">Music Player</h3>
            </div>
          </div>
        </div>
        <Search search={this.searchHandler} />
        <hr />
        <Artist {...this.state.artist} />
        <hr />
        <Track trackList={this.state.tracks} />
      </div>
    );
  }
}
