import '../App.css';
import { useState } from 'react';
import { Button } from '../components/atoms/button/Button';
import ErrorAlert from '../atoms/ErrorAlert';
import { loginUser } from '../utils/api';

export default function LoginForm(props) {
  const { updateUser } = props;
  const initialFormState = {
    email: '',
    password: 'password'
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
    loginUser(formData, updateUser);
  };

  return (
    <div>
      <h1>Login Form</h1>
      <ErrorAlert error={userError} />
      <form onSubmit={handleSubmit}>
        <label htmlFor='email'>
          Enter email:
          <input
            id='email'
            type='email'
            name='email'
            onChange={handleChange}
            value={formData.email}
          />
        </label>
        <label htmlFor='password'>
          Enter Your password:
          <input
            id='password'
            type='text'
            name='password'
            onChange={handleChange}
            value={formData.password}
          />
        </label>
        {/* <Button type="submit" variant='pixel' backgroundColor='blue'>Login</Button> */}
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}
