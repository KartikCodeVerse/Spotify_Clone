import { createStore, combineReducers } from "redux";

const playReducer = (state = { play: false }, action) => {
  if (action.type === "PLAY") {
    return { play: true };
  }
  if (action.type === "PAUSE") {
    return { play: false };
  }
  return state;
};

// const songReducer = (state = { song: "" }, action) => {
//   if (action.type === "SELECT") {
//     return { play: true };
//   }
//   if (action.type === "UNSELECT") {
//     return { play: false };
//   }
//   return state;
// };

const songSelectedReducer = (state = { SelectedSong: "" }, action) => {
  if (action.type === "SELECT") {
    return { SelectedSong: action.payload };
  }
  return state;
};

const rootReducer = combineReducers({
  play: playReducer,
  selecteSong: songSelectedReducer,
});

export const store = createStore(rootReducer);
