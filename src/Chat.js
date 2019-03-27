import React from "react"

import { useEvent } from './hooks';
import InputAction from "./InputAction";

const goToLastMessage = () => {
  const lastMessage = document.querySelector(".chat").lastChild
  if (lastMessage) {
    lastMessage.scrollIntoView()
  }
}

function Chat ({ user }) {
  useEvent('resize', goToLastMessage);


  return (
    <div className="container">
      <div className="chat">
        Miaou ?
      </div>
      <InputAction label="Envoyer" />
    </div>
  )
}

export default Chat
