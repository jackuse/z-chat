import React, { useState, Suspense } from "react"

import Loader from "./Loader";

const Chat = React.lazy(() => import('./Chat'))
const Login = React.lazy(() => import('./Login'))

function App () {
  const [user, setUser] = useState(null)

  const Component = user
    ? <Chat user={user} />
    : <Login onLogin={setUser} />

  return <Suspense fallback={Loader}>{Component}</Suspense>
}

export default App
