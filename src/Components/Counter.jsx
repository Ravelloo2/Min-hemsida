import React from 'react'
import { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)
  return (
      <div>
          <h2>Counter</h2>

          <button onClick={() => setCount(count - 1)}>Click here to Decrease the number</button>
          <button onClick={() => setCount(count + 1)}>Click here to Increase the number</button>
          <p>{count}</p>
      </div>
  )
}

export default Counter