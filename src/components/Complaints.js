import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FaUser, FaBook, FaAddressBook, FaBible, FaEdit, FaBitbucket } from 'react-icons/fa'
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link,
    useParams
} from "react-router-dom";
import Details from './complaintComponents/Details'
function Complaints() {

    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users").then(response => { setData(response.data) });

    }, [])




    return (
      <div className='complaintCards'>
        <h1>All Complaints </h1>
            <div className="complaintCard">
            <div className="upperComplaint" style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                <div className="complaintUser">
                        <div style={{width:'20%',display:'flex',justifyContent:'center',alignItems:'center'}}>
                    <FaUser/>
                        </div>
                        <div style={{width:'80%',display:'flex',justifyContent:'center',alignItems:'center'}}>
                     <p>Ankush Kumar</p>
                        </div>
                </div>
                <div className="complaintDepartment">
                <div style={{width:'20%',display:'flex',justifyContent:'center',alignItems:'center'}}>
                    <FaBook/>
                        </div>
                        <div style={{width:'80%',display:'flex',justifyContent:'center',alignItems:'center'}}>
                     <p>UIET</p>
                        </div>
                </div>
            </div>

                <div className="complaintSubject">
                <div style={{width:'10%',display:'flex',justifyContent:'center',alignItems:'center'}}>
                    <FaAddressBook/>
                        </div>
                        <div style={{width:'90%',display:'flex',justifyContent:'center',alignItems:'center'}}>
                    <p>Dekho kehne ki bat hai ye to hota rhta hai.</p>
                        </div>
                </div>

                <div className="complaintDetail">
                <div style={{width:'10%',display:'flex',justifyContent:'center',alignItems:'center'}}>
                    <FaBible/>
                        </div>
                        <div style={{width:'90%',height:'60%',display:'flex',justifyContent:'center',alignItems:'center'}}>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit accusantium tenetur perferendis vel beatae temporibus quam magnam explicabo distinctio, possimus saepe commodi, reiciendis dolorum rerum blanditiis nam, itaque alias asperiores ducimus odit!</p>
                        </div>
                </div>
                <div className="complaintOptions" style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                <div style={{margin:'1em 1em'}}>
                    <FaEdit/>
                </div>
                <div style={{margin:'1em 1em'}}>
                    <FaBitbucket/>
                </div>
                </div>
            </div>

        
        </div>

    );
}



export default Complaints
