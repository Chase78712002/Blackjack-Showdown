import './BetCounter.css';
import React, { useState } from 'react';
import { Button } from '../components/atoms/button/Button';

export default function BetCounter({ placeBet }) {
  const [bet, setBet] = useState(10);
  const handleChange = ({ target }) => {
    setBet(target.value);
  };
  let tempBet = 0;
  const increase = () => {
    tempBet = bet + 10;
    setBet(tempBet);
  };
  const decrease = () => {
    if (bet > 10) {
      tempBet = bet - 10;
    } else {
      tempBet = bet;
    }

    setBet(tempBet);
  };
  const submit = (event) => {
    event.preventDefault();
    placeBet(bet);
  };
  return (
    <div className='counter'>
      <div className='counter-top'>
        <Button onClick={decrease} variant='bet-left' backgroundColor='orange'>
          -
        </Button>
        <div className='bet-counter'>{bet}</div>
        <Button onClick={increase} variant='bet-right' backgroundColor='orange'>
          +
        </Button>
      </div>
      <Button onClick={submit} variant='bet' backgroundColor='orange'>
        Place Bet
      </Button>
    </div>
  );
}
