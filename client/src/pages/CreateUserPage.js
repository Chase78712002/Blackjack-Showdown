import React from 'react';
import CreateUserForm from '../organisms/CreateUserForm';
import { Link } from 'react-router-dom';

export default function ReservationPage(props) {
  return (
    <>
      <div className='top-spacer'></div>

      <div className='form-wrapper'>
        <h1>Registration</h1>
        <CreateUserForm />
        <Link to='/'>Cancel</Link>
      </div>
    </>
  );
}
