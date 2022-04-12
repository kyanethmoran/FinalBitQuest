import React from 'react'

function Intro({ classes }) {
  let currentUser = JSON.parse(sessionStorage.getItem('currentUser'))
  console.log(currentUser)


  return (
    <div className='intro_container'>
      <section className='intro_classHeader'>
        <h2>Select a class: </h2>
        <ul className='intro_classListContainer'>
          <li><button className='intro_classListButton'>Mage</button></li>
          <li><button className='intro_classListButton'>Fighter</button></li>
          <li><button className='intro_classListButton'>Rouge</button></li>
          <li><button className='intro_classListButton'>Jester</button></li>
          <li><button className='intro_classListButton'>Ogre</button></li>
        </ul>
      </section>
      <section className='intro_classInfoContainer'>
        <div className='intro_classImg'>
          Insert image here
        </div>
        <div className='intro_classStatsContainer'>
          <p>Stats based on scale of 10</p>
          <section className='intro_classStatBlock'>
            <h3>Stats:</h3>
          </section>
          <section className='intro_classStatBlock'>
            <h3>Moves:</h3>
          </section>
        </div>


      </section>

      


    </div>

  )
}

export default Intro