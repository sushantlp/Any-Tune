import { actionTypes } from "../actions/playerAction";

const initialState = { currentSong: null, playlistActive: false };

export function player(state = initialState, action) {
  switch (action.type) {
    case actionTypes.playSong:
      return { ...state, currentSong: action.video };
  }
}
