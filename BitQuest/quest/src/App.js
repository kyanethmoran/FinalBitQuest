import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import axios from "axios";
import Home from "./Views/Home";
import Intro from "./Views/Intro";
import Battle from "./Views/Battle";
import GameInterlude from "./Views/GameInterlude";
import Error from "./Views/Error";
import BitQuestHeader from "./Components/BitQuestHeader";
import "./App.css";
import Login from "./Components/Login";
import Signup from "./Components/Signup";

const usersURL =
  "https://finalprojectgame-b2bad-default-rtdb.firebaseio.com/.json";

function App() {
  const [databaseData, setDatabaseData] = useState(null);
  const usernames = [];

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
    let { accounts, classes, instructionMsgs } = databaseData;
    Object.keys(accounts).forEach((key) => {
      usernames.push(key);
    });
    console.log(usernames, "usernames");

    return (
      <Router>
        <BitQuestHeader />
        <Routes>
          <Route
            path="/"
            element={<Home usernames={usernames} users={accounts} />}
          />
          <Route path="/Intro" element={<Intro />} />
          <Route path="/Battle" element={<Battle />} />
          <Route path="/Game" element={<GameInterlude />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <hr></hr>
        test components below
      </Router>
    );
  }
}

export default App;
