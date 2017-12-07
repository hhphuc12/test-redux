import React, { Component, PropTypes } from 'react';

export default class TrackList extends Component {
  onEditClick(track) {
    console.log(track.id);
  }

  onDelClick(track) {
    console.log(track.id);
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
                <button onClick={() => this.onEditClick(track)}>Edit</button>
                <button onClick={() => this.onDelClick(track)}>Delete</button>
              </div>
            );
          })
        }
      </div>
    );
  }
}