"use client"
import { useEffect, useState } from "react";
import { baseURL } from "./baseURL";
import send_token from "./token";
import { useRouter } from "next/navigation";


 const ValidedUser = ({children}) => {
    const [loading,setLoading] = useState(true);
    const [isAdmin,setIsAdmin] = useState(false);
  
    const router = useRouter()
    useEffect(()=>{
        const check_user = async () =>{
            setLoading(true)
            try {
                const response =await  fetch(`${baseURL}/auth`,{ cache:"no-cache",method:"GET",headers:send_token()});
                const result = await response.json();
                if(!result.success){
                    console.log(result);
                    localStorage.clear();
                   return  setLoading(false)
                }else{
                     setIsAdmin(true)
                     return setLoading(false)
                }
            } catch (error) {
                setLoading(false)
                console.log(error);
            }
        }
        check_user()
    },[])




    if(loading) return "loading...."
    if(!isAdmin) {
        return router.push("/cpanel")
    }else{
        return children;
    }

}

export default ValidedUser