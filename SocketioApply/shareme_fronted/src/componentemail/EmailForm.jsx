import React, { useState,useRef } from 'react'
import emailjs from "@emailjs/browser";

const EmailForm = () => {
    const [state,setState]=useState({   name:"",
        email:"",
        message:""})
        const formRef = useRef();
        const handleSubmit = (e) => {
    e.preventDefault();
            const serviceId = "service_hkqpwyi"
            const templateId = "template_xkqlfof"
            const publicKey = "hylGDgj3wVeAgs1Or"


            const templateParams = {
                form_name:state.name,
                form_email:state.email,
                form_message:state.message,
                to_name:"Web Test"
            }
            
    emailjs
    .sendForm(serviceId, templateId, templateParams, publicKey)
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

export default EmailForm