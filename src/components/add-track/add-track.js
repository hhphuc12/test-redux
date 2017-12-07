import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { addTrack } from "../../actions/index";

export default class AddTrack extends Component {
  render() {
    let input;

    return(
      <div>
        <h3>Add track</h3>
        <form onSubmit={e => {
          e.preventDefault();
          if(!input.value.trim()) return;
          this.props.dispatch(addTrack(input.value));
          input.value = '';
        }}>
          <input ref={node => {
            input = node;
          }} />
          <button type="submit">
            Add track
          </button>
        </form>
      </div>
    );
  }
}