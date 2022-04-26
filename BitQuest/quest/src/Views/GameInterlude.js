import React, {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'

function GameInterlude() {
    const navigate = useNavigate()
  let battleOutcome = window.sessionStorage.getItem('battleOutcome')
  console.log(battleOutcome, "battle outcome")

  const handlePlayAgain = () => {
    navigate('/Battle')
  }
  const handleReturnSave = () =>{
    navigate('/Saves')
  }

  useEffect(() => {
    let currentGamesPlayed = JSON.parse(window.localStorage.getItem('gamesPlayed'))
    window.localStorage.setItem('gamesPlayed', currentGamesPlayed + 1)
  }, [])
    
  console.log(window.localStorage.getItem('gamesPlayed'), "games played")

  if (battleOutcome === "win") {
  return (
    <div>
      <h1>You Win!</h1>
      <button onClick={handlePlayAgain}>Play Again</button>
      <button onClick={handleReturnSave}>Return to Save Selection</button>
    </div>
  )
  } else if (battleOutcome === "lose") {
  return (
    <div>
      <h1>You Lost</h1>
      <button onClick={handlePlayAgain}>Play Again</button>
      <button onClick={handleReturnSave}>Return to Save Selection</button>
    </div>
  )
  }
}

export default GameInterlude