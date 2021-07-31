import './App.css';

import LoginPage from './pages/LoginPage';
import CreateUserPage from './pages/CreateUserPage';
import { useState } from 'react';
import { logout } from './utils/api';
function App() {
  const [state, setState] = useState({ currentUser: {} });

  const updateUser = (newuser) => {
    setState({ ...state, currentUser: newuser });
  };

  return (
    <>
      <button
        onClick={() => {
          logout(updateUser);
        }}
      >
        Logout
      </button>
      <CreateUserPage />
      <LoginPage updateUser={updateUser} />
      {state.currentUser && `current user is ${state.currentUser.username}`}
    </>
  );
}

export default App;
