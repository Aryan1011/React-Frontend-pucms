import React from 'react'
import headerpic from '../../assets/HomeHeader6.jpeg';

function HomeHeader() {
    return (
        <div className='headerContainer'>
            <img src={headerpic} style={{ height: "90vh" ,width:"100%" }} alt='header' />
            <div className="headerText">
                    Serving the Social Work Profession, the Practitioner, and the
                    PUBLIC....
            </div>
        </div>
    )
}

export default HomeHeader
