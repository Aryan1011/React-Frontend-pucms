import React from 'react'


function Create (){
    return(
        <div className='createComplaint'>
        <div className="createHeading">
            <h1>File A Complaint</h1>
        </div>
        <div className="createForm">
            <div className="formGroup">
                <label htmlFor="roll" className='labelCreate'>Roll</label>
                <input type="hidden" name='id' value={""} />
                <input type="text" name='roll' value={""} placeholder='EGXXXXX' />
            </div>
            <div className="formGroup">
                <label htmlFor="name" className='labelCreate'>Name</label>
                <input type="text" name='name' value={""} placeholder='David Warner' />
            </div>
            <div className="formGroup">
                <label htmlFor="email" className='labelCreate'>Email</label>
                <input type="text" name='email' value={""} placeholder='example@gmail.com' />
            </div>
            <div className="formGroup">
                <label htmlFor="gender" className='labelCreate'>Gender</label>
                <div className="radioInline">
                    <input type="radio" id='radio-2' name='gender' value={"Male"} />
                    <label htmlFor="radio-2" className='radioLabel'>Male</label>
                </div>
                <div className="radioInline">
                    <input type="radio" id='radio-3' name='gender' value={"Female"} />
                    <label htmlFor="radio-3" className='radioLabel'>FeMale</label>
                </div>
            </div>
            <div className="formGroup">
                <label htmlFor="status" className='labelCreate'>Status</label>
                <div className="radioInline">
                    <input type="radio" id='radio-4' name='status' value={"Active"} />
                    <label htmlFor="radio-4" className='radioLabel'>Active</label>
                </div>
                <div className="radioInline">
                    <input type="radio" id='radio-5' name='status' value={"Inactive"} />
                    <label htmlFor="radio-5" className='radioLabel'>Inactive</label>
                </div>
            </div>

            <div className="formGroup">
                <label htmlFor="post" className='labelCreate'>Concerned Post</label>
                <input type="text" name='post' value={""} placeholder='Dean' />
            </div>
            <div className="formGroup">
                <label htmlFor="subject" className='labelCreate'>Subject</label>
                <input type="text" name='subject' value={""} placeholder='Subject of complaint' />
            </div>
            <div className="formGroup">
                <label htmlFor="detail" className='labelCreate'>Detail</label>
                <textarea name="Detail"  cols="60" rows="5" placeholder='Detail of complaint'></textarea>
            </div>
            <div className="formGroup">
                <button type='submit' className='createSubmit'>File Complaint</button>

            </div>

        </div>
            
        </div>

    )
}




export default Create;