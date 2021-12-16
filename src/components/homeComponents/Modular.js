import React from 'react'



function Modular({data,title}) {
    return (
        <div className='reachContainer'>
            <h1>{title}</h1>
            {data.map((d) => {
                return (
                    <div className='reachCard'>
                        <img src={d.imgsrc} style={{width:"70%"}} alt="" />
                        <div className="contentCard">
                            <p>{d.content}</p>
                        </div>
                    </div>
                )
            })}

        </div>
    )
}

export default Modular
