import React from 'react'

function Button( {onClick , text ,className} ) {
  return (
    <button onClick={onClick} className={`w-[220px] h-[44px] bg-black border-solid border-[1px] border-black text-white rounded-[4px] hover:bg-white hover:text-black  ${className}`} >
        {text}
    </button>
  )
}

export default Button