import React, { useCallback, useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { Button } from '../../components/atoms/button/Button';
import Card from '../../atoms/Card';
import './Game.css';
import { SocketContext } from '../../utils/SocketProvider';
import GameEnd from '../../molecules/GameEnd';

export default function Game({ roomNumber = 0, currentUser }) {
  const [response, setResponse] = useState('');
  const [room, setRoom] = useState(roomNumber);
  const [user, setUser] = useState(currentUser);
  const [player1Hand, setPlayer1Hand] = useState([]);
  const [player2Hand, setPlayer2Hand] = useState([]);
  const [gameState, setGameState] = useState('INPLAY');
  const [initialBetPlaced, setInitialBetPlaced] = useState(false);

  const socket = useContext(SocketContext);

  // #region sockets
  useEffect(() => {
    // Listening for hit data from server
    //implement check if newRoom or if game is currently going
    socket.emit('newGame', room);

    //placebet Implementation
    socket.on('betPlaced', () => {
      console.log('Bet Successful');
      if (!initialBetPlaced) {
        setInitialBetPlaced(true);
        socket.emit('deal', room);
      }
    });

    socket.on('deal', (hand1, hand2) => {
      setPlayer1Hand(hand1);
      setPlayer2Hand(hand2);
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
        <h2>Turn: </h2>
        <Link to='/'>
          <Button variant='pixel' size='small' backgroundColor='orange'>
            Home
          </Button>
        </Link>
      </div>
      {gameState != 'INPLAY' ? (
        <GameEnd gameState={gameState} nextRound={nextRound} />
      ) : (
        ''
      )}
      <div className='table-container--top'>
        <h2>---Dealer---</h2>
        <h3>Hand:</h3>
        {player2Hand.map((card) => {
          return <Card name={card.name} />;
        })}
      </div>

      <div className='table-container--mid'>
        <div className='mid--deck'>
          <Button variant='pixel' onClick={drawCard}>
            Hit
          </Button>
        </div>
        <div className='mid--pot'>
          <span id='pot'></span>
          <Button variant='pixel' onClick={placeBet}>
            Place Bet
          </Button>
        </div>
      </div>

      <div className='table-container--bottom'>
        <h2>---Player---</h2>
        <div className='container--playerHand'>
          {player1Hand.map((card) => {
            return <Card name={card.name} />;
          })}
        </div>
        <Button variant='pixel' onClick={stand}>
          Stand
        </Button>
      </div>

      <div className='bottombar'>
        <h1>Coins</h1>
      </div>
    </div>
  );
}
