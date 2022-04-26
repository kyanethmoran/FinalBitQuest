import React from 'react'
import HealthCard from './HealthCard'

function EnemyCard({enemy, enemyHealth, maxHealth}) {

    let { monsterName, agility, magicAttack, magicDefense, physicalAttack, physicalDefense } = enemy;
    //console.log(enemy, 'from enemy card')

    let progressbarpercentage = (enemyHealth/maxHealth)* 100 

  return (
    <>
        
        <HealthCard name={monsterName} currentHealth={progressbarpercentage} />  
    </>
  )
}

export default EnemyCard