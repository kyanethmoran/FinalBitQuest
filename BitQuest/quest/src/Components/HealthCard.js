import React from 'react'
import { LinearProgress } from '@mui/material';



function HealthCard({name, currentHealth}) {
  // console.log(currentHealth, 'current health')
  // console.log(LinearProgress, 'progress bar')
  return (
    <>
        <h2>{name}</h2>
    
        <LinearProgress variant="determinate" value={currentHealth} />
        
    </>
  )
}

export default HealthCard