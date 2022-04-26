import React from "react";
import HealthCard from "./HealthCard";

function PlayerCard({ player, playerHealth }) {
  //console.log(player, "from playcard");

  let { playerName } = player;
  let { baseStats } = player;
  let {
    agility,
    magicAttack,
    magicDefense,
    physicalAttack,
    physicalDefense
  } = baseStats;

  return (
    <>
      <HealthCard name={playerName} currentHealth={playerHealth} />
    </>
  );
}

export default PlayerCard;
