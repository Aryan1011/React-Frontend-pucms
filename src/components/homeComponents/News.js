import React from 'react'
import img1 from '../../assets/news1.jpeg'
import img2 from '../../assets/news2.jpg'
import img3 from '../../assets/news3.jpg'
const data = [
    {
        src: img1,
        content: "Punjab University's own Online Complaint management System(CMS) Awaaz helps record and collate complaints as Students and employees report them. An Open Source website dedicated to Punjab University for student's welfare and smooth working. It allows Users to login and file complaint. Later it can be closed, edited or deleted by the same User."
    },
    {
        src: img2,
        content: "An effective complaint management system does more than just help handle feedback from unhappy students and teachers. A modern system also provides proper documentation for the investigation process and allows instituions to link complaints to corrective actions, supplier quality, and provides the ability to re-assess risk. From solving daily issues to fighting over student Rights it plays a crucial role"
    },
    {
        src: img3,
        content: "The grievance redressal mechanism in a democratic set up is important for the sustenance of the system itself. If the grievances of the people are timely solved, the people become satisfied with the working of the Institution and this satisfaction gives stability to the Institution. In the tough times of COVID-19 many Organizations/Institutions realised the need of an online CMS."
    }
]

function News() {
    return (
        <div className='newsParentContainer'>
            <h1 className='newsHeading' id='News' >News</h1>
            <div className='newsContainer'>
                {data.map((d, i) => {

                    if (i % 2 === 0) {
                        return (
                            <div key={i} className="newsCard">
                                <div className='newsImage'>
                                    <img src={d.src} alt="" style={{ width: "100%" }} />
                                </div>

                                <div className='newsContent'>
                                    <p>{d.content}</p>
                                </div>

                            </div>
                        )
                    }
                    else {
                        return (
                            <div key={i} className="newsCard evenNews">

                                <div className='newsContent evenNews_div1'>
                                    <p>{d.content}</p>
                                </div>

                                <div className='newsImage evenNews_div2'>
                                    <img src={d.src} alt="" style={{ width: "100%" }} />
                                </div>
                            </div>
                        )
                    }

                })}

            </div>
        </div>
    )
}

export default News
