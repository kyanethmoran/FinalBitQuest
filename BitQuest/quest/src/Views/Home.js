import React, {useState} from 'react'
import Login from '../Components/Login'
import Signup from '../Components/Signup'

function Home({usernames, users}) {
  console.log(users,'users prop from home')
  const [showLogin, setShowLogin] = useState(true)
  if(showLogin) {
    return (
    <Login setShowLogin={setShowLogin} users={users}/>
    )
  } else {
    return (
    <Signup setShowLogin={setShowLogin} usernames={usernames}/>
    )
  }

}

export default Home