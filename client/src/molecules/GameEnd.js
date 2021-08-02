import './GameEnd.css';
import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { Button } from '../components/atoms/button/Button';

export default function GameEnd({ gameState, nextRound, name }) {
  return (
    <div className='modal'>
      <div className='modal-content'>
        <div>
          {gameState === 'WIN' ? (
            <h1>{name || 'Player 1'} Wins!!!</h1>
          ) : (
            <h1>Dealer Wins</h1>
          )}
        </div>
        <div className='modal-buttons'>
          <Link to='/'>
            <Button variant='pixel' size='small' backgroundColor='midnightblue'>
              LEAVE
            </Button>
          </Link>
          <Button variant='pixel' backgroundColor='orange' onClick={nextRound}>
            NEXT ROUND
          </Button>
        </div>
      </div>
    </div>
  );
}
