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
import Edit from './components/Edit';
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
      <div>

        {
          !loggedIn ? <GoogleLogin
            clientId={clientId}
            buttonText="Login With google"
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
          <Route exact path="/" element={<Home />} />
          <Route path="/complaint" element={<Complaints user={user} />} />
          {loggedIn?
          ( <>
          <Route path="/create" element={<Create user={user} />} />
          <Route path='/complaint/:id' element={<Child user={user} />} />
            <Route path ='/complaint/edit/:id' element={<Edit/>} />
          
          
          </>):
          (<></>)}
         
        </Routes> 

        <Footer/>  
      
    </div>
  );
}
export default App;
