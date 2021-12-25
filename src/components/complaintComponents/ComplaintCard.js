import React from 'react'
import { FaUser, FaBook, FaAddressBook, FaBible, FaEdit, FaBitbucket } from 'react-icons/fa';
import {Link} from "react-router-dom"

function ComplaintCard({complaint}) {
    return (
                        <div className="complaintCard">
            <div className="upperComplaint">
                <div className="complaintUser">
                        <div className='iconComplaint'>
                    <FaUser/>
                        </div>
                        <div className='halfBoxComplaint'>
                     <p>{complaint.name}</p>
                        </div>
                </div>
                <div className="complaintDepartment">
                <div className='iconComplaint'>
                    <FaBook/>
                        </div>
                        <div className='halfBoxComplaint'>
                     <p>{complaint.department}</p>
                        </div>
                </div>
            </div>

                <div className="complaintSubject">
                <div className='iconFullComplaint'>
                    <FaAddressBook/>
                        </div>
                        <div className='boxFullComplaint'>
                    <p>{complaint.subject}</p>
                        </div>
                </div>

                <div className="complaintDetail">
                <div className='iconFullComplaint'>
                    <FaBible/>
                        </div>
                        <div className='boxFullComplaint'>
                    
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
