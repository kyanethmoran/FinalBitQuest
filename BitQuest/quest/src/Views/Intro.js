import React from 'react'

function Intro({ classes }) {
  let currentUser = JSON.parse(sessionStorage.getItem('currentUser'))
  console.log(currentUser)


  return (
    <div>
      <section>
        <h2>Select a class: </h2>
        <ul>
          <li><h4>Mage</h4></li>
          <li><h4>Fighter</h4></li>
          <li><h4>Rouge</h4></li>
          <li><h4>Jester</h4></li>
          <li><h4>Ogre</h4></li>
        </ul>
      </section>
      <section>
        <div>
          Insert image here
        </div>
        <div>
          Stats based on scale of 10
          <section>
            <h3>Stats:</h3>
          </section>
          <section>
            <h3>Moves:</h3>
          </section>
        </div>


      </section>

      


    </div>

  )
}

export default Intro