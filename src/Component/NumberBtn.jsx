import React from 'react';

function NumberBtn({ value ,onClick,isSelected}) {
  return (
    <button className={` rounded-[3px] w-[70px] h-[70px] border-[1px] border-black border-solid flex items-center justify-center font-bold ${isSelected? 'bg-black text-white':''}`} onClick={onClick}>
      {value}
    </button>
  );
}

export default NumberBtn;
