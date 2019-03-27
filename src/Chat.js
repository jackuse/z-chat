import React from "react"

import { useFirebaseList, useEvent } from './hooks';
import { onNewMessage, onNewUser, addMessage } from "./firebase"
import InputAction from "./InputAction";

const goToLastMessage = () => {
  const lastMessage = document.querySelector(".chat").lastChild
  if (lastMessage) {
    lastMessage.scrollIntoView()
  }
}

function Chat ({ user }) {
  let messages = useFirebaseList(onNewMessage, goToLastMessage)
  messages = messages.sort((msgA, msgB) => msgA.time - msgB.time)
  const users = useFirebaseList(onNewUser);

  useEvent('resize', goToLastMessage);

  const getColor = (userName) => {
      const user = users.find(({ name }) => userName === name);
      const color = user ? user.color : '#000000';
      return { color };
  }

  const sendMessage = (message) => {
    addMessage({ time: new Date().getTime(), user: user.name, message })
  }

  return (
    <div className="container">
      <div className="chat">
        { messages.map(({ time, user: userName, message }) => (
          <div key={time}>
            <strong style={getColor(userName)}>{userName}</strong> : {message}
          </div>
        )) }
      </div>
      <InputAction action={sendMessage} label="Envoyer" />
    </div>
  )
}

export default Chat
