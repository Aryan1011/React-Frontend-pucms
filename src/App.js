import logo from './logo.svg';
import './App.css';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import Child from './components/Child';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  Routes
} from "react-router-dom";
import Home from './components/Home';
import Complaints from './components/Complaints';
import Navbar from './components/Navbar';
import { useState } from 'react';
function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const clientId = '303134775990-1hf8tj1trd60o102ad65doskbe9lemnc.apps.googleusercontent.com';
  const onSuccess = (res) => {
    console.log('sucess', res.profileObj);
    setLoggedIn(true);
  }
  const onFailure = (res) => {
    console.log('failure');
  }
  const onLogoutSuccess = () => {
    console.log("logout");
    setLoggedIn(false);
  }
  return (
    <div className="App">
      <Navbar loggedIn={loggedIn} />
      <div style={{}}>

        {
          !loggedIn ? <GoogleLogin
            clientId={clientId}
            buttonText="Login"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
          /> :
            <GoogleLogout
              clientId={clientId}
              buttonText="Logout"
              onLogoutSuccess={onLogoutSuccess}
            >
            </GoogleLogout>
        }
      </div>
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="comp" element={<Complaints />} />
          <Route path='comp/:name' element={<Child />} />
        </Routes> :
        
      
    </div>
  );
}
export default App;
