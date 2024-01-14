import React from "react";
import SongCard from "./SongCard/SongCard";
import "./SongList.css";
import { songlist } from "../../assets/Json/songlist";

const SongList = () => {
  return (
    <div className="Songlist_Container">
      {songlist.map((song, i) => {
        return <SongCard key={i} song={song} />;
      })}
    </div>
  );
};

export default SongList;
