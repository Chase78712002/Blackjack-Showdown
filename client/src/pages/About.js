import './About.css';
import { Link } from 'react-router-dom';
import { Button } from '../components/atoms/button/Button';

export default function Aboutpage(props) {
  return (
    <div className='content'>
      <Link to='/' className='back'>
        <Button size='tiny' backgroundColor='orange'>
          Back
        </Button>
      </Link>
      <div className='top-spacer'></div>
      <h1>About Project</h1>
      <div className='text-block'>
        A pixel-themed head to head blackjack game. It's a fullstack project
        developed over one week for the Mintbean Hackathon July 2021.
      </div>
      <h1>Tech Stack</h1>
      <div className='text-block'>
        BlackJack Showdown was devleoped using NodeJS, Express on the backend
        and React on the front end. We've used PostgreSQL for our database and
        deployed on Heroku.
      </div>
      <div className='text-block'>
        Other libraries we've used are bcrypt for hashing passwords,jsonwebtoken
        for login, knex to access the database, storybook for modular
        developement and socket.io for real-time and capacity for multiplayer.
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
          <div className='social-icon-container'>
            <a href='https://github.com/eyoa'>
              <img
                className='social-icon'
                src='/img/about/GitHub-Mark-64px.png'
              ></img>
            </a>
            <a href='https://www.linkedin.com/in/evelyn-yoa/'>
              <img
                className='social-icon'
                src='/img/about/linkedin_icon.png'
              ></img>
            </a>
          </div>
        </div>
        <div className='single'>
          <img src='/img/about/guy.png'></img>
          <div className='title'>Alvin Lin</div>
          <div className='desc'>A junior web developer with a background in Psychology. Recently graduated
            from Lighthouse Labs fullstack web development bootcamp. </div>
          <div className='social-icon-container'>
            <a href='https://github.com/Chase78712002'>
              <img
                className='social-icon'
                src='/img/about/GitHub-Mark-64px.png'
              ></img>
            </a>
            <a href='https://www.linkedin.com/in/alvin-lin-6933b39a/'>
              <img
                className='social-icon'
                src='/img/about/linkedin_icon.png'
              ></img>
            </a>
          </div>
        </div>
        <div className='single'>
          <img src='/img/about/dice.png'></img>
          <div className='title'>Audrey Plath</div>
          <div className='desc'>A recent graduate from name? bootcamp.</div>
          <div className='social-icon-container'>
            <a href='https://github.com/AudreyMargolis'>
              <img
                className='social-icon'
                src='/img/about/GitHub-Mark-64px.png'
              ></img>
            </a>
            <a href=''>
              {/* <img
              className='social-icon'
              src='/img/about/linkedin_icon.png'
            ></img> */}
            </a>
          </div>
        </div>
      </div>

      <br />
      <h1>Credits</h1>
      <div className='text-block'>
        Thanks to Cazwolf for the pretty card images.{' '}
      </div>
    </div>
  );
}
