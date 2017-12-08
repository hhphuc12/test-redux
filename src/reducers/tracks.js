import { ActionTypes } from "../core/constants";
const initialState = [];

export default function(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.TRACKS_SET:
      return setTracks(state, action);
    case ActionTypes.TRACKS_ADD:
      return addTrack(state, action);
    case ActionTypes.TRACKS_DEL:
      return delTrack(state, action);
    default:
      return state;
  }

  return state;
}

function setTracks(state, action) {
  const { tracks } = action;
  return [...state, ...tracks];
}

function addTrack(state, action) {
  return [...state, {
    id: action.id,
    title: action.title,
  }];
}

function delTrack(state, action) {
  for(let i = 0; i < state.length; i++) {
    if(state[i].id === action.id) {
      state.splice(i, 1);
    }
  }
  return state;
}