import './App.css';
import {useState} from 'react';
import LoginPage from './pages/LoginPage';
import CreateUserPage from "./pages/CreateUserPage";


function App() {
  const [loginStatus, setLoginStatus] = useState("");
  return (
    <>
    <CreateUserPage />
    <LoginPage />
    </>
  );
}

export default App;