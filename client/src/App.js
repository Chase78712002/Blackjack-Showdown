import './App.css';

import LoginPage from './pages/LoginPage';
import CreateUserPage from './pages/CreateUserPage';
import { useState } from 'react';

function App() {
  const [state, setState] = useState({ currentUser: {} });

  const updateUser = (newuser) => {
    setState({ ...state, currentUser: newuser });
  };

  return (
    <>
      <CreateUserPage />
      <LoginPage updateUser={updateUser} />
      {state.currentUser && `current user is ${state.currentUser.username}`}
    </>
  );
}

export default App;
