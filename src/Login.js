import React, { useState } from "react"
import { addUser } from "./firebase"

function Login ({ onLogin = () => {} }) {
  const USER_NAME_STORAGE = "userName"
  const USER_COLOR_STORAGE = "userColor"
  const userName = window.localStorage.getItem(USER_NAME_STORAGE) || ""
  const userColor = window.localStorage.getItem(USER_COLOR_STORAGE) || "#000000"
  const [user, setUser] = useState({ name: userName, color: userColor })

  const set = (prop) => (e) => {
    setUser({ ...user, [prop]: e.target.value })
  }

  const login = (e) => {
    e.preventDefault()
    setUser(user)
    addUser(user)
    window.localStorage.setItem(USER_NAME_STORAGE, user.name)
    window.localStorage.setItem(USER_COLOR_STORAGE, user.color)
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
