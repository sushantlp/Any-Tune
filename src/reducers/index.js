import { combineReducers } from "redux";

import { trending } from "./trendingReducer";
import { nowPlaying } from "./nowPlayingReducer";
import { player } from "./playerReducer";

export default combineReducers({ trending, nowPlaying, player });
