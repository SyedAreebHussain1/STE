import React, { useState,useRef } from 'react'
import * as emailjs from 'emailjs-com';

const Caffeine = () => {
    const [state,setState]=useState({   name:"",
        email:"",
        message:""})
        const formRef = useRef();
        const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
        to_email:state.email,
        to_name:state.name,
        message:state.message,
    }
            const service_id = "service_hkqpwyi"
            const template_id = "template_mk0oonh"
            const user_id = "hylGDgj3wVeAgs1Or"
                  
    emailjs
    .send(service_id, template_id, data, user_id)
    .then(
      (res) => {
        console.log("SUCCESS!",res);
      },
      (error) => {
        console.log("FAILED...", error);
      }
    );
        }
  return (
    <form ref={formRef} onSubmit={handleSubmit} className='emailForm'>
        <input type='text' placeholder='Your Name' value={state.name}  onChange={(e) => setState({...state,name:e.target.value})}/>
        <input type='email' placeholder='Your Email' value={state.email}  onChange={(e) => setState({...state,email:e.target.value})}/>
        <textarea cols="30"rows="10"  value={state.message}  onChange={(e) => setState({...state,message:e.target.value})}>
        </textarea>
             <button type='submit'>Send Email</button>
    </form>
  )
}

export default Caffeine