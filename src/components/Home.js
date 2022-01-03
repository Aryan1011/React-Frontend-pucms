
import React from 'react'
import HomeHeader from './homeComponents/HomeHeader'
import News from './homeComponents/News'
import Modular from './homeComponents/Modular'
import src1 from '../assets/Uiet.jpg'
import src2 from '../assets/dental.png'
import src3 from '../assets/Uils.jpg'
import src4 from '../assets/success1.jpeg'
import src5 from '../assets/success2.jpg'
import src6 from '../assets/success3.jpg'

const reachData = [
    {
        imgsrc: src1,
        content: "University Institute of Engineering And Technology with over 2500 students is the biggest department of Punjab University. Constantly striving for students welfare Awaaz recieves ample of complaints from UIET.  ",
    },
    {
        imgsrc: src2,
        content: "Dr. Harvansh Singh Judge Institute of Dental Sciences & Hospital  encompasses a total of 18 departments published a survey about where students chose Online option over offline to File a complaint.",
    },
    {
        imgsrc: src3,
        content: "University Institute of Legal Studies (UILS) was established as constituent department of Panjab University, in the academic session 2004-05. Came forward and realised Punjab university with the actual need of an online complaint management system.",
    },
]


const successData = [
    {
        imgsrc: src4,
        content: "Punjab Univeristy's leading issue of accomodation effects over a thousand of stdents every year. The shortage of hostel rooms along with the hectic paperwork cause a no. of problems. Awaaz has cnontributed in helping many students who face this issue.",
    },
    {
        imgsrc: src5,
        content: "The critic dose in a democratic set up is important for the sustenance of the system itself. A fear of geting names on the red list is known to all thus Awaaz has helped many students accross the campus in different cases. Sooner or later the complaints are solved under pressure.",
    },
    {
        imgsrc: src6,
        content: "Different parties with different Agendas often create a dramatic atmosphere in campus. But does anybody ask what students want. Top complaitns of Awaaz sometimes find a place here and there. The right mailman to get your problems to the right Ears.",
    },
]



function Home() {
    return (
        <div >
            <HomeHeader />
            <Modular data={reachData} title="OUR REACH" />
            <News/>
            <Modular data={successData} title="SUCCESS STORIES" />
            
        </div>
    )
}

export default Home
