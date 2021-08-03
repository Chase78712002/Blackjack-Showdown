import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/atoms/button/Button';
import { logout } from '../utils/api';

export default function Startpage(props) {
  const { name, updateUser } = props;
  return (
    <>
      <div className='form-wrapper'>
        <h1 className='welcome'> Welcome {name} </h1>
        <br />
        <Link to='/game'>
          <Button variant='pixel' backgroundColor='orange'>
            Game Start
          </Button>
        </Link>
        <br />
        <Button
          onClick={() => {
            logout(updateUser);
          }}
          variant='pixel'
          backgroundColor='midnightblue'
        >
          Logout
        </Button>
      </div>
      <div className='foot'>
        <Link to='/about'>About</Link>
      </div>
    </>
  );
}
