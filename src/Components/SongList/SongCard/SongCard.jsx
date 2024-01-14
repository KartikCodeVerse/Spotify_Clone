import React from "react";
import "./SongCard.css";

const SongCard = ({ song }) => {
  return (
    <div className="songCard_Container">
      <div className="song_cover">
        <img src={song.cover} alt="cover_img" />
      </div>
      <h3>{song.title}</h3>
      <p>{song.singer}</p>
    </div>
  );
};

export default SongCard;
