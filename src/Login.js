import React, { useState } from "react"

import { addUser } from "./firebase"
import { useLocalStorage } from './hooks';

const USER_NAME_STORAGE = "userName"
const USER_COLOR_STORAGE = "userColor"

function Login ({ onLogin = () => {} }) {
  const [name, saveUserName] = useLocalStorage(USER_NAME_STORAGE, '')
  const [color, saveUserColor] = useLocalStorage(USER_COLOR_STORAGE, '#000000')
  const [user, setUser] = useState({ name, color })

  const set = (prop) => (e) => {
    setUser({ ...user, [prop]: e.target.value })
  }

  const login = (e) => {
    e.preventDefault()
    setUser(user)
    addUser(user)
    saveUserName(user.name)
    saveUserColor(user.color)
    onLogin(user)
  }

  return (
    <div className="container">
      <form onSubmit={login} className="login">
        <label>
          Pseudo
          <input value={user.name} onChange={set('name')} />
        </label>
        <label>
          Couleur
          <input type="color" value={user.color} onChange={set('color')} />
        </label>
        <input type="submit" className="button" value="Rejoindre"></input>
      </form>
    </div>
  )
}

export default Login
