import React from 'react'

function Login({setShowLogin, users}) {

  const handleSignUp = () => {
    setShowLogin(false)
  }
  
  const handleLogin = (e) => {
    e.preventDefault()
    let username = e.target.username.value
    let password = e.target.password.value
    console.log('login')
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