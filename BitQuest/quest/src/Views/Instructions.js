import React from 'react'
import MessageDisplay from '../Components/MessageDisplay'

function Instructions({messages}) {

  const [index, setIndex] = React.useState(0)

  // let handleNext = () => {
  //   setIndex(index + 1)
  // }
  // let handleBack = () => {
  //   setIndex(index - 1)
  // }




  return (
    <section className='instructions_container'>
      <article className='instructions_msgDisplay'>
        <MessageDisplay messages={messages} index={index} setIndex={setIndex} />
      </article>
      {/* <section className='instructions_buttonsContainer'>
        <button className='instructions_button' onClick={handleBack}> Back</button>
        <button className='instructions_button' onClick={handleNext}>Next </button>
      </section> */}
    </section>
  )
}

export default Instructions