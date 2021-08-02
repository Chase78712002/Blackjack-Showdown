import React, { useState } from 'react';
import ErrorAlert from '../atoms/ErrorAlert';
import { Button } from '../components/atoms/button/Button';
import { postUser } from '../utils/api';

export default function CreateUserForm() {
  const initialFormState = {
    username: '',
    password: '',
    email: '',
    coins: 100
  };
  const [formData, setFormData] = useState({ ...initialFormState });
  const [userError, setUserError] = useState(null);

  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    postUser(formData)
      .then(res => {
        console.log('register success!')

      })
      .catch((error) => {
        setUserError(error);
      });
  };

  return (
    <div>
      <ErrorAlert error={userError} />
      <form onSubmit={handleSubmit}>
        <label htmlFor='username'>
          Username:
          <input
            id='username'
            type='text'
            name='username'
            onChange={handleChange}
            value={formData.username}
            placeholder="username"
          />
        </label>
        <br />
        <label htmlFor='password'>
          Password:
          <input
            id='password'
            type='password'
            name='password'
            onChange={handleChange}
            value={formData.password}
            placeholder="password"
          />
        </label>
        <br />
        <label htmlFor='email'>
          Email:
          <input
            id='email'
            type='email'
            name='email'
            onChange={handleChange}
            value={formData.email}
            placeholder="email"
          />
        </label>
        <br />
        <Button type='submit' variant='pixel' backgroundColor='blue'>
          Submit
        </Button>
        {/* <button type='submit'>Submit</button> */}
      </form>
    </div>
  );
}
