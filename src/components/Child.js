import { useParams } from "react-router-dom";
import axios from 'axios'
import { FaEdit, FaDeaf } from 'react-icons/fa'
import React, { useEffect, useState } from 'react'

function Child() {
    const [data, setData] = useState([]);
    let { id } = useParams();
    console.log(id);
    const fetchComplaint = async () => {
        const response = await axios.get(`http://localhost:5000/api/complaints/${id}`);
        setData(response.data);
    }

    useEffect(() => {
        fetchComplaint();
    }, [])

    return (
        <div className="boxChild">
            <div className="boxLeftWrapper">
                <p className='smallBoxChild'> Name : {data.name}</p>
                <p className='smallBoxChild'> department : {data.department}</p>
                <p className='smallBoxChild'> Gender : {data.gender}</p>
                <p className='smallBoxChild'> Gmail : {data.email}</p>
            </div>
            <div className="lakeer">

            </div>
            <div className="boxRight">
                <p className='smallBoxChild'> To: {data.post}</p>
                <p className='smallBoxChild'> Subject: {data.subject}</p>
                <p className='smallBoxChild'> Details: {data.detail}</p>
                <div className="boxbtn">
                    <div style={{margin:'0em 1em'}}>
                        <FaEdit size={'2em'} />
                    </div>
                    <div style={{margin:'0em 1em'}}>
                        <FaDeaf size={'2em'} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Child