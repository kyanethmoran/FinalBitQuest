import React from "react";
import {useNavigate} from 'react-router-dom'

function MessageDisplay({ index, setIndex, messages }) {
  const navigate = useNavigate();
  const msgArry = ['Welcome, player', "BitQuest is a turn based game.....", "KILL JOHN LENNON", "Since this is the last message in the array it needs to render a play button"];

  let handleNext = () => {
    setIndex(index + 1)
  }
  let handleBack = () => {
    setIndex(index - 1)
  }

  
  if (index > msgArry.length - 1 || index < 0) {
    setIndex(0);
  }

  if(index === msgArry.length - 1) {
    return (
      <div className="messageDisplay_finalContainer">
      <div className="messageDisplay_textContainer">
          <p>{msgArry[index]}</p>
        </div>
      <section className='instructions_buttonsContainer'>
            <button className='instructions_button' onClick={() => { navigate('/Battle')}}>Play</button>
        </section>
      </div>
    )
  }
  else if(index === 0) {
    return (
      <div className="messageDisplay_container">
        <div className="messageDisplay_textContainer">
          <p>{msgArry[index]}</p>
        </div>
        <section className='instructions_buttonsContainer'>
            <button className='instructions_button' onClick={handleNext}>Next </button>
        </section>
      </div>
    )
  }
  else{
    return(
      <div className="messageDisplay_container">
        <div className="messageDisplay_textContainer">
          <p>{msgArry[index]}</p>
        </div>
        <section className='instructions_buttonsContainer'>
            <button className='instructions_button' onClick={handleBack}> Back</button>
            <button className='instructions_button' onClick={handleNext}>Next </button>
        </section>
      </div>
    )
  }
}

export default MessageDisplay;
