import React, { useState, useRef } from "react"

function InputAction ({ value, setValue, action, label }) {
  const [_value, _setValue] = useState(value)

  const handleType = (e) => {
    _setValue(e.target.value)
    setValue(e.target.value)
  }

  const enterPress = (e) => {
    if (e.key === "Enter") {
      _action(e.target.value)
    }
  }

  const _action = (value) => {
    if (value) {
      _setValue("")
      action()
    }
  }
  
  const inputRef = useRef(null)
  const stayFocus = () => {
    inputRef.current.focus()
  }

  return (
    <div className="inputAction">
        <input ref={inputRef} value={_value} onChange={handleType} onKeyPress={enterPress} onBlur={stayFocus}/>
        <button className="button button-small" onClick={_action}>Envoyer</button>
    </div>
  )
}

export default InputAction
