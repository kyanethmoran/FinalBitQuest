import React, { useState } from "react";
import PlayerCard from "../Components/PlayerCard";
import EnemyCard from "../Components/EnemyCard";
import HUD from "../Components/HUD"

function ActiveBattleView({ player, enemy }) {
  console.log(player, "player from ActiveBattleView");
  let {moves} = player;
  // console.log(enemy, "enemy");

  const [playerHealth, setPlayerHealth] = useState(player.baseStats.health);
  const [enemyHealth, setEnemyHealth] = useState(enemy.health);
  const [turn, setTurn] = useState("player");

  const handleSubtractEnemyHealth = () => {
    setEnemyHealth(enemyHealth - 10);
  };
  const handleSubtractHealth = () => {
    setPlayerHealth(playerHealth - 10);
  };
  const handleTurn = () => {
    if (turn === "player") {
      setTurn("enemy");
    } else {
      setTurn("player");
    }
  }

  return (
    <>
      <div className="row">
        <section style={{ margin: "60px" }}>
          <PlayerCard playerHealth={playerHealth} />
        </section>

        <section style={{ margin: "60px" }}>
          <EnemyCard
            enemy={enemy}
            enemyHealth={enemyHealth}
            maxHealth={enemy.health}
          />
        </section>
      </div>
      <section>
        <HUD enemyAttack={enemy.physicalAttack} playerHealth={playerHealth} setPlayerHealth={setPlayerHealth} turn={turn} setTurn={setTurn} playerMoves={moves} setEnemyHealth={setEnemyHealth} enemyHealth={enemyHealth}/>
      </section>
    </>
  );
}

export default ActiveBattleView;
