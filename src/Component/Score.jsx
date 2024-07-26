import React from 'react'

function Score({score,resetScore}) {
  return (
    <>
    <div className='w-[135px] h-[151px]  font-bold flex flex-col items-center'>
    <h1 className='text-[100px]'>{score}</h1>
    <p className='font-[25px] text-[20px]' > Total Score</p>
    </div>
    </>
  )
}

export default Score