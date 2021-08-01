import './App.css';

import LoginPage from './pages/LoginPage';
import CreateUserPage from './pages/CreateUserPage';
import Game from './pages/Game/Game';
import { Button } from './components/atoms/button/Button';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { SocketContext, socket } from './utils/SocketProvider';
import { useState } from 'react';
import { logout } from './utils/api';

function App() {
  const [state, setState] = useState({ currentUser: {} });

  const updateUser = (newuser) => {
    setState({ ...state, currentUser: newuser });
  };

  return (
    <SocketContext.Provider value={socket}>
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
            {state.currentUser &&
              `current user is ${state.currentUser.username}`}
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
    </SocketContext.Provider>
  );
}

export default App;
