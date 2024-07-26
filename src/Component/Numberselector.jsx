import React, { useState } from 'react';
import NumberBtn from './NumberBtn';

function Numberselector({selectedNumber,setSelectedNumber}) {
  const arryNum = [1, 2, 3, 4, 5, 6];
  
  console.log(selectedNumber)
  return (
    <>
    <div className={`w-[552px] h-[72px] flex items-center justify-evenly font-semibold ` }>
      {arryNum.map((value, i) => (
        <NumberBtn value={value} key={i} onClick={()=>setSelectedNumber(value)}
        isSelected={selectedNumber===value} />
      ))}
    </div>
    <p className={` text-[24px] flex items-center justify-end pr-[15px] h-[36px] mt-[10px] font-bold`}>Select Number</p>
    </>
  );
}

export default Numberselector;
