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
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { TailSpin } from 'react-loader-spinner'


function Complaints({ user }) {
    const [con,setCon] = useState(false);
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const getAllComplaints = async () => {
        const response = await axios.get("https://backendpucmsawaaz.herokuapp.com/api/complaints");
        setData(response.data);
        setCon(true);
        console.log('here');
    }

    useEffect(() => {
        getAllComplaints();
    }, [])
    return (
        <>


            <div className='complaintCards' style={{ backgroundColor: ' rgb(247, 240, 240)' }}>
                <div className='complaintHeader'>
                    <div>
                        <button className='navButtons' onClick={() => navigate(-1)}>
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


                {
                    !con ? (
                        <div style={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
                            <TailSpin color="#00BFFF" height={180} width={180} />
                        </div>)
                        :
                        (<div className='gridContainer'>
                     {data.map((d, i) => {
                        return (
                            <div key={i} className=" gridChild">
                                <ComplaintCard complaint={d} />
                            </div>
                            )
                    })}
                        </div>)
                        }


            </div>
        </>
    );
}
export default Complaints
