"use client"
import React, { useEffect, useState } from 'react';
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineMailLock,MdPhone  } from "react-icons/md";
import { LuMessageSquarePlus } from "react-icons/lu";
import { loadCaptchaEnginge, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha'
import { baseURL } from '@/utils/baseURL';

const ContactForm = () => {
    const [contactData,setContactData] = useState({name:"",email:"",phone:"",message:""});
    const [capcha,setCapcha] = useState('');
    const [loading,setLoading] = useState(false)

const handel_input = (e) =>{
    setContactData(prev => ({...prev, [e.target.name]:e.target.value}))
}

    useEffect(()=>{
        loadCaptchaEnginge(6, "#0EA32C","white",'Lower_Characters_Only')
    },[])

    const handel_submit =async (e) =>{
        e.preventDefault()
        setLoading(true)
        try {
            if (validateCaptcha(capcha) !==true) {
                alert('Invalide Captcha ');
                setLoading(false)
            }else{
                const response = await fetch(`${baseURL}/contact-us`,{
                    method:"POST",
                    headers:{
                        "content-type":"application/json"
                    },
                    body:JSON.stringify(contactData)
                })

                const result = await response.json()
                setLoading(false)
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <form onSubmit={handel_submit} className='flex flex-col gap-3'>
                <div className='w-full space-y-1'>
                    <label htmlFor="name" className='flex text-sm items-center gap-1'>
                        <span><FaRegUserCircle className='w-4 h-4'/></span>
                        <span>Name</span>
                        </label>
                    <input onChange={(e)=>handel_input(e)} value={contactData.name} required type="text" name="name" id=""  className='w-full border rounded-md p-2'/>
                </div>
                <div className='w-full space-y-1'>
                    <label htmlFor="email" className='flex text-sm items-center gap-1'>
                        <span><MdOutlineMailLock className='w-4 h-4'/></span>
                        <span>Email</span>
                        </label>
                    <input onChange={(e)=>handel_input(e)} value={contactData.email} type="email" name="email" id=""  className='w-full border p-2 rounded-md '/>
                </div>
                <div className='w-full space-y-1'>
                    <label htmlFor="Phone" className='flex text-sm items-center gap-1'>
                        <span><MdPhone className='w-4 h-4'/></span>
                        <span>Phone</span>
                        </label>
                    <input onChange={(e)=>handel_input(e)} value={contactData.phone} type="tel" name="phone" id=""  className='w-full border p-2 rounded-md '/>
                </div>
                <div className='w-full space-y-1'>
                    <label htmlFor="message" className='flex text-sm items-center gap-1'>
                        <span><LuMessageSquarePlus className='w-4 h-4'/></span>
                        <span>Message</span>
                        </label>
                    <textarea onChange={(e)=>handel_input(e)} value={contactData.message} type="tel" name="message" id=""  className='w-full h-44 border p-2 rounded-md '/>
                </div>
                 <div className='flex items-center gap-6 max-w-sm  '>
                    
                    <LoadCanvasTemplateNoReload eloadText="Loading Captcha"/>
                   
                    <input onChange={(e) => setCapcha(e.target.value)} type="text" className='w-full border p-1 rounded-md ' placeholder='Captcha'/>
                    </div>
                <button type='submit' disabled={loading} className='bg-black p-2 text-white disabled:bg-slate-500 shadow-black rounded-md'>{loading ? "Loading..." : "Send Message"}</button>
        </form>
    );
};

export default ContactForm;