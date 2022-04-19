import React from 'react'

function EnemyCard({enemy}) {

    let { monsterName, agility, health, magicAttack, magicDefense, physicalAttack, physicalDefense } = enemy;
    console.log(enemy, 'from enemy card')

  return (
    <>
        <div className="card">
            <div className="card-header">
                <h3>{monsterName}</h3>
            </div>
            <div className="card-body">
                <p>Agility: {agility}</p>
                <p>Health: {health}</p>
                <p>Magic Attack: {magicAttack}</p>
                <p>Magic Defense: {magicDefense}</p>
                <p>Physical Attack: {physicalAttack}</p>
                <p>Physical Defense: {physicalDefense}</p>
            </div>
        </div>
    </>
  )
}

export default EnemyCard