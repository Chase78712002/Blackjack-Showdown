import './App.css';
import Homepage from './pages/Homepage';
import CreateUserPage from './pages/CreateUserPage';
import Game from './pages/Game/Game';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { SocketContext, socket } from './utils/SocketProvider';
import { useEffect, useState } from 'react';
import Startpage from './pages/Startpage';
import Aboutpage from './pages/About';

function App() {
  const [state, setState] = useState({
    currentUser: { username: '' },
    isLoggedIn: false
  });

  useEffect(() => {
    const loggedUser = JSON.parse(localStorage.getItem('currentUser'));
    console.log(loggedUser);
    if (loggedUser) {
      updateUser(loggedUser, true);
    }
  }, []);

  const updateUser = (newuser, bool) => {
    setState({ ...state, currentUser: newuser, isLoggedIn: bool });
  };

  return (
    <SocketContext.Provider value={socket}>
      <Router>
        <Switch>
          <Route exact path='/'>
            <div className='main'>
              <div>
                <h1 className='main-title'>BlackJack</h1>
                <h1 className='main-title'>Showdown</h1>
              </div>
              <div>
                {state.isLoggedIn ? (
                  <Startpage
                    name={state.currentUser.username}
                    updateUser={updateUser}
                  />
                ) : (
                  <Homepage updateUser={updateUser} />
                )}
              </div>
            </div>
          </Route>
          <Route path='/register'>
            <div className='main'>
              <CreateUserPage />
            </div>
          </Route>
          <Route path='/game'>
            <Game room={0} currentUser={state.currentUser} />
          </Route>
          <Route path='/about'>
            <Aboutpage />
          </Route>
        </Switch>
      </Router>
    </SocketContext.Provider>
  );
}

export default App;
