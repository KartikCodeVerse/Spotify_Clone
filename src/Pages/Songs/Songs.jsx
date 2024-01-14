import React from "react";
import "./Songs.css";
import SongList from "../../Components/SongList/SongList";


const Songs = () => {
  return (
    <div className="songs_Container">
      <h1>Songs</h1>
      <SongList />
    </div>
  );
};

export default Songs;
