import React, { useState, useRef } from "react"

function InputAction ({ action, label }) {
  const [value, setValue] = useState('')

  const handleType = (e) => {
    setValue(e.target.value)
  }

  const enterPress = (e) => {
    if (e.key === "Enter") {
      _action()
    }
  }

  const _action = () => {
    if (value) {
      setValue("")
      action(value)
    }
  }

  const inputRef = useRef(null)
  const stayFocus = () => inputRef.current.focus()

  return (
    <div className="inputAction">
      <input
        ref={inputRef}
        value={value}
        onChange={handleType}
        onKeyPress={enterPress}
        onBlur={stayFocus}
      />
      <button className="button button-small" onClick={_action}>
        {label}
      </button>
    </div>
  )
}

export default InputAction
