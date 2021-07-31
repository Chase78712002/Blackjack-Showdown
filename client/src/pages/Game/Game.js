import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { Button } from '../../components/atoms/button/Button';
import './Game.css';
import axios from 'axios';
import ioClient from 'socket.io-client';

const ENDPOINT = "http://localhost:8080/"

export default function Game(props) {
    const [response, setResponse] = useState('');

    useEffect(() => {
        const socket = ioClient(ENDPOINT, {
            withCredentials: true,
            extraHeaders: {
                "my-custom-header": "abcd"
            }
        });
        // socket.on("")
    }, [])

    const drawCard = () => {
        //send axios request to server
        // this will be replaced by socket.io

    }

    const stand = () => {
        //send axios request to server
        // this will be replaced by socket.io
        axios.post('http://localhost:8080/api/stand', { hi: 'I stand!' })
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
                <h2>---Dealer---</h2>
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
                <h2>---Player---</h2>
                <div className="container--playerHand">
                    <div>CARD 1</div>
                    <div>CARD 2</div>
                </div>
                <Button
                    variant="pixel"
                    onClick={stand}
                >
                    Stand
                </Button>
            </div>

            <div className="bottombar">
                <h1>Coins</h1>
            </div>

        </div>
    )
}