import './About.css';
import { Link } from 'react-router-dom';
import { Button } from '../components/atoms/button/Button';

export default function Aboutpage(props) {
  return (
    <div className='content'>
      <Link to='/' className='back'>
        <Button size='small' backgroundColor='orange'>
          Back
        </Button>
      </Link>
      <h1>About Project</h1>
      <div className='text-block'>
        This is a project done for the mintbean hackathon in July. We had one
        week to create a fullstack card game.
      </div>
      <h1>Tech Stack</h1>
      <div className='text-block'>
        BlackJack Showdown was devleoped using NodeJS and Express on the backend
        and React on the front end. We've used PostgreSQL for our database and
        deployed on Heroku
      </div>
      <div className='icons'>
        <img src='/img/tech/postgresql.png'></img>
        <img src='/img/tech/express.png'></img>
        <img src='/img/tech/react.png'></img>
      </div>
      <br />
      <h1>Team</h1>
      <div className='members'>
        <div className='single'>
          <img src='/img/about/dice.png'></img>
          <div className='title'>Evelyn Yoa</div>
          <div className='desc'>
            A Jr. Dev with a background in VFX animation. Recently graduated
            from Lighthouse Labs fullstack web development bootcamp.
          </div>
        </div>
        <div className='single'>
          <img src='/img/about/guy.png'></img>
          <div className='title'>Alvin Lin</div>
          <div className='desc'>A recent graduate from Lighthouse Labs.</div>
        </div>
        <div className='single'>
          <img src='/img/about/dice.png'></img>
          <div className='title'>Audrey Plath</div>
          <div className='desc'>A recent graduate from Lighthouse Labs.</div>
        </div>
      </div>

      <br />
      <div className='text-block'>
        Thanks to Cazwolf for the pretty card images.{' '}
      </div>
    </div>
  );
}
