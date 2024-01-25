import React from 'react'
import { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';

function Profile() {
  const [open, setOpen] = useState(false);
  return (
    <>
    <div className='card shadow p-5 mb-5'>
        <div className='d-flex justify-content-between'>
            <h2>Profile</h2>
            <button className='btn btn-outline-info' onClick={()=>setOpen(!open)}><i class="fa-solid fa-angle-down"></i></button>
        </div>
        <Collapse in={open}>
        <div className='row justify-content-center mt-5'>
          <label htmlFor="profile">
            <input type="file" id="profile" style={{display:'none'}}></input>
            <img width={'150px'} height={'150px'} className='rounded'
            src="https://p7.hiclipart.com/preview/184/113/161/user-profile-computer-icons-clip-art-profile.jpg"></img>
          </label>
          <div>
            <input type="text" name="" id="" placeholder='Github Link' className='form-control'></input>
          </div>
          <div>
            <input type="text" placeholder='LinkedIn Link' className='form-control'></input>
          </div>
          <div className='mt-3 mb-1'>
            <button className='btn btn-success rounded w-100'>Update
            </button>
          </div>
        </div>
        </Collapse>
        </div>
       
    </>
  )
}

export default Profile