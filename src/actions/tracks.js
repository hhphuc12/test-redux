import { ActionTypes } from "../core/constants";

let currentId = 2;

export function setTracks(tracks) {
  return {
    type: ActionTypes.TRACKS_SET,
    tracks
  };
}

export function addTrack(title) {
  return {
    type: ActionTypes.TRACKS_ADD,
    id: currentId++,
    title,
  }
}

export function delTrack(id) {
  return {
    type: ActionTypes.TRACKS_DEL,
    id: id,
  }
}