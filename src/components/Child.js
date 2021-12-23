import React ,{useEffect} from 'react';
import {useParams} from "react-router-dom";
import axios from 'axios'

function Child  () {

    let {id} = useParams();
    console.log(id);
    const fetchComplaint = async () =>{
       const response = await axios.get(`http://localhost:5000/api/complaints/${id}`);
       console.log(response.data);
    }

    useEffect(() => {
        fetchComplaint();
    }, [])

    return (
        <div>
             {/* bdi complaint  */}
        </div>
    )
}

export default Child