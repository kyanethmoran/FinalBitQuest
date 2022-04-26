import React from "react";

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
      <h2>{playerName}</h2>
      <h3>Health</h3>
      <h4>{playerHealth}</h4>
      <h3>Agility</h3>
      <h4>{agility}</h4>
      <h3>Magic Attack</h3>
      <h4>{magicAttack}</h4>
      <h3>Magic Defense</h3>
      <h4>{magicDefense}</h4>
      <h3>Physical Attack</h3>
      <h4>{physicalAttack}</h4>
      <h3>Physical Defense</h3>
      <h4>{physicalDefense}</h4>
    </>
  );
}

export default PlayerCard;
