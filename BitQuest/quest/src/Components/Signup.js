import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Signup({ setShowLogin, usernames, setCurrentUser, currentUser }) {

  const navigate = useNavigate()

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
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSignUp}>
        <input type="text" name='name' id="name" placeholder="Name" />
        <input type="email" name='email' id="email" placeholder="Email" />
        <input type="username" name='username' id="username" placeholder="Username" />
        <input type="password" name='password' id="password" placeholder="Password" />
        <button>Sign Up</button>
      </form>
      <button onClick={handleBack}>Back</button>
    </div>
  )
}
