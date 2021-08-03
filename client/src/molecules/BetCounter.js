import React, { useState } from "react"
import { Button } from '../components/atoms/button/Button';

export default function BetCounter({ placeBet}) {
    const [bet, setBet] = useState(10)
    const handleChange = ({ target }) => {
        setBet(target.value);
    }
    const increase = () => {
        let tempBet = bet + 10; 
        setBet(tempBet);
    }
    const decrease = () => {
        let tempBet = bet - 10; 
        setBet(tempBet);
    }
    const submit = (event) => {
        event.preventDefault();
        placeBet(bet);
    }
    return (
        <div style={{textAlign: "center"}}>
        <div style={{display: "flex"}}>
            <Button onClick={decrease} variant='pixel' backgroundColor='blue'>
                -
            </Button>
            <h1>
                Bet : {bet}
            </h1>
            <Button onClick={increase} variant='pixel' backgroundColor='blue'>
                +
            </Button>
            
        </div>
        <Button onClick={submit} variant='pixel' backgroundColor='blue'> Place Bet </Button>
        </div>
    )
}