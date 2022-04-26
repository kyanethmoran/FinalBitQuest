import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom";

function HUD({ turn, playerMoves, setEnemyHealth, enemyHealth, setTurn, playerHealth, setPlayerHealth}) {
const navigate = useNavigate();
//   console.log(playerMoves, "player moves");

const handleMoveSelection = (e) => {
    let move = e.target.innerHTML
    let damage = playerMoves[move].attack
    setEnemyHealth(enemyHealth - damage)
    setTurn("enemy");
}

const handleEnemyTurn = () => {
    console.log("should be updating the turn")
    setTurn('player')
}

useEffect(() => {
    if(enemyHealth <= 0){
        navigate("/PostGame");
    }
    if (turn === "enemy") {
        let enemyAttack = 10
        setTimeout(() => {
            setPlayerHealth(playerHealth - enemyAttack)
            handleEnemyTurn()
        }, 3000)
    }
}, [turn])

  if (turn === "player") {
    return (
    <div>
      <h2>Player's Turn</h2>
      <div>
        {Object.keys(playerMoves).map(move => (
          <button onClick={handleMoveSelection} key={move}>{move}</button>
        ))}
      </div>
    </div>
    );
  } else if (turn === "enemy") {
      let enemyAttack = 10
      //handleEnemyTurn(enemyAttack, playerHealth)
  
    return <div>Enemy did {enemyAttack} damage</div>;
  }
  else {
    return <div>Error</div>;
  }
}

export default HUD;
