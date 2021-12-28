import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";
function Create ({user}){

        const navigate=useNavigate();
        const [complaint,setComplaint]= useState({
            roll: "",
            name: "",
            email: user.email,
            department: "",
            gender: "",
            post: "",
            subject: "",
            detail: "",
        });
        const inputEvent=(event)=>{
            const {name,value}=event.target;
            console.log(name);
            setComplaint((preValue)=>{
                    return{
                        ...preValue,
                
                        [name]:value
                    }
            });
        };
        const inputRadioEvent=(event)=>{
            setComplaint((prev)=>{
                return{
                    ...prev,
                    gender:event.target.value
                }
            })
        };
        const onSubmits= async(event)=>{
            event.preventDefault();
            console.log(user);
            const res = await axios.post(`https://backendpucmsawaaz.herokuapp.com/api/complaints`,complaint);
            console.log(res);  
            navigate('/complaint')
        }
    return(
        <div className='createComplaint'>
        <div>
            <button className='navButtons'  onClick={() => navigate(-1)}>
                    Go Back
                </button>
            </div>
        <div className="createHeading">
            <h1>File A Complaint</h1>
        </div>
        <form onSubmit={onSubmits}>

        <div className="createForm">
            <div className="formGroup">
                <label htmlFor="roll" className='labelCreate'>Roll</label>
                <input type="hidden" name='id' value={""} />
                <input type="text" name='roll' value={complaint.roll} onChange={inputEvent} placeholder='EGXXXXX' />
            </div>
            <div className="formGroup">
                <label htmlFor="name" className='labelCreate'>Name</label>
                <input type="text" name='name' value={complaint.name} onChange={inputEvent} placeholder='David Warner' />
            </div>
            <div className="formGroup">
                <label htmlFor="department" className='labelCreate'>Department</label>
                <input type="text" name='department' value={complaint.department} onChange={inputEvent} placeholder='UIET' />
            </div>
            <div className="formGroup">
                <label htmlFor="gender" className='labelCreate'>Gender</label>
                <div className="radioInline">
                    <input type="radio" id='radio-2' name='gender' value={"Male"} onChange={(e)=>inputRadioEvent(e)} />
                    <label htmlFor="radio-2"  className='radioLabel'>Male</label>
                </div>
                <div className="radioInline">
                    <input type="radio" id='radio-3' name='gender' value={"Female"} onChange={(e)=>inputRadioEvent(e)} />
                    <label htmlFor="radio-3"  className='radioLabel'>FeMale</label>
                </div>
            </div>
            <div className="formGroup">
                <label htmlFor="post" className='labelCreate'>Concerned Post</label>
                <input type="text" name='post' value={complaint.post} onChange={inputEvent} placeholder='Dean' />
            </div>
            <div className="formGroup">
                <label htmlFor="subject" className='labelCreate'>Subject</label>
                <input type="text" name='subject' value={complaint.subject} onChange={inputEvent} placeholder='Subject of complaint' />
            </div>
            <div className="formGroup">
                <label htmlFor="detail" className='labelCreate'>Detail</label>
                <textarea name="detail" value={complaint.detail}  onChange={inputEvent} placeholder='Detail of complaint'></textarea>
            </div>
            <div className="formGroup">
                <button type='submit' className='createSubmit' onClick={(e)=>{onSubmits(e)}}  >File Complaint</button>
            </div>
        </div>
        </form>
        </div>
    )
}
export default Create;