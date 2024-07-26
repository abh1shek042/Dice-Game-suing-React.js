import React from 'react'

function Rules() {
  return (
    <>
    <div className={`w-[80%] bg-green-300 m-auto p-[10px] mt-[10px] rounded-[5px]`}>
        <h1 className='font-bold text-[24px]'>How to Play Dice Game</h1>
        <li>Select any number.</li>
        <li>Click on Dice Image</li>
        <li>After ckick on dice, if the selected number matches the with the rolled dice outcome then the score will be increased by <br></br>selected number  and if it doesnot match the score will be deducted as per selected number</li>
    </div>
    </>
  )
}

export default Rules