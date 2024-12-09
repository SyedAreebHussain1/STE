import axios from 'axios';
import React,{useState,useRef} from 'react'

const EmailRestApi = () => {
    const [state,setState]=useState({   name:"",
    email:"",
    message:""})
    const formRef = useRef();
    const handleSubmit  = async (e) => {
e.preventDefault();
        const serviceId = "service_hkqpwyi"
        const templateId = "template_kgy9b1q"
        const publicKey = "hylGDgj3wVeAgs1Or"

const data = {
    service_id:serviceId,
    template_id:templateId,
    user_id:publicKey,
         template_params :{
            form_name:state.name,
            form_email:state.email,
            to_name:"Web Test",
            form_message:state.message,
        }}
        try{
            const res = await axios.post("https://api.emailjs.com/api/v1.0/email/send",data)
            console.log(data,'res',res)
        }catch(error){
            console.log(error)
        }
    }
  return (
    <form  onSubmit={handleSubmit} className='emailForm'>
    <input type='text' placeholder='Your Name' value={state.name}  onChange={(e) => setState({...state,name:e.target.value})}/>
    <input type='email' placeholder='Your Email' value={state.email}  onChange={(e) => setState({...state,email:e.target.value})}/>
    <textarea cols="30"rows="10"  value={state.message}  onChange={(e) => setState({...state,message:e.target.value})}>
    </textarea>
         <button type='submit'>Send Email</button>
</form>
  )
}

export default EmailRestApi