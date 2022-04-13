import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import BitQuestHeader from './BitQuestHeader'

export default function Signup({ setShowLogin, usernames, setCurrentUser, currentUser }) {

  const navigate = useNavigate()
  const footer = require('../Media/bitQuestFooter.png')

  const handleBack = () => {
    setShowLogin(true)
  }

  const URL = 'https://finalprojectgame-b2bad-default-rtdb.firebaseio.com/accounts.json'

  const handleSignUp = (e) => {
    e.preventDefault()
    const username = e.target.username.value
    const password = e.target.password.value
    const name = e.target.name.value
    const email = e.target.email.value

    const newUserObj = {
      [username]: {
        "accountDetails": {
          "userName": username,
          "password": password,
          "email": email,
          "name": name
        }
      }
    }

    axios.patch(URL, newUserObj)
      .then(() => {
        console.log('success adding new user')
      })

    setShowLogin(true)
    window.sessionStorage.setItem('currentUser', JSON.stringify(newUserObj))
    console.log(currentUser, 'currentUser in Signup')
    navigate('/Intro')
  }

  console.log(usernames, 'in signup')

  return (
    <div className='signUp_formContainer'>
      <BitQuestHeader />
      <h2>Sign Up</h2>
      <form onSubmit={handleSignUp} >
        <section className='signUp_formFieldsContainer'>
          <div className='row'>
            <div className='column'>
              <input className='signUp_formFields' type="text" name='name' id="name" placeholder="Name" />
            </div>
            <div className='column'>
              <input className='signUp_formFields' type="username" name='username' id="username" placeholder="Username" />    
            </div> 
          </div>
          <div className='row'>
            <div className='column'>
              <input className='signUp_formFields' type="email" name='email' id="email" placeholder="Email" />
            </div>
            <div className='column'>
              <input className='signUp_formFields' type="password" name='password' id="password" placeholder="Password" />
            </div> 
          </div>
        </section>
        <button className='signUp_button'>Sign Up</button>
      </form>
      <div>
        <p>or</p>
      </div>
      <section>
        <button className='signUp_button' onClick={handleBack}>Back</button>
      </section>
      <img src={footer} className='signUp_footer' alt='bitquest picture' />
      
    </div>
  )
}
