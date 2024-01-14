import React, { useEffect, useState } from "react";
import SingleSong from "./SingleSong/SingleSong";
import "./PlayList.css";
import { useDispatch, useSelector } from "react-redux";

const PlayList = ({ songlist }) => {
  const dispatch = useDispatch();
  const selecteSong = useSelector((state) => state.selecteSong)?.SelectedSong;

  return (
    <div className="Container">
      <div className="songlist">
        <h1>Most Liked Songs Of 2023 -- English Songs</h1>
        <div className="songitemcontainer">
          {songlist?.map((song, i) => {
            return (
              <SingleSong
                key={i}
                cover={song.cover}
                title={song.title}
                duration={song.duration}
                onClick={() => {
                  dispatch({ type: "SELECT", payload: song });
                  song.title === selecteSong.title
                    ? ""
                    : dispatch({
                        type: "PLAY",
                      });
                }}
              />
            );
          })}
        </div>
      </div>
      <div className="songbanner"></div>
    </div>
  );
};

export default PlayList;
