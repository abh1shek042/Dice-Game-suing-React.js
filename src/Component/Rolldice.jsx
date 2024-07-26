import React, { useState } from 'react';

function Rolldice({ onRoll }) {
  const [dice, setDice] = useState(1);

  const generateRandom = (max, min) => {
    const r = Math.floor(Math.random() * (max - min) + min);
    return r;
  };

  const rollingDice = () => {
    const generatedRandomNo = generateRandom(1, 7);
    setDice(generatedRandomNo);
    onRoll(generatedRandomNo);
  };

  return (
    <>
      <div className={`flex flex-col items-center gap-[10px]`}>
        <div>
          <img onClick={rollingDice} src={`./Diceimg/dice_${dice}.png`} alt="" />
        </div>
        <p className='text-[24px]'>Click on Dice to Roll</p>
      </div>
    </>
  );
}

export default Rolldice;
