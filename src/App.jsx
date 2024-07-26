import React from "react"
import StartGame from "./Component/StartGame"
import { useState } from "react"
import Gameplay from "./Component/Gameplay"


function App() {
  const [gameStart, setGameStart]=useState(false)

  const toggleGameStart=()=>{
      setGameStart((prev)=>!prev)
  }



  return (
    <>
      {gameStart ? <Gameplay/> : <StartGame toggle={toggleGameStart} />}
    </>
  )
}

export default App
