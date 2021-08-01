import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState
} from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { Button } from '../../components/atoms/button/Button';
import './Game.css';
import { SocketContext } from '../../utils/SocketProvider';

export default function Game(props) {
  const [response, setResponse] = useState('');
  const [card, setCard] = useState({
    suit: 'suit',
    value: 'value'
  });

  const socket = useContext(SocketContext);

  const drawCard = useCallback(() => {
    console.log(`hit sent from socket id: ${socket.id}`);
    socket.emit('hit', {
      message: 'draw a card'
    });
  }, []);

  useEffect(() => {
    // Listening for hit data from server
    socket.on('hit', (data) => {
      console.log('card data received from the server', data);
      setCard((prev) => data);
    });

    socket.on('stand', (data) => {
      console.log('card data received from the server', data);
      setCard((prev) => data);
    });
  }, [socket]);

  const stand = useCallback(() => {
    console.log(`hit sent from socket id: ${socket.id}`);
    socket.emit('stand', { message: 'stand' });
  }, []);

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

      <div className='table-container--top'>
        <h2>---Dealer---</h2>
      </div>

      <div className='table-container--mid'>
        <div className='mid--deck'>
          <Button variant='pixel' onClick={drawCard}>
            Hit
          </Button>
        </div>
        <div className='mid--pot'>
          <span id='pot'></span>
        </div>
      </div>

      <div className='table-container--bottom'>
        <h2>---Player---</h2>
        <div className='container--playerHand'>
          <div>
            {card.value} of {card.suit}{' '}
          </div>
          <div>CARD 2</div>
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
