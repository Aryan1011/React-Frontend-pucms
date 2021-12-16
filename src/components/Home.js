import { tab } from '@testing-library/user-event/dist/tab'
import React from 'react'
import HomeHeader from './homeComponents/HomeHeader'
import News from './homeComponents/News'
import Modular from './homeComponents/Modular'
import src1 from '../assets/dental.png'
import src2 from '../assets/Uiet.jpg'
import src3 from '../assets/Uils.jpg'
import src4 from '../assets/pehli.webp'
import src5 from '../assets/dusri.jpg'
import src6 from '../assets/teesra.jpg'

const reachData = [
    {
        imgsrc: src1,
        content: "",
    },
    {
        imgsrc: src2,
        content: "",
    },
    {
        imgsrc: src3,
        content: "",
    },
]


const successData = [
    {
        imgsrc: src4,
        content: "",
    },
    {
        imgsrc: src5,
        content: "",
    },
    {
        imgsrc: src6,
        content: "",
    },
]



function Home() {
    return (
        <div>
            <HomeHeader />
            <Modular data={reachData} title="Reach" />
            <News/>
            <Modular data={successData} title="Success" />
            
        </div>
    )
}

export default Home
