import React from 'react'
import src from '../assets/awaaz logo.png'
import { FaGithub, FaEnvelope, FaLandmark, FaCopyright, FaFacebook, FaLinkedin, FaGoogle } from 'react-icons/fa'


export default function Footer() {
    return (
        <div className='parentFooter'>
            <div className='footer'>
                <div className="leftFooter" >
                    <h3 style={{ color: 'white', fontSize: '1.5em', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>ABOUT <span style={{ color: '#ffc107' }}> AWAAZ</span></h3>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '1.5em 1em' }}>
                        <img src={src} alt="" />

                    </div>
                </div>
                <div className="midFooter">
                    <p style={{ color: 'white', fontSize: '1em', }}> <FaLandmark /> Uiet Panjab University, <br />
                        Sector 14, Chandigarh, 160014
                    </p>
                    <p style={{ color: 'white', fontSize: '1em' }}> <FaEnvelope /> awaazfoundation@gmail.com</p>
                    <div className='linkFooter' style={{ display: 'flex' }}>

                        <ul style={{ color: 'white', display: 'flex', listStyle: 'none' }}>
                            <li style={{ margin: '1em 1em' }}><FaGithub size={'2em'} /></li>
                            <li style={{ margin: '1em 1em' }}><FaFacebook size={'2em'} /></li>
                            <li style={{ margin: '1em 1em' }}><FaGoogle size={'2em'} /></li>
                            <li style={{ margin: '1em 1em' }}><FaLinkedin size={'2em'} /></li>
                        </ul>

                    </div>
                    <div>
                        <p class="text-light py-4 mb-4">
                            <FaCopyright />  Copyright &copy;2021 AWAAZ FOUNDATION
                        </p>
                    </div>
                </div>

                <div className="rightFooter">
                    <h3 style={{ color: 'white', fontSize: '1.5em' }}>ABOUT <span style={{ color: '#ffc107' }}>US</span></h3>
                    <p className='aboutusText' style={{ color: 'white' }}>Started in 2021, With the motive of giving PU it's own online complaint desk we have come a long way. In the tough times of covid, need of an online CMS was realised for the desperate students. Constantly striving for betterment of System and make students life a little less miserable. </p>
                </div>
            </div>
            <div className='cautionFooter'>
                <p>This is a project. All information provided above and the content in complaints is an Imitation(fake) of a hypothetical scenario for education and learning purpose only.</p>
            </div>

        </div>
    )
}
