import React from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Saves({setPlayer, player}) {
  const navigate = useNavigate();
  let currentUser = JSON.parse(window.sessionStorage.getItem("currentUser"));
  let { characterSaves } = currentUser;

  console.log(characterSaves, "character saves");

  let handleClick = (e) => {
      let saveName = e.target.innerText
      setPlayer(characterSaves[saveName])
      console.log('current player is', player)
      navigate("/Instruction")

      
  }

  return (
    <>
      <h1>Saves</h1>
      {Object.keys(characterSaves).map((saveName, index) => {
        return (
          <div key={index}>
            <h2 onClick={handleClick}>{saveName}</h2>
          </div>
        );
      })}
      <Link to="/Intro"><button>Create New Character</button></Link>
    </>
  );
}
