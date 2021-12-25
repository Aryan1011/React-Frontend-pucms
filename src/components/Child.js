import { useParams ,Link } from "react-router-dom";
import axios from 'axios'
import { FaEdit, FaDeaf } from 'react-icons/fa'
import React, { useEffect, useState } from 'react'

function Child({user}) {
    
    const [data, setData] = useState([]);
    const [self , setSelf] = useState(false);
    let { id } = useParams();
    const fetchComplaint = async () => {
        const response = await axios.get(`http://localhost:5000/api/complaints/${id}`);
        console.log(id);
        setData(response.data);
    }

    useEffect(() => {
        fetchComplaint();
    }, [])

    useEffect(()=>{
        if(user.email ===data.email){
            setSelf(true);  
        }
    },[id,data])

    const deleteComplaint=async ()=>{
        console.log(user);
        const deleteResponse = await axios.delete(`http://localhost:5000/api/complaints/${id}`);
        console.log(deleteResponse);
    }
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
                {self?(<div className="boxbtn">
                    <Link to={`/complaint/edit/${id}`}>
                    <div style={{margin:'0em 1em'}}>
                        <FaEdit size={'2em'} />
                    </div>
                    </Link>

                    <div onClick={()=>deleteComplaint()} style={{margin:'0em 1em'}}>
                        <FaDeaf  size={'2em'} />
                    </div>
            
                </div>):<></>}
                
            </div>
        </div>
    )
}

export default Child