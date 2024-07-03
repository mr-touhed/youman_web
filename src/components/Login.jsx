"use client"

import { baseURL } from "@/utils/baseURL";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { IoMdEyeOff } from "react-icons/io";
import { IoEye } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

const Login = () => {
    const router = useRouter();
    const [loading,setLoading] = useState(false);
    const [showPassword,setPassword] = useState(false);
    const [user,setUser]= useState({email:"",password:""});
    const [error,setError] = useState({type:"", message:""});
    const handel_change = (e) =>{
        setUser(prev => ({...prev, [e.target.name]: (e.target.value).trim()}))
    }

    const handel_submit = async (e) =>{
        e.preventDefault()
        setLoading(true)
        setError({type:"", message:""})
        try {
            const response = await fetch(`${baseURL}/auth`, {
                method:"POST",
                headers:{
                    "content-type":"application/json"
                },
                body:JSON.stringify(user)
            })
            const result = await response.json();
            
            if(result.error){
                setLoading(false)
                return setError({type:result.errorType, message:result.message})
                
            }else{
                localStorage.setItem('token', result.token);
                router.push("/dashboard")
               return setLoading(false)
            }
        } catch (error) {
            setLoading(false)
            console.log(error);
        }
    }
    return (
        <div className="w-full max-w-[400px] h-[400px] p-4 rounded-lg bg-[#1E3760] flex flex-col justify-center">
                <h2 className="text-4xl text-center text-gray-300 ">Admin Login</h2>
            <form onSubmit={handel_submit}>
            <div>
            <div className="flex flex-col relative">
                    <label htmlFor="email" className="text-gray-300 p-1">Email</label>
                    <input required onChange={(e) => handel_change(e)} value={user.email} type="email" name="email" id="" className="p-2 rounded-md bg-[#38588b99] text-white outline-[1px]" />
                    
                    <span className="absolute right-2 -top-2 h-full flex items-end  "><MdEmail className="text-gray-300 w-5 h-5"/></span>
                </div>
                {error.type === "email" && <span className="text-xs text-red-400 pl-2">{error.message}</span>}
            </div>
                <div>
                <div className="flex flex-col relative">
                    <label htmlFor="password" className="text-gray-300 p-1">Password</label>
                    <input required onChange={(e) => handel_change(e)} value={user.password} type={showPassword ? "text" : "password"} name="password" id="" className="p-2 rounded-md bg-[#38588b99] text-white" />
                    <span className="absolute right-2 -top-2 h-full flex items-end  ">{
                        showPassword ? <IoEye onClick={()=>setPassword(!showPassword)} className="text-gray-300 w-5 h-5 cursor-pointer"/> :
                        <IoMdEyeOff onClick={()=>setPassword(!showPassword)} className="text-gray-300 w-5 h-5 cursor-pointer"/>
                        }</span>

                           
                </div>
                {error.type === "password" && <span className="text-xs text-red-400 pl-2">{error.message}</span>}
                </div>
                    <button type="submit" disabled={loading} className="bg-green-700 w-lg block px-6 py-2 mx-auto mt-4 rounded-md text-white">{loading ? "Loading..." : "Login"} </button>
            </form>
        </div>
    );
};

export default Login;