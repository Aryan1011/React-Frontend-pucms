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
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam reiciendis nam culpa hic, recusandae quo dolorem modi illo nesciunt alias. Quod asperiores dolorum, enim voluptatibus nesciunt alias aliquid natus cumque saepe dolor?",
    },
    {
        imgsrc: src2,
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam reiciendis nam culpa hic, recusandae quo dolorem modi illo nesciunt alias. Quod asperiores dolorum, enim voluptatibus nesciunt alias aliquid natus cumque saepe dolor?",
    },
    {
        imgsrc: src3,
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam reiciendis nam culpa hic, recusandae quo dolorem modi illo nesciunt alias. Quod asperiores dolorum, enim voluptatibus nesciunt alias aliquid natus cumque saepe dolor?",
    },
]


const successData = [
    {
        imgsrc: src4,
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam reiciendis nam culpa hic, recusandae quo dolorem modi illo nesciunt alias. Quod asperiores dolorum, enim voluptatibus nesciunt alias aliquid natus cumque saepe dolor?",
    },
    {
        imgsrc: src5,
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam reiciendis nam culpa hic, recusandae quo dolorem modi illo nesciunt alias. Quod asperiores dolorum, enim voluptatibus nesciunt alias aliquid natus cumque saepe dolor?",
    },
    {
        imgsrc: src6,
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam reiciendis nam culpa hic, recusandae quo dolorem modi illo nesciunt alias. Quod asperiores dolorum, enim voluptatibus nesciunt alias aliquid natus cumque saepe dolor?",
    },
]



function Home() {
    return (
        <div>
            <HomeHeader />
            <Modular data={reachData} title="OUR REACH" />
            <News/>
            <Modular data={successData} title="SUCCESS STORIES" />
            
        </div>
    )
}

export default Home
