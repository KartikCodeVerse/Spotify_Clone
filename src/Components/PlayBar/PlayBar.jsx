import React, { useEffect, useRef, useState } from "react";
import { HiOutlineSpeakerWave } from "react-icons/hi2";
import "./PlayBar.css";

import { FaPlay } from "react-icons/fa";
import { BiSkipNext } from "react-icons/bi";
import { BiSkipPrevious } from "react-icons/bi";
import { FaPauseCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

const PlayBar = ({ songlist }) => {
  const playbtn = useSelector((state) => state.play).play;

  const selecteSong = useSelector((state) => state.selecteSong)?.SelectedSong;

  const dispatch = useDispatch();
  const [volume, setVolume] = useState(0.5);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState("");
  const audioRef = useRef(null);

  const handleVolumeChange = (event) => {
    const newVolume = parseFloat(event.target.value);
    setVolume(newVolume);
    audioRef.current.volume = newVolume;
  };

  const handleSongClick = () => {
    dispatch({ type: selecteSong && (playbtn ? "PAUSE" : "PLAY") });
  };

  if (selecteSong) {
    if (playbtn) {
      if (!(audioRef.current === null)) {
        audioRef.current.play();
      }
    } else {
      if (!(audioRef.current === null)) {
        audioRef.current.pause();
      }
    }
  }
  const timeUpdateHandler = (e) => {
    setCurrentTime(e.target.currentTime);
  };

  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setCurrentTime(e.target.value);
  };

  function secondsToMinutes(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  }

  const handlePreSong = () => {
    const index = songlist.findIndex(
      (song) =>
        song.title === selecteSong.title && song.singer === selecteSong.singer
    );

    if (index !== -1) {
      if (index > 0) {
        dispatch({ type: "SELECT", payload: songlist[index - 1] });
      } else {
        dispatch({ type: "SELECT", payload: songlist[songlist.length - 1] });
      }
    } else {
      console.log("Song not found in the array");
    }
  };
  const handleNxtSong = () => {
    const index = songlist.findIndex(
      (song) =>
        song.title === selecteSong.title && song.singer === selecteSong.singer
    );
    if (index !== -1) {
      if (songlist.length - 1 > index) {
        dispatch({ type: "SELECT", payload: songlist[index + 1] });
      } else {
        dispatch({ type: "SELECT", payload: songlist[0] });
      }
    } else {
      console.log("Song not found in the array");
    }
  };

  return (
    <div className="Bottom">
      <input
        type="range"
        value={currentTime}
        min="0"
        max={duration}
        onChange={dragHandler}
        name="range"
        id="audio"
      />
      <audio
        autoPlay
        ref={audioRef}
        volume={volume}
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={(e) => {
          // Set duration once metadata is loaded
          setDuration(e.target.duration);
        }}
        src={selecteSong.song}
      />
      <div className="icons">
        <BiSkipPrevious size={"50"} onClick={handlePreSong} />
        {!(selecteSong === "") ? (
          !playbtn ? (
            <FaPlay size={"50"} onClick={() => handleSongClick()} />
          ) : (
            <FaPauseCircle size={"50"} onClick={() => handleSongClick()} />
          )
        ) : (
          <FaPlay size={"50"} onClick={() => handleSongClick()} />
        )}
        <BiSkipNext size={"50"} onClick={handleNxtSong} />
      </div>
      <div className="songinfo">
        {selecteSong.title} - {selecteSong.singer}
      </div>
      <div className="vol_tim">
        <div className="vloume_contr">
          <HiOutlineSpeakerWave size={"30px"} />
          <input
            id="volumeControl"
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={volume}
            onChange={handleVolumeChange}
          />
        </div>

        <div className="timmer">
          {secondsToMinutes(Math.floor(currentTime))}/
          {selecteSong ? selecteSong.duration : "00.00"}
        </div>
      </div>
    </div>
  );
};

export default PlayBar;
