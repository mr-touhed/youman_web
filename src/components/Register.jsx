"use client"
import { FaUser } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoMdEyeOff } from "react-icons/io";
import { useState } from "react";
import { IoEye } from "react-icons/io5";
import { baseURL } from "@/utils/baseURL";
import { useRouter } from "next/navigation";
const Register = () => {
    const [showPassword,setPassword] = useState(false);
   const [user,setUser] = useState({name:"",email:"",password:""});
    const router = useRouter()
   const handelChange = (e) =>{
    setUser(prev => ({...prev, [e.target.name]: e.target.value}))
   }

    const handel_register =async  (e) =>{
        e.preventDefault();
        
        try {
            const response = await fetch(`${baseURL}/register`,{
                method:"POST",
                headers:{"content-type": "application/json"},
                body:JSON.stringify(user)
            })

            const result = await response.json();
            if(result.status.type){
                router.push("/cpanel")
            }else{
                alert(result.status.message)
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="w-full max-w-[400px] h-[400px] p-4 rounded-lg bg-[#1E3760] flex flex-col justify-center">
                <h2 className="text-4xl text-center text-gray-300 ">Register</h2>
            <form onSubmit={handel_register}>
            <div className="flex flex-col relative">
                    <label htmlFor="name" className="text-gray-300 p-1">Full Name</label>
                    <input required onChange={(e)=> handelChange(e)} value={user.name} type="text" name="name" id="" className="p-2 rounded-md bg-[#38588b99] text-white outline-[1px]"  />
                    <span className="absolute right-2 -top-2 h-full flex items-end  "><FaUser className="text-gray-300 w-5 h-5"/></span>
                </div>
                <div className="flex flex-col relative">
                    <label htmlFor="email" className="text-gray-300 p-1">Email</label>
                    <input required onChange={(e)=> handelChange(e)} value={user.email} type="email" name="email"  className="p-2 rounded-md bg-[#38588b99] text-white outline-[1px]" />
                    <span className="absolute right-2 -top-2 h-full flex items-end  "><MdEmail className="text-gray-300 w-5 h-5"/></span>
                </div>
                <div className="flex flex-col relative">
                    <label htmlFor="password" className="text-gray-300 p-1">Password</label>
                    <input required onChange={(e)=> handelChange(e)} value={user.password}  type={showPassword ? "text" : "password"} name="password" id="" className="p-2 rounded-md bg-[#38588b99] text-white" />
                    <span className="absolute right-2 -top-2 h-full flex items-end  ">{
                        showPassword ? <IoEye onClick={()=>setPassword(!showPassword)} className="text-gray-300 w-5 h-5 cursor-pointer"/> :
                        <IoMdEyeOff onClick={()=>setPassword(!showPassword)} className="text-gray-300 w-5 h-5 cursor-pointer"/>
                        }</span>
                </div>
                    <input type="submit" value="Register" className="bg-green-700 w-lg block px-6 py-2 mx-auto mt-4 rounded-md text-white"  />
            </form>
        </div>
    );
};

export default Register;