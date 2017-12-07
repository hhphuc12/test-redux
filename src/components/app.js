import React, { Component } from 'react';
import TrackList from './track-list/index';
import TrackAdd from './add-track/index';

class App extends Component {
  render() {
    return (
      <div>
        <TrackAdd/>
        <TrackList/>
      </div>
    );
  }
}

export default App;
