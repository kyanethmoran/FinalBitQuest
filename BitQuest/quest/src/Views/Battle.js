import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import PlayerCard from "../Components/PlayerCard";
import EnemyCard from "../Components/EnemyCard";

function Battle({ enemiesArray, player }) {
  let navigate = useNavigate();
  const [currentEnemy, setCurrentEnemy] = useState(null);

  let index = null;
  let getRandomIndex = () => {
    return Math.floor(Math.random() * enemiesArray.length);
  };

  useEffect(() => {
    index = getRandomIndex();
    setCurrentEnemy(enemiesArray[index]);
  }, []);

  if (currentEnemy === null) {
    return (
      <div>
        <h1>Loading....</h1>
      </div>
    );
  } else if (player === undefined) {
    return (
      <div>
        <h1>NO CHARACTER SELECTED</h1>
        <button onClick={() =>{navigate('/Saves')}}>Selection Page</button>
      </div>
    );
  } else {
    return (
      <div>
          <PlayerCard player={player} />
          <hr />
          <EnemyCard enemy={currentEnemy} />
      </div>
    );
  }
}

export default Battle;
