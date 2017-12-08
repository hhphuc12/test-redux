import React, { Component, PropTypes } from 'react';
import { delTrack } from "../../actions";

export default class TrackList extends Component {
  onEditClick(track) {
    console.log(track.id);
  }

  onDelClick(id) {
    this.props.dispatch(delTrack(id));
  }

  render() {
    return(
      <div>
        <h3>Track list</h3>
        {
          this.props.tracks.map((track, key) => {
            return (
              <div key={key}>
                Track: {track.title}
                <button onClick={() => this.onEditClick(track.id)}>Edit</button>
                <button onClick={() => this.onDelClick(track.id)}>Delete</button>
              </div>
            );
          })
        }
      </div>
    );
  }
}