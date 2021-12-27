import React from 'react'
import { Link } from 'react-router-dom'

function Navbar({loggedIn}) {
    return (
        <div>
            <Link to="/">
                <button className='navButtons'>
                    Home
                </button>
            </Link>
            <Link to="#">
                <button className='navButtons'>
                    Our Reach
                </button>
            </Link>
            <Link to="">
                <button className='navButtons'>
                    News
                </button>
            </Link>
            <Link to="#">
                <button className='navButtons'>
                    Stories
                </button>
            </Link>
            {loggedIn &&  <Link to="/complaint">
                <button className='navButtons'>
                    Complaint Register
                </button>
            </Link> }
           

        </div>
    )
}

export default Navbar
