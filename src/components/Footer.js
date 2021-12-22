import React from 'react'
import src from '../assets/awaaz logo.png'
import { FaGithub, FaEnvelope, FaLandmark, FaCopyright, FaFacebook, FaLinkedin, FaGoogle } from 'react-icons/fa'


export default function Footer() {
    return (
        <div className='footer'>
            <div className="leftFooter" >
                <h3 style={{ color: 'white', fontSize: '1.5em', display:'flex',alignItems:'center',justifyContent:'center' }}>ABOUT <span style={{ color: '#ffc107' }}> AWAAZ</span></h3>
                <div style={{display:'flex',alignItems:'center',justifyContent:'center',margin:'1.5em 1em'}}>
                <img src={src} alt=""  />

                </div>
            </div>
            <div className="midFooter">
                <p style={{ color: 'white', fontSize: '1em',}}> <FaLandmark/> Uiet Panjab University, <br />
                    Sector 14, Chandigarh, 160014
                </p>
                <p style={{ color: 'white', fontSize: '1em'}}> <FaEnvelope/> awaazfoundation@gmail.com</p>
                <div className='linkFooter' style={{ display: 'flex' }}>

                    <ul style={{color:'white',display:'flex',listStyle:'none'}}>
                        <li style={{margin:'1em 1em'}}><FaGithub size={'2em'}/></li>
                        <li  style={{margin:'1em 1em'}}><FaFacebook size={'2em'}/></li>
                        <li  style={{margin:'1em 1em'}}><FaGoogle size={'2em'}/></li>
                        <li  style={{margin:'1em 1em'}}><FaLinkedin size={'2em'}/></li>
                    </ul>

            </div>
                <div>
                    <p class="text-light py-4 mb-4">
                    <FaCopyright/>  Copyright &copy;2021 AWAAZ FOUNDATION
                    </p>
                </div>
        </div>

            <div className="rightFooter">
                <h3 style={{ color: 'white', fontSize: '1.5em' }}>ABOUT <span style={{ color: '#ffc107' }}>US</span></h3>
                <p  style={{color:'white'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis aliquid pariatur in, quaerat harum dolores quis voluptates laabore excepturi! Labore, unde quae laborum, eos repellendus maxime, ut voluptates illum similique esse placeat.</p>
            </div>
        </div>
    )
}
