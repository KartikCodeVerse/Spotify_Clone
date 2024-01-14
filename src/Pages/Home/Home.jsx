import { useState } from "react";
import { songlist2 } from "../../assets/Json/songlist2";
import PlayList from "../../Components/PlayList/PlayList";
import PlayBar from "../../Components/PlayBar/PlayBar";
const Home = () => {
  return (
    <div>
      <PlayList songlist={songlist2} />
      <PlayBar songlist={songlist2} />
    </div>
  );
};

export default Home;
