import React, { useEffect, useState } from "react"
import { onNewMessage, onNewUser, addMessage } from "./firebase"
import InputAction from "./InputAction";

function Chat ({ user }) {
  const [messages, setMessages] = useState([])
  const [users, setUsers] = useState([])
  window.messages = messages
  window.users = users

  useEffect(() => {
    const unsubscribeNewMessage = onNewMessage(newMessages => {
      const sortedMessage = [...window.messages, ...newMessages]
        .sort((messageA, messageB) => messageA.time - messageB.time)
      setMessages(sortedMessage)
      goToLastMessage()
    })
    return unsubscribeNewMessage
  }, [])


  useEffect(() => {
    const unsubscribeNewUser = onNewUser(newUsers => {
      setUsers([...window.users, ...newUsers])
    })
    return unsubscribeNewUser
  }, [])

  useEffect(() => {
    window.addEventListener('resize', goToLastMessage)
    return () => {
      window.removeEventListener('resize', goToLastMessage)
    }
  }, [])

  const goToLastMessage = () => {
    const lastMessage = document.querySelector(".chat").lastChild
    if (lastMessage) {
      lastMessage.scrollIntoView()
    }
  }

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
