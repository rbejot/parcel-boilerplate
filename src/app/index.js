import React, { useState, useEffect} from 'react'
import { render } from 'react-dom'

const App = () => {
  const [count, setCount] = useState(0)

  function handleCountClick(e) {
    e.target.innerHTML = 'Clicked'
    setCount(count + 1)
  }

  useEffect(() => {
    document.title = `${count}`
  })

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={handleCountClick}>
        Click me
      </button>
    </div>
  )
}

var mountNode = document.getElementById("app")
render(<App/>, mountNode)