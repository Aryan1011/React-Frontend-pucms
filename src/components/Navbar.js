import React from 'react'
import { Link } from 'react-router-dom'
import { GoogleLogin, GoogleLogout } from 'react-google-login';

import {
    BrowserRouter as Router,
    Navigate
  } from "react-router-dom";

function Navbar({ boolUser ,setBoolUser,setUser,user }) {
 
    const clientId = '303134775990-1hf8tj1trd60o102ad65doskbe9lemnc.apps.googleusercontent.com';
    const onLogoutSuccess = () => {
        console.log("logout");
        setBoolUser(false);
        sessionStorage.removeItem('user');
        Navigate('/');
      }

      const onSuccess = (res) => {
        setUser(res.profileObj);
       
        console.log(user);
        console.log(boolUser);
        setBoolUser(true);
        
        Navigate('/');
       
      }
      const onFailure = (res) => {
        console.log('failure');
      }

    return (
        <div className="nav">

            <div className='navbarLeft'>
                <Link to="/">
                    <button className='navButtons'>
                        Home
                    </button>
                </Link>
                <Link to="/reach">
                    <button className='navButtons'>
                        Our Reach
                    </button>
                </Link>
                <Link to="/news">
                    <button className='navButtons'>
                        News
                    </button>
                </Link>
                <Link to="/stories">
                    <button className='navButtons'>
                        Stories
                    </button>
                </Link>
                {
                    boolUser ? (<Link to="/complaint">
                            <button className='navButtons'>
                                Complaint Register
                            </button>
                        </Link>):(null)
                }
            </div>
            <div className="navbarRight">

                {boolUser ? (
                    <>
                                     <GoogleLogout
                                        clientId={clientId}
                                        buttonText="Logout"
                                        onLogoutSuccess={onLogoutSuccess}
                                    />

                    </>
                ) : (
                    <GoogleLogin
                    clientId={clientId}
                    buttonText="Login With Google"
                    onSuccess={onSuccess}
                    onFailure={onFailure}
                    cookiePolicy={'single_host_origin'}
                    className='googleLoginButton'
                />
                )}
            </div>

        </div>

    )
}

export default Navbar
