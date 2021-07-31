import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { Button } from '../../components/atoms/button/Button';
import './Game.css';
import axios from 'axios';
export default function Game(props) {


    const drawCard = () => {
        //send axios request to server
        // this will be replaced by socket.io
        axios.post('http://localhost:8080/api/hit', {hi:'I wanna draw a card!'})
            .then(res => {
                console.log('this is the response from drawcard', res);
            })
    }

    const stand = () => {
        //send axios request to server
        // this will be replaced by socket.io
        axios.post('http://localhost:8080/api/stand', {hi:'I stand!'})
            .then(res => {
                console.log('this is the response from stand', res);
            })
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
                    onClick={stand}
                >
                    Stand
                </Button>
            </div>

            <div className="bottombar">
                <p>Coins</p>
            </div>

        </div>
    )
}