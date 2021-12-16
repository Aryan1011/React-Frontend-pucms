import React from 'react'
import img1 from '../../assets/profile-2.jpeg'
import img2 from '../../assets/profile-3.jpeg'
import img3 from '../../assets/profile-4.jpeg'
const data = [
    {
        src: img1,
        content: ""
    },
    {
        src: img2,
        content: ""
    },
    {
        src: img3,
        content: ""
    }
]

function News() {
    return (
        <div>
            <h1>News</h1>
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
                            <div key={i} className="newsCard">

                                <div className='newsContent'>
                                    <p>{d.content}</p>
                                </div>

                                <div className='newsImage'>
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
