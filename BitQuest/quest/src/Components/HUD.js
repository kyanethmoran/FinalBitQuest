import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function HUD({ turn, playerMoves, setEnemyHealth, enemyHealth, setTurn, playerHealth, setPlayerHealth, enemyAttack}) {
  const navigate = useNavigate();
  const getRandomMultiplier = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };
  const [enemyDamage, setEnemyDamage] = useState(enemyAttack * getRandomMultiplier(1,10));

  const handleMoveSelection = (e) => {
    let move = e.target.innerHTML;
    let damage = playerMoves[move].attack;
    setEnemyHealth(enemyHealth - damage);
    setTurn("enemy");
  };

  const handleHeal =()=>{
    let newHealth = playerHealth + getRandomMultiplier(10, 40);
    if(newHealth > 100){
      newHealth = 100;
    }
    setPlayerHealth(newHealth)
    console.log(playerHealth, "playerHealth after heal")
    setTurn("enemy");
  }

  const handleEnemyTurn = () => {
    setTurn("player");
  };

  useEffect(() => {
    let enemyMultiplier = getRandomMultiplier(1, 10);
    let damage = enemyAttack * enemyMultiplier;
    if (enemyHealth <= 0) {
      window.sessionStorage.setItem("battleOutcome", "win");
      navigate("/PostGame");
    }
    if (playerHealth <= 0) {
      window.sessionStorage.setItem("battleOutcome", "lose");
      navigate("/PostGame");
    }
    if (turn === "enemy") {
      setEnemyDamage(damage);
      console.log(enemyDamage, "enemyDamage");
      setPlayerHealth(playerHealth - (enemyDamage));
      setTimeout(() => {
        handleEnemyTurn();
      }, 1500);
    }
  }, [turn]);

  if (turn === "player") {
    return (
      <div>
        <h2>Player's Turn</h2>
        <div>
          <button onClick={handleHeal}>Heal</button>
          {Object.keys(playerMoves).map((move) => (
            <button onClick={handleMoveSelection} key={move}>
              {move}
            </button>
          ))}
        </div>
      </div>
    );
  } 
  else if (turn === "enemy") {
    console.log(playerHealth, "playerHealth")
    if(playerHealth <= 30){
        return (
          <div>
            <h1>You've been hit</h1>
            <h1>YOU SUCK</h1>
          </div>
        )
    }
    else if(playerHealth <=50){
        return (
          <div>
            <h1>You've been hit</h1>
            <h1>YOU SHOULD HEAL</h1>
          </div>
        )
    }
    else {
        return (
          <div>
            <h1>You've been hit</h1>
          </div>
        )
    }
  } 
  else {
    return <div>Error</div>;
  }
}

export default HUD;
