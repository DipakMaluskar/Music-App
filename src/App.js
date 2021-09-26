import { useState } from "react";
import "./styles.css";

const songsDB = {
  retro: [
    {
      music: "Chura Liya Yaadon Ki Baaraat",
      singer: "Suraj Jagan",
      rating: "4/5"
    },
    { music: "Lag Ja Gale - Sanam", singer: "Sanam", rating: "4/5" },
    { music: "Breathless", singer: "Shankar Mahadevan", rating: "4.2/5" },
    { music: "Pal Pal Dil Ke Paas ", singer: "Mohammed Irfan", rating: "4/5" },
    {
      music: "Kya Yahi Pyar Hai ",
      singer: "Meiyang Chang Shashaa Tirupati R. D. Burman",
      rating: "3.9/5"
    }
  ],

  indipop: [
    { music: "ADR/ABR", singer: "EPR Iyer", rating: "4.6/5" },
    { music: "Movez", singer: "Shez", rating: "4.6/5" },
    { music: "Paristhiti", singer: "MC Heam", rating: "4.5/5" },
    { music: "Shot Cypher", singer: "Yung Nos", rating: "4.3/5" },
    { music: "Gangstar", singer: "King", rating: "4.3/5" }
  ],

  punjabi: [
    {
      music: "Mere Warga",
      singer: "Kaka",
      rating: "4.6/5"
    },
    {
      music: "Focus",
      singer: "Sukh-E Musical Doctorz",
      rating: "4.5/5"
    },
    {
      music: "Bismillah",
      singer: "Amrit Maan",
      rating: "4.5/5"
    },
    { music: "Nain Bengali", singer: "Guru Randhawa", rating: "4.5/5" },
    {
      music: "Paagla",
      singer: "Akhil",
      rating: "4.4/5"
    }
  ]
};

var songsList = Object.keys(songsDB);

export default function App() {
  const [selectType, setSelectType] = useState("retro");

  function songTypeClickHnadler(songType) {
    setSelectType(songType);
  }
  return (
    <div className="App">
      <h1>Top 5 Songs</h1>
      <h2>Check out best songs!!</h2>
      <div>
        {songsList.map(function (songType) {
          return (
            <button onClick={() => songTypeClickHnadler(songType)}>
              {songType}
            </button>
          );
        })}
        <hr />
      </div>
      <div className="output">
        <ul>
          {songsDB[selectType].map(function (songType) {
            return (
              <li>
                <div>Song : {songType.music}</div>
                <div>singer : {songType.singer}</div>
                <div>rating : {songType.rating}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
