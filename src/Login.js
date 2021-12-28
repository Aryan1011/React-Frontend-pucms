import React from 'react'
import { FaGoogle, FaAppStore } from 'react-icons/fa'
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { useState } from 'react';
import {
    BrowserRouter as Router,
    Navigate
  } from "react-router-dom";
export default function Login({setUser ,setBoolUser}) {
   
    const [loggedIn, setLoggedIn] = useState(false);
    const clientId = '303134775990-1hf8tj1trd60o102ad65doskbe9lemnc.apps.googleusercontent.com';
    const onSuccess = (res) => {
      setUser(res.profileObj);
      Navigate('/');
      setBoolUser(true);
    }
    const onFailure = (res) => {
      console.log('failure');
    }
    

    return (
        // <div className='login'>
        //     <div className="loginWrapper">
        //         <h1 className="loginHeader">
        //             <FaAppStore />Awaaz
        //         </h1>
                {/* <h1 className='loginHeader2'>Your Online Complaint Desk</h1> */}
                    
                             <GoogleLogin
                                    clientId={clientId}
                                    buttonText="Login With Googlea"
                                    onSuccess={onSuccess}
                                    onFailure={onFailure}
                                    cookiePolicy={'single_host_origin'}
                                />
                
        //     </div>
        // </div>
    )
}
