import React from 'react'
import headerpic from '../../assets/HomeHeader.jpg';

function HomeHeader() {
    return (
        <div className='headerContainer'>
            <img src={headerpic} style={{ width: "100%" }} />
            <div class="headerText">
                <h2>
                    Serving the Social Work Profession, the Practitioner, and the
                    PUBLIC....
                </h2>
            </div>
        </div>
    )
}

export default HomeHeader
