import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { Button } from '../../components/atoms/button/Button';
import Card from '../../atoms/Card';
import './Game.css';
import { SocketContext } from '../../utils/SocketProvider';
import GameEnd from '../../molecules/GameEnd';

export default function Game({ roomNumber = 0, currentUser }) {
  const [room, setRoom] = useState(roomNumber);
  const [user, setUser] = useState(currentUser);
  const [player1Hand, setPlayer1Hand] = useState([]);
  const [player2Hand, setPlayer2Hand] = useState([]);
  const [gameState, setGameState] = useState('INPLAY');
  const [initialBetPlaced, setInitialBetPlaced] = useState(false);
  const [coinBalance, setCoinBalance] = useState('');

  const socket = useContext(SocketContext);

  // #region sockets
  useEffect(() => {
    // Listening for hit data from server
    //implement check if newRoom or if game is currently going
    console.log('current user data: ', user);
    console.log('current username: ', user.username);
    socket.emit('newGame', {
      username: user.username,
      roomNum: room
    });
    // Game start, pulling game data from server
    socket.on('loadUserCoins', (coin) => {
      console.log('current user coin balance: ', coin);
      setCoinBalance((prevBalance) => coin);
    });

    //placebet Implementation
    socket.on('betPlaced', () => {
      console.log('Bet Successful');
      if (!initialBetPlaced) {
        setInitialBetPlaced(true);
        socket.emit('deal', room);
      }
    });

    socket.on('deal', (hand1, hand2, gameState) => {
      console.log('gamestate on deal', gameState);
      setPlayer1Hand(hand1);
      setPlayer2Hand(hand2);
      setGameState(gameState || 'INPLAY');
    });
    socket.on('hit', (hand, handState) => {
      setPlayer1Hand(hand);
      setGameState(handState);
    });
    socket.on('dealerHit', (hand) => {
      setPlayer2Hand(hand);
    });
    socket.on('stand', (gameState) => {
      setGameState(gameState);
    });

    return () => {
      socket.off('betPlaced');
      socket.off('deal');
      socket.off('hit');
      socket.off('dealerHit');
      socket.off('hit');
    };
  }, [socket]);
  // #endregion
  // #region playerActions

  const drawCard = () => {
    console.log('Room on hit', room);
    socket.emit('hit', room);
  };
  const placeBet = () => {
    //TODO call api function to deduct bet from user account
    socket.emit('bet', 10, room);
  };

  const stand = () => {
    socket.emit('stand', room);
  };

  const nextRound = () => {
    //TODO add funds to players accounts
    setInitialBetPlaced(false);
    setPlayer1Hand([]);
    setPlayer2Hand([]);
    setGameState('INPLAY');
    socket.emit('nextRound', room);
  };

  // #endregion
  return (
    <div className='table-background'>
      <div className='topbar'>
        <Link to='/'>
          <Button variant='pixel' size='tiny' backgroundColor='midnightblue'>
            Home
          </Button>
        </Link>
      </div>
      {gameState != 'INPLAY' ? (
        <GameEnd
          gameState={gameState}
          nextRound={nextRound}
          name={currentUser.username}
        />
      ) : (
        ''
      )}
      <div className='table-container--top'>
        <h2>---Dealer---</h2>
        <div className='container--playerHand'>
          {player2Hand.map((card) => {
            return (
              <Card key={card.name} card={card.name} imgUrl={card.imgUrl} />
            );
          })}
        </div>
      </div>

      <div className='table-container--mid'>
        {initialBetPlaced ? (
          <div className='mid--deck'>
            <Button
              variant='pixel'
              backgroundColor='midnightblue'
              onClick={drawCard}
            >
              Hit
            </Button>
            <div className='spacer'></div>
            <img src='/img/coin_pile.gif'></img>
          </div>
        ) : (
          <div className='mid--pot'>
            <Button variant='pixel' backgroundColor='orange' onClick={placeBet}>
              Place Bet
            </Button>
          </div>
        )}
      </div>

      <div className='table-container--bottom'>
        <h2>---Player---</h2>
        <div className='container--playerHand'>
          {player1Hand.map((card) => {
            return (
              <Card key={card.name} card={card.name} imgUrl={card.imgUrl} />
            );
          })}
        </div>

        {initialBetPlaced ? (
          <Button
            variant='pixel'
            backgroundColor='midnightblue'
            onClick={stand}
          >
            Stand
          </Button>
        ) : (
          <></>
        )}
      </div>

      <div className='bottombar'>
        <img src='/img/coin.png'></img>
        <h1>X {coinBalance}</h1>
      </div>
    </div>
  );
}
