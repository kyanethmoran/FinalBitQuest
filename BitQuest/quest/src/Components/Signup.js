import React from 'react'

export default function Signup({setShowLogin, usernames}) {

const handleBack = () => {
    setShowLogin(true)
}

console.log(usernames, 'in signup')

  return (
    <div>
        <h2>Sign Up</h2>
        <form>
            <input type="text" id="name" placeholder="Name" />
            <input type="text" id="email" placeholder="Email" />
            <input type="text" id="username" placeholder="Username" />
            <input type="text" id="password" placeholder="Password" />
        </form>
        <button>Sign Up</button>
        <button onClick={handleBack}>Back</button>
    </div>
  )
}
