import React, { useState } from 'react'
import Score from './Score'
import Numberselector from './Numberselector'
import Rolldice from './Rolldice'
import Button from './Button'
import Rules from './Rules'

function Gameplay() {
  const [selectedNumber,setSelectedNumber]=useState(null)
  const[score , setScore]=useState(0)
  const[rule,setrule]=useState(false)

  const showRule=()=>{
    setrule((prev)=>!prev)
  }

  const handleRoll=(diceNumber)=>{
    if(selectedNumber===null){
      return
    }
    if(diceNumber==selectedNumber){
      setScore(score + diceNumber)

    }
    else{
      setScore(score-selectedNumber)

    }
      

  } 

  const resetScore=()=>{
    setScore(0)
  }
  
  
  return (
    <>
    <div className={`w-[80%] h-[151px] flex items-center justify-between m-auto mt-[30px]`}>
      <div>
      <Score score={score} />
      </div>
      <div>
      <Numberselector selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber}/>
      </div>
    </div>
    <div className={`w-[80%]  m-auto  flex items-center justify-center mt-[20px]`}>
    <Rolldice onRoll={handleRoll}/>
    </div>
    <div className={`w-[80%]  flex items-center gap-[30px] justify-center m-auto mt-[30px]`}>
      <Button text="Reset" onClick={resetScore} />
      <Button text="Show Rules" onClick={showRule}  />
    </div>
    {rule?<Rules/>:null}
    </>
  )

}
export default Gameplay