import React, { useState } from 'react'
import Button from './Button'

function StartGame({toggle}) {


  return (
    <>
       <div className='w-[1182px] h-[522px]  m-auto mt-[100px] flex items-center justify-between'>
            <div className='w-[50%] '>
                <img src="/Img/dices 1.png" alt="" />
            </div>
            <div className='w-[50%] h-[188px]  flex flex-col items-center justify-'>
                <div className='w-[528px] h-[144px] text-[90px] font-bold'>
                    <h1 >DICE GAME</h1>
                </div>
                <div className='w-[528px]  flex justify-end' >
                    <Button onClick={toggle} text="Play Now"/>
                </div>
            </div>
        </div> 
    </>
  )
}

export default StartGame