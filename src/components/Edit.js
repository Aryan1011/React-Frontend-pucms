import React, { useEffect, useState } from 'react'
import { useParams,useNavigate } from "react-router-dom";
import axios from 'axios'

const Edit = ({ user }) => {
    const navigate = useNavigate();
    const { id } = useParams();
    console.log(id);

    const [complaint, setComplaint] = useState();

    const fetchComplaint = async () => {
        const response = await axios.get(`http://localhost:5000/api/complaints/${id}`);
        console.log(response.data);
        setComplaint(response.data);
        console.log("old complaint");

    }

    useEffect(() => {
        fetchComplaint();
    }, [id])

    const inputEvent = (event) => {

        const { name, value } = event.target;
        console.log(name);
        setComplaint((preValue) => {
            return {
                ...preValue,
                [name]: value
            }
        });
        if (user) {

            setComplaint((preValue) => {
                return {
                    ...preValue,
                    email: user.email
                }
            })
        }
    };


    const inputRadioEvent = (event) => {
        setComplaint((prev) => {
            return {
                ...prev,
                gender: event.target.value
            }
        })
    };

    const onSubmits = async (event) => {
        event.preventDefault();
        const res = await axios.put(`http://localhost:5000/api/complaints/${id}`, complaint);
        console.log(res);
        navigate('/complaint');
    }
    return (
    

        <div className='createEditComplaint'>

            <div>
            <button className='navButtons'  onClick={() => navigate(-1)}>
                    Go Back
                </button>
            </div>
            <div className="createHeading">
                <h1>Edit A Complaint</h1>
            </div>
            {complaint && <form onSubmit={onSubmits}>

<div className="createForm">
    <div className="formGroup">
        <label htmlFor="roll" className='labelCreate'>Roll</label>
        <input type="hidden" name='id' value={""} />
        <input type="text" name='roll' value={complaint.roll} onChange={inputEvent}  />
    </div>
    <div className="formGroup">
        <label htmlFor="name" className='labelCreate'>Name</label>
        <input type="text" name='name' value={complaint.name} onChange={inputEvent} />
    </div>

    <div className="formGroup">
        <label htmlFor="department" className='labelCreate'>Department</label>
        <input type="text" name='department' value={complaint.department} onChange={inputEvent}  />
    </div>
    <div className="formGroup">
        <label htmlFor="gender" className='labelCreate'>Gender</label>
        <div className="radioInline">
            <input type="radio" id='radio-2' name='gender' checked={complaint.gender==="Male"&&1} value={"Male"} onChange={(e) => inputRadioEvent(e)} />
            <label htmlFor="radio-2" className='radioLabel'  >Male</label>
        </div>
        <div className="radioInline">
            <input type="radio" id='radio-3' name='gender' checked={complaint.gender==="Female"&&1} value={"Female"} onChange={(e) => inputRadioEvent(e)} />
            <label htmlFor="radio-3" className='radioLabel'>FeMale</label>
        </div>
    </div>
    <div className="formGroup">
        <label htmlFor="post" className='labelCreate'>Concerned Post</label>
        <input type="text" name='post' value={complaint.post} onChange={inputEvent}  />
    </div>
    <div className="formGroup">
        <label htmlFor="subject" className='labelCreate'>Subject</label>
        <input type="text" name='subject' value={complaint.subject} onChange={inputEvent}  />
    </div>
    <div className="formGroup">
        <label htmlFor="detail" className='labelCreate'>Detail</label>
        <textarea name="detail" value={complaint.detail} onChange={inputEvent} ></textarea>
    </div>
    <div className="formGroup">
        <button type='submit' className='createSubmit' onClick={(e) => { onSubmits(e) }}  >Make Changes</button>

    </div>
</div>
</form> }
        </div>

    )
}


export default Edit;