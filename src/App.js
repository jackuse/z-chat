import React from "react"
import Login from "./Login"
import Chat from "./Chat"

function App () {
  const isConnected = false
  const user = { name: "Albert", color: "#000000" }
  const login = () => {}

  return (
    <div className="container fullscreen">
      { isConnected ? <Chat user={user} /> : <Login onLogin={login} /> }
    </div>
  )
}

export default App
