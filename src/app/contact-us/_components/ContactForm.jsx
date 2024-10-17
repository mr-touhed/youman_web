import React from 'react';
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineMailLock,MdPhone  } from "react-icons/md";
import { LuMessageSquarePlus } from "react-icons/lu";


const ContactForm = () => {
    return (
        <form className='flex flex-col gap-3'>
                <div className='w-full space-y-1'>
                    <label htmlFor="name" className='flex font-bold items-center gap-1'>
                        <span><FaRegUserCircle className='w-5 h-5'/></span>
                        <span>Name</span>
                        </label>
                    <input type="text" name="" id=""  className='w-full border p-2 border-black '/>
                </div>
                <div className='w-full space-y-1'>
                    <label htmlFor="email" className='flex font-bold items-center gap-1'>
                        <span><MdOutlineMailLock className='w-5 h-5'/></span>
                        <span>Email</span>
                        </label>
                    <input type="email" name="" id=""  className='w-full border p-2 border-black '/>
                </div>
                <div className='w-full space-y-1'>
                    <label htmlFor="Phone" className='flex font-bold items-center gap-1'>
                        <span><MdPhone className='w-5 h-5'/></span>
                        <span>Phone</span>
                        </label>
                    <input type="tel" name="" id=""  className='w-full border p-2 border-black '/>
                </div>
                <div className='w-full space-y-1'>
                    <label htmlFor="message" className='flex font-bold items-center gap-1'>
                        <span><LuMessageSquarePlus className='w-5 h-5'/></span>
                        <span>Message</span>
                        </label>
                    <textarea type="tel" name="" id=""  className='w-full h-44 border p-2 border-black '/>
                </div>

                <button type='submit' className='bg-black p-2 text-white shadow-black'>Send Message</button>
        </form>
    );
};

export default ContactForm;