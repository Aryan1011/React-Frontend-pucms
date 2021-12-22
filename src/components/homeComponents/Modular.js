import React from 'react'



function Modular({data,title}) {
    return (
        <div className='modularContainer'>
            <h1>{title}</h1>
            <div className='modularCard'>
            {data.map((d) => {
                return (
                    <div className='reachCard'>
                    <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                        <img src={d.imgsrc} style={{width:"70%",margin:'1em 10%',boxShadow: '2px 2px 2px black'}} alt="" />
                    </div>
                        <div className="contentCard">
                            <p style={{margin:"1em 1em",fontFamily:'cursive'}} >{d.content}</p>
                        </div>
                    </div>
                )
            })}
            </div>
        </div>
    )
}

export default Modular
