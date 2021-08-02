import LoginForm from '../organisms/LoginForm';
import { Link } from 'react-router-dom';

export default function Homepage(props) {
  const { updateUser } = props;
  return (
    <div>
      <div className='form-wrapper'>
        <h1> Login </h1>
        <LoginForm updateUser={updateUser} />
        <Link to='/register'>Sign up</Link>
      </div>
      <br />
      <div className='foot'>
        <Link to='/about'>About</Link>
      </div>
    </div>
  );
}
