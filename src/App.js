import React, { useState } from "react"
import Chat from "./Chat"
import Login from "./Login"

function App () {
  const [isConnected, setIsConnected] = useState(false)
  const [user, setUser] = useState({})

  const login = (user) => {
    setUser(user)
    setIsConnected(true)
  }

  return (
    <div className="container fullscreen">
      { isConnected ? <Chat user={user} /> : <Login onLogin={login} /> }
    </div>
  )
}

export default App
