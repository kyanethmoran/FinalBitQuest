import React from 'react'
import PlayerCard from '../Components/PlayerCard'
import EnemyCard from '../Components/EnemyCard'

function ActiveBattleView({player, enemy}) {
  console.log(player, 'player')
  console.log(enemy, 'enemy')

  const [playerHealth, setPlayerHealth] = React.useState(player.baseStats.health);
  console.log(playerHealth, 'player health')
  const [enemyHealth, setEnemyHealth] = React.useState(enemy.health);
  console.log(enemyHealth, 'enemy health')

  const handleAddHealth = () => {
    setPlayerHealth(playerHealth + 10);
  }


  return (
    <div className='row'>
        <section>
          <PlayerCard player={player} playerHealth={playerHealth} />
        </section>
        <section>
          <EnemyCard enemy={enemy} enemyHealth = {enemyHealth} />
        </section>
      </div>
  )
}

export default ActiveBattleView