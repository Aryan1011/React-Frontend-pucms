import React from 'react'
import { FaGoogle, FaAppStore } from 'react-icons/fa'
export default function Login() {
    
    const google=()=>{
        window.open("https://backendpucmsawaaz.herokuapp.com/auth/google","_self")
    }
    
    return (
        <div className='login'>
            <div className="loginWrapper">
                <h1 className="loginHeader">
                    <FaAppStore/>Awaaz
                </h1>
                <h1 className='loginHeader2'>Your Online Complaint Desk</h1>
                <div className="loginButton" onClick={google}>
                   <div className="loginLogo">
                     <FaGoogle size={'1em'} />
                   </div>
                   <div className="loginTitle">
                    Login With Google
                   </div>
                </div>
            </div>
        </div>
    )
}