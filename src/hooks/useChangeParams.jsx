'use client'
import {  useSearchParams,useRouter } from "next/navigation";
import { useCallback } from "react";
const useChangeParams = () => {
    const router = useRouter()
const searchParams = useSearchParams()

const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams.toString());
    
      params.set(name, value)
 
      return params.toString()
    },
    [searchParams]
  )

const changeCatagory = (catagory,item)=>{
   
    router.push('?' + createQueryString(catagory, item),{ scroll: false })
}

    return (
        [changeCatagory]
    );
};

export default useChangeParams;