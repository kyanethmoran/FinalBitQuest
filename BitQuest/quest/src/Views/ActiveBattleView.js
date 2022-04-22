import React from 'react'
import PlayerCard from '../Components/PlayerCard'
import EnemyCard from '../Components/EnemyCard'

function ActiveBattleView({player, enemy}) {
  return (
    <div className='row'>
        <section>
          <PlayerCard player={player} />
        </section>
        <section>
          <EnemyCard enemy={enemy} />
        </section>
      </div>
  )
}

export default ActiveBattleView