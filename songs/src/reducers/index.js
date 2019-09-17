import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "About a Girl", duration: "4:05" },
    { title: "Californication", duration: "2:51" },
    { title: "All Star", duration: "3:15" },
    { title: "Material Girl", duration: "2:29" }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
