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
import Create from './components/Create';
import Home from './components/Home';
import Complaints from './components/Complaints';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { useState } from 'react';
function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const clientId = '303134775990-1hf8tj1trd60o102ad65doskbe9lemnc.apps.googleusercontent.com';
  const onSuccess = (res) => {
    setLoggedIn(true);
    setUser(res.profileObj);
  }
  const onFailure = (res) => {
    console.log('failure');
  }
  const onLogoutSuccess = () => {
    console.log("logout");

    setLoggedIn(false);
  }

  const [user,setUser] = useState("");

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
          <Route path="/complaint" element={<Complaints user={user} />} />
          <Route path="/create" element={<Create/>} />
          <Route path='/complaint/:id' element={<Child />} />
        </Routes> 

        <Footer/>  
      
    </div>
  );
}
export default App;
