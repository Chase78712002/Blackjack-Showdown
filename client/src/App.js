import './App.css';
import { Button } from './components/atoms/button/Button';
import Login from './components/molecules/login_form/LoginForm';
import CreateUserPage from "./pages/CreateUserPage";


function App() {
  return (
    <>
    {/* <CreateUserPage /> */}
    <Login />
    <Button variant='pixel' backgroundColor='red'>Login</Button>
    </>
  );
}

export default App;