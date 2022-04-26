import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar'

function HealthCard({name, currentHealth}) {
  return (
    <>
        <h2>{name}</h2>
        <ProgressBar now={currentHealth} />
        <button>down by 10</button>
    </>
  )
}

export default HealthCard