import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import Home from "./Views/Home";
import Intro from "./Views/Intro";
import Battle from "./Views/Battle";
import GameInterlude from "./Views/GameInterlude";
import Error from "./Views/Error";
import Instructions from "./Views/Instructions"
import Saves from "./Views/Saves";
import "./App.css";


function App() {
  const usersURL = "https://finalprojectgame-b2bad-default-rtdb.firebaseio.com/.json";
  const [databaseData, setDatabaseData] = useState(null);
  const [player, setPlayer] = useState()
  const usernames = [];
  const messages = [];

  const getUserAccounts = () => {
    axios.get(usersURL).then((res) => {
      setDatabaseData(res.data);
    });
  };

  useEffect(() => {
    getUserAccounts();
  }, []);

  if (databaseData === null) {
    return <div>Loading...</div>;
  } else {
    let { accounts, classes, instructionMsgs, enemies } = databaseData;
    Object.keys(accounts).forEach((key) => {
      usernames.push(key);
    });
    Object.keys(instructionMsgs).forEach((key)=> {
      messages.push(key);
    });

    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home usernames={usernames} users={accounts} />} />
          <Route path="/Intro" element={<Intro classes={classes} setPlayer={setPlayer} player={player} />} />
          <Route path="/Instruction" element={<Instructions messages={messages}/>} />
          <Route path="/Battle" element={<Battle enemiesArray={enemies} player={player}/>} />
          <Route path="/Game" element={<GameInterlude />} />
          <Route path="/Saves" element={<Saves player={player} setPlayer={setPlayer} />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
