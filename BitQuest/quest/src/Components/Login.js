import React from 'react'
import {useNavigate} from 'react-router-dom'

function Login({setShowLogin, setCurrentUser, currentUser, users, usernames}) {

  const navigate = useNavigate()

  const handleSignUp = () => {
    setShowLogin(false)
  }
  
  const handleLogin = (e) => {
    e.preventDefault()
    let username = e.target.username.value
    let password = e.target.password.value
    console.log('login', username, password)

    if(usernames.includes(username)) {
      console.log('valid request')
      window.sessionStorage.setItem('currentUser', JSON.stringify(users[username]))
      navigate('/Intro')
    }else {
      console.log('invalid request')

    }
    console.log(window.sessionStorage.getItem('currentUser'))
  }

  return (
    <div>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
            <input type="text" placeholder="Username" name='username'></input>
            <input type="password" placeholder='Password' name='password'></input>
            <button>Login</button> 
        </form>
        <section>
            <p>or</p>
            <button onClick={handleSignUp}>Sign Up</button>
        </section>
    </div>
  )
}

export default Login