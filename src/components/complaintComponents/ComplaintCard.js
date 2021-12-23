import React from 'react'
import { FaUser, FaBook, FaAddressBook, FaBible, FaEdit, FaBitbucket } from 'react-icons/fa';
import {Link} from "react-router-dom"

function ComplaintCard({complaint}) {
    console.log(complaint);
    
    return (
                        <div className="complaintCard">
            <div className="upperComplaint" style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                <div className="complaintUser">
                        <div style={{width:'20%',display:'flex',justifyContent:'center',alignItems:'center'}}>
                    <FaUser/>
                        </div>
                        <div style={{width:'80%',display:'flex',justifyContent:'center',alignItems:'center'}}>
                     <p>{complaint.name}</p>
                        </div>
                </div>
                <div className="complaintDepartment">
                <div style={{width:'20%',display:'flex',justifyContent:'center',alignItems:'center'}}>
                    <FaBook/>
                        </div>
                        <div style={{width:'80;%',display:'flex',justifyContent:'center',alignItems:'center'}}>
                     <p>{complaint.department}</p>
                        </div>
                </div>
            </div>

                <div className="complaintSubject">
                <div style={{width:'10%',display:'flex',justifyContent:'center',alignItems:'center'}}>
                    <FaAddressBook/>
                        </div>
                        <div style={{width:'90%',display:'flex',justifyContent:'center',alignItems:'center'}}>
                    <p>{complaint.subject}</p>
                        </div>
                </div>

                <div className="complaintDetail">
                <div style={{width:'10%',display:'flex',justifyContent:'center',alignItems:'center'}}>
                    <FaBible/>
                        </div>
                        <div style={{width:'90%',height:'60%',display:'flex',justifyContent:'center',alignItems:'center'}}>
                    
                    <Link to={`/complaint/${complaint._id}`}>
                    <p>Read more</p>
                    </Link>
                        </div>
                </div>
                {/* <div className="complaintOptions" style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                <div style={{margin:'1em 1em'}}>
                    <FaEdit/>
                </div>
                <div style={{margin:'1em 1em'}}>
                    <FaBitbucket/>
                </div>
                </div> */}
            </div>
    )
}

export default ComplaintCard
