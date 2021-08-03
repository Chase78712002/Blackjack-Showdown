import './LoginForm.css';
import { useState } from 'react';
import { Button } from '../components/atoms/button/Button';
import ErrorAlert from '../atoms/ErrorAlert';
import { loginUser } from '../utils/api';

export default function LoginForm(props) {
  const { updateUser } = props;
  const initialFormState = {
    email: '',
    password: ''
  };
  const [formData, setFormData] = useState({ ...initialFormState });
  const [userError, setUserError] = useState(null);

  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value
    });
  };

  const showError = (error) => {
    setUserError(error);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    loginUser(formData, updateUser, showError);
  };

  return (
    <>
      <ErrorAlert error={userError} />
      <form onSubmit={handleSubmit}>
        <div className='group'>
          <label for='email'>
            Email:
            <input
              id='email'
              type='email'
              name='email'
              onChange={handleChange}
              value={formData.email}
              placeholder='email'
            />
          </label>
        </div>
        <br />
        <div className='group'>
          <label for='password'>
            Password:
            <input
              id='password'
              type='password'
              name='password'
              onChange={handleChange}
              value={formData.password}
              placeholder='password'
            />
          </label>
        </div>
        <br />
        <Button type='submit' variant='pixel' backgroundColor='midnightblue'>
          Login
        </Button>
      </form>
    </>
  );
}
