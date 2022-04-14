import React from "react";

function ClassPreview({ selectedClass }) {
  let { baseStats, moves } = selectedClass;

  return (
    <>
      <div className="intro_classImg">Insert image here</div>
      <div className="intro_classStatsContainer">
        <p><span className="intro_classStatsHeader">Stats based on scale of 10</span></p>
        <section className="intro_classStatBlock">
          <p><span className="intro_classStatsInfo">Stats:</span></p>
          <p>Agility: {baseStats.agility}</p>
          <p>Health: {baseStats.health}</p>
          <p>MagicAttack: {baseStats.magicAttack}</p>
          <p>MagicDefense: {baseStats.magicDefense}</p>
          <p>PhysicalAttack: {baseStats.physicalAttack}</p>
          <p>PhysicalDefense: {baseStats.physicalDefense}</p>
        </section>
        <section className="intro_classStatBlock">
          <p><span className="intro_classStatsInfo">Moves:</span></p>
          <ul>
            {Object.keys(moves).map((move, i) => {
              return <li key={i}>{move}: {moves[move].attack}</li>;
            })}
          </ul>
        </section>
      </div>
    </>
  );
}

export default ClassPreview;
