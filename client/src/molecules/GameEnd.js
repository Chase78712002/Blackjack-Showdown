import React from "react"
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { Button } from '../components/atoms/button/Button';

export default function GameEnd ({ gameState, nextRound }) {
    return (
        <div>
            {gameState === "WIN" ? <h1>Player 1 Won!!!</h1> :
            <h1>Computer Won!!!</h1>}
            <Link to='/'>
                <Button variant='pixel' size='small' backgroundColor='orange'>
                    LEAVE
                </Button>
            </Link>
            <Button variant='pixel' onClick={nextRound}>
                NEXT ROUND
            </Button>
        </div>
    )
}
