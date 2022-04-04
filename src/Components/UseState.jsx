import React, { useState } from 'react'

const UseState = () => {
    const [inputValue, setInputValue] = useState('')
  return (
    <div>
        <h2>UseState</h2>
        <p>Den här usestaten kommer att skriva ut vad du skriver i input fältet</p>
        <input onChange={e => setInputValue(e.target.value)}></input>
        <p>{inputValue}</p>
    </div>
  )
}

export default UseState