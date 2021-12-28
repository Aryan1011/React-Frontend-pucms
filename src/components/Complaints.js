import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link,
    useParams,
    useNavigate
} from "react-router-dom";
import ComplaintCard from './complaintComponents/ComplaintCard';
function Complaints({ user }) {
    const navigate=useNavigate();
    const [data, setData] = useState([]);
    const getAllComplaints = async () => {
        const response = await axios.get("https://backendpucmsawaaz.herokuapp.com/api/complaints");
        setData(response.data);
        console.log('here');
    }
    useEffect(() => {
        getAllComplaints();
    }, [])
    return (
        <div className='complaintCards' style={{ backgroundColor: ' rgb(247, 240, 240)' }}>
            <div className='complaintHeader'>
            <div>
            <button className='navButtons'  onClick={() => navigate(-1)}>
                    Go Back
                </button>
            </div>
                <div className='ComplaintHeaderCreate'>
                    <Link to="/create">
                        <button className='navButtons'>
                            Create Complaint
                        </button>
                    </Link>
                </div>
                <div className='complaintHeaderHeading'>
                    <h1>All Complaints </h1>
                </div>
            </div>

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
