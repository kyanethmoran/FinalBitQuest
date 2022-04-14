import React from "react";

function ClassPreview({ selectedClass }) {
  console.log(selectedClass, "class in class preview");
  let { baseStats, moves } = selectedClass;
  console.log(moves);

  return (
    <>
      <div className="intro_classImg">Insert image here</div>
      <div className="intro_classStatsContainer">
        <p>Stats based on scale of 10</p>
        <section className="intro_classStatBlock">
          <p>Stats:</p>
          <p>Agility: {baseStats.agility}</p>
          <p>Health: {baseStats.health}</p>
          <p>MagicAttack: {baseStats.magicAttack}</p>
          <p>MagicDefense: {baseStats.magicDefense}</p>
          <p>PhysicalAttack: {baseStats.physicalAttack}</p>
          <p>PhysicalDefense: {baseStats.physicalDefense}</p>
        </section>
        <section className="intro_classStatBlock">
          <p>Moves:</p>
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
