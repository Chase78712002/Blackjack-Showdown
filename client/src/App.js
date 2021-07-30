import './App.css';
import LoginPage from './pages/LoginPage';
import CreateUserPage from "./pages/CreateUserPage";
import { Button } from './components/atoms/button/Button';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Game from './pages/Game/Game';

function App() {
  return (
    <Router>


      <Switch>

        <Route exact path="/">
          <CreateUserPage />
          <LoginPage />
          <Link to="/game">
          <Button variant='pixel'>Game starts</Button>
          </Link>

        </Route>

        <Route path="/game">
          <Game />
        </Route>



      </Switch>

    </Router>
  );
}

export default App;