import React, { useState } from 'react'
const App = () => {
  const [Num, setNum] = useState(10)
  const [User, setUser] = useState("Sahil")
  function changenum(){
    setNum(90)
    setUser("Harsh")
  }
  return (
  <div>
    <h1>The Value of Num is {Num} <br/> The value of user Name is {User}</h1>
    <button onClick={changenum}> Click </button>
    </div>
  )
}

export default App