import React, { useState } from "react"
import { addUser } from "./firebase"
import Modal from "./Modal";

function Login ({ onLogin = () => {} }) {
  const USER_NAME_STORAGE = "userName"
  const USER_COLOR_STORAGE = "userColor"
  const userName = window.localStorage.getItem(USER_NAME_STORAGE) || ""
  const userColor = window.localStorage.getItem(USER_COLOR_STORAGE) || "#000000"
  const [user, setUser] = useState({ name: userName, color: userColor })

  const setUserName = (e) => {
    const name = e.target.value
    setUser({ name, color: user.color })
  }

  const setUserColor = (e) => {
    const color = e.target.value
    setUser({ name: user.name, color }) 
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
    <Modal>
      <form onSubmit={login}>
        <label>
          Pseudo
          <input value={user.name} onChange={setUserName} />
        </label>
        <label>
          Couleur
          <input type="color" value={user.color} onChange={setUserColor} />
        </label>
        <input type="submit" className="button" value="Rejoindre"></input>
      </form>
    </Modal>
  )
}

export default Login
