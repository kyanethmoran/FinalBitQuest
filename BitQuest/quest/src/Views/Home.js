import React, {useState} from 'react'
import Login from '../Components/Login'
import Signup from '../Components/Signup'

function Home({usernames, users, setCurrentUser, currentUser}) {
  console.log(users,'users prop from home')
  const [showLogin, setShowLogin] = useState(true)
  if(showLogin) {
    return (
    <Login setShowLogin={setShowLogin}
           users={users} 
           usernames={usernames} 
           setCurrentUser={setCurrentUser} 
           currentUser={currentUser}
    />
    )
  } else {
    return (
    <Signup setShowLogin={setShowLogin} usernames={usernames} setCurrentUser={setCurrentUser} currentUser={currentUser}/>
    )
  }

}

export default Home