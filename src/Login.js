import React, { useState } from "react"
import { addUser } from "./firebase"
import Modal from "./Modal"

function Login ({ onLogin = () => {} }) {
  return (
    <Modal>
      A vous de jouer !
      <button onClick={onLogin}>Rejoindre</button>
    </Modal>
  )
}

export default Login
