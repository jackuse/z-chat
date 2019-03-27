import React, { useState } from "react"

import Chat from './Chat';
import Login from './Login';

function App () {
  const [user, setUser] = useState(null)

  return user
    ? <Chat user={user} />
    : <Login onLogin={setUser} />
}

export default App
