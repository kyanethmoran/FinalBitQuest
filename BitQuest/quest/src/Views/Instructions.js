import React from 'react'
import MessageDisplay from '../Components/MessageDisplay'

function Instructions({messages}) {

  const [index, setIndex] = React.useState(0)

 




  return (
    <section className='instructions_container'>
      <article className='instructions_msgDisplay'>
        <MessageDisplay messages={messages} index={index} setIndex={setIndex} />
      </article>
    </section>
  )
}

export default Instructions