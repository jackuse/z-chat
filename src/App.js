import React, { useState, Suspense } from "react"
import Login from "./Login"
import Loader from "./Loader";

const Chat = React.lazy(() => import('./Chat'))

function App () {
  const [isConnected, setIsConnected] = useState(false)
  const [user, setUser] = useState({})

  const login = (user) => {
    setUser(user)
    setIsConnected(true)
  }

  return (
    <div className="container fullscreen">
      { isConnected ? <Suspense fallback={Loader}><Chat user={user} /></Suspense> : <Login onLogin={login} /> }
    </div>
  )
}

export default App
