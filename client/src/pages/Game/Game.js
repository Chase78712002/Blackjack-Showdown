import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { Button } from '../../components/atoms/button/Button';
import './Game.css'
export default function Game(props) {


    const drawCard = () => {
        alert('drawing a card!!')
    }

    const pass = () => {
        alert('PASS!!')
    }


    return (
        <div className='table-background'>
            <div className="topbar">
                <h2>Turn: </h2>
                <Link to="/">
                    <Button variant="pixel" size='small' backgroundColor='orange'>Home</Button>
                </Link>
            </div>

            <div className='table-container--top'>
                Thi is top
            </div>

            <div className="table-container--mid">
                <div className="mid--deck">
                    <Button
                        variant='pixel'
                        onClick={drawCard}
                    >
                        Hit
                    </Button>
                </div>
                <div className="mid--pot">
                    <span id="pot"></span>
                </div>
            </div>

            <div className="table-container--bottom">
                <Button
                    variant="pixel"
                    onClick={pass}
                >
                    Pass
                </Button>
            </div>

            <div className="bottombar">
                <p>Coins</p>
            </div>

        </div>
    )
}