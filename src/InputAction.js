import React, { useState } from "react"

function InputAction ({ value, setValue, action, label }) {
  const [_value, _setValue] = useState(value)

  const handleType = (e) => {
    _setValue(e.target.value)
    setValue(e.target.value)
  }

  const enterPress = (e) => {
    if (e.key === "Enter") {
      _action(e)
    }
  }

  const _action = (e) => {
    _setValue("")
    action()
    e.target.focus()
  }

  return (
    <div className="inputAction">
        <input value={_value} onChange={handleType} onKeyPress={enterPress}/>
        <button className="button button-small" onClick={_action}>Envoyer</button>
    </div>
  )
}

export default InputAction
