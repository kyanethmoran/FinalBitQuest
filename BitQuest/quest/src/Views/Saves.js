import React from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Saves({setPlayer, player}) {
  const navigate = useNavigate();
  let currentUser = JSON.parse(window.sessionStorage.getItem("currentUser"));
  let username = window.sessionStorage.getItem("username")
  console.log(username, "username")
  //console.log(currentUser, "currentUser");
  let { characterSaves } = currentUser;
  console.log(currentUser)

  let handleClick = (e) => {
      let saveName = e.target.id;
      //console.log(saveName, "save name");
      //console.log(characterSaves[saveName], "character saves");
      setPlayer({...characterSaves[saveName], playerName: username});
      //console.log('current player is', player)
      navigate("/Instruction")

      
  }

  return (
    <>
      <h1 className="save_header">{username}'s Saves</h1>
      <section className="save_cardContainer">
      {Object.keys(characterSaves).map((saveName, index) => {
        return (
          <div key={index}>
            <div className= "save_card">
              <img src="" alt="character img" className="save_image"/>
              <div className="save_infoContainer">
                <h2 className ="save_title">{saveName}</h2>
                <p><span className="save_infoBold">CLASS:</span></p>
                <p><span className="save_infoBold">XP:</span></p>
                <p><span className="save_infoBold">WINS:</span></p>
                <p><span className="save_infoBold">LOSSES:</span></p>
              </div>
            </div>
            <button onClick={handleClick} id={saveName}>Load</button>
          </div>
        );
      })}
      </section>
      <section className="save_buttonContainer">
        <Link to="/Intro"><button>Create New Character</button></Link>
      </section>
    </>
  );
}
