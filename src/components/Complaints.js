import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link,
    useParams
} from "react-router-dom";
import ComplaintCard from './complaintComponents/ComplaintCard';
function Complaints({ user }) {
    const [data, setData] = useState([]);
    const getAllComplaints = async () => {
        const response = await axios.get("http://localhost:5000/api/complaints");
        setData(response.data);
        console.log('here');
    }
    useEffect(() => {
        getAllComplaints();
    }, [])
    return (
        <div className='complaintCards' style={{ backgroundColor: ' rgb(247, 240, 240)' }}>
            
            <Link to="/create">
                <button>
                    Create Complaint
                </button>
            </Link>
            <h1>All Complaints </h1>
            <div className='gridContainer'>
                {data?.map((d, i) => {
                    return (
                        <div key={i} className=" gridChild">
                            <ComplaintCard complaint={d} />
                        </div>
                    )
                })}
            </div>
        </div>
    );
}
export default Complaints
