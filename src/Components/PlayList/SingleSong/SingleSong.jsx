import React, { useState } from "react";
import "./SingleSong.css";
import { FaCirclePlay } from "react-icons/fa6";
import { FaPauseCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

const SingleSong = ({ cover, title, duration, onClick }) => {
  const dispatch = useDispatch();
  const selectedSong = useSelector((state) => state.selecteSong)?.SelectedSong;

  const playbtn = useSelector((state) => state.play).play;

  const handleClick = () => {
    dispatch({ type: playbtn ? "PAUSE" : "PLAY" });
  };

  return (
    <div
      className="songitems"
      onClick={() => {
        onClick();
        // handleClick();
      }}
    >
      <img src={cover} alt="1" />
      <span>{title}</span>
      <div className="songlistplay">
        <div className="timestamp">
          <span>{duration}</span>
          {selectedSong?.title === title ? (
            !playbtn ? (
              <FaCirclePlay onClick={() => handleClick()} />
            ) : (
              <FaPauseCircle onClick={() => handleClick()} />
            )
          ) : (
            <FaCirclePlay onClick={() => handleClick()} />
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleSong;
