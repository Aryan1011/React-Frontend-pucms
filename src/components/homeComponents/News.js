import React from 'react'
import img1 from '../../assets/profile-2.jpeg'
import img2 from '../../assets/profile-3.jpeg'
import img3 from '../../assets/profile-4.jpeg'
const data = [
    {
        src: img1,
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi quo quia dolore. Quibusdam saepe mollitia iste vero alias dolore adipisci soluta quasi porro eius fugiat, odio, dignissimos non expedita illo fuga exercitationem.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi quo quia dolore. Quibusdam saepe mollitia iste vero alias dolore adipisci soluta quasi porro eius fugiat, odio, dignissimos non expedita illo fuga exercitationem."
    },
    {
        src: img2,
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi quo quia dolore. Quibusdam saepe mollitia iste vero alias dolore adipisci soluta quasi porro eius fugiat, odio, dignissimos non expedita illo fuga exercitationem.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi quo quia dolore. Quibusdam saepe mollitia iste vero alias dolore adipisci soluta quasi porro eius fugiat, odio, dignissimos non expedita illo fuga exercitationem."
    },
    {
        src: img3,
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi quo quia dolore. Quibusdam saepe mollitia iste vero alias dolore adipisci soluta quasi porro eius fugiat, odio, dignissimos non expedita illo fuga exercitationem.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi quo quia dolore. Quibusdam saepe mollitia iste vero alias dolore adipisci soluta quasi porro eius fugiat, odio, dignissimos non expedita illo fuga exercitationem."
    }
]

function News() {
    return (
        <div>
            <h1 className='newsHeading' >News</h1>
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
