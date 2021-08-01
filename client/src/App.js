import './App.css';

import LoginPage from './pages/LoginPage';
import CreateUserPage from './pages/CreateUserPage';
import Game from './pages/Game/Game';
import { Button } from './components/atoms/button/Button';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import { useState } from 'react';
import { logout } from './utils/api';
import { SocketProvider } from './utils/SocketProvider';

function App() {
  const [state, setState] = useState({ currentUser: {} });

  const updateUser = (newuser) => {
    setState({ ...state, currentUser: newuser });
  };

  return (
    <SocketProvider>
      <Router>
        <Switch>
          <Route exact path='/'>
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
            <br />
            <Link to='/game'>
              <Button variant='pixel'>Game starts</Button>
            </Link>
          </Route>

          <Route path='/game'>

            <Game />
          </Route>
        </Switch>
      </Router>
    </SocketProvider>
  );
}

export default App;
