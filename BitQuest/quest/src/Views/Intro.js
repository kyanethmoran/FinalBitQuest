import React, {useState} from 'react'
import ClassPreview from '../Components/ClassPreview'

function Intro({classes}) {
  let currentUser = JSON.parse(sessionStorage.getItem('currentUser'))
  console.log(currentUser, 'currentUser in Intro View')
  
  let { fighterClass, jesterClass, orgreClass, rogueClass, wizardClass } = classes
  
  let [selectedClass, setSelectedClass] = useState(wizardClass)

  const handleClassSelection = (e) => {
    console.log(e.target.innerHTML)
    switch (e.target.innerHTML) {
      case 'Fighter':
        setSelectedClass(fighterClass)
        break
      case 'Jester':
        setSelectedClass(jesterClass)
        break
      case 'Orgre':
        setSelectedClass(orgreClass)
        break
      case 'Rouge':
        setSelectedClass(rogueClass)
        break
      case 'Wizard':
        setSelectedClass(wizardClass)
        break
      default:
        setSelectedClass(wizardClass)
        break
    }
  }

  return (
    <div className='intro_container'>
      <section className='intro_classHeader'>
        <h2>Select a class: </h2>
        <ul className='intro_classListContainer'>
          <li onClick={handleClassSelection} className='intro_classListButton'>Wizard</li>
          <li onClick={handleClassSelection} className='intro_classListButton'>Fighter</li>
          <li onClick={handleClassSelection} className='intro_classListButton'>Rouge</li>
          <li onClick={handleClassSelection} className='intro_classListButton'>Jester</li>
          <li onClick={handleClassSelection} className='intro_classListButton'>Ogre</li>
        </ul>
      </section>

      <section className='intro_classInfoContainer'>
        
        <ClassPreview selectedClass={selectedClass}/>

      </section>

      


    </div>

  )
}

export default Intro