'use client'
import { usePathname, useSearchParams,useRouter } from "next/navigation";
import { useCallback } from "react";
const useChangeParams = () => {
    const router = useRouter()
const pathname = usePathname()
const searchParams = useSearchParams()

const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set(name, value)
 
      return params.toString()
    },
    [searchParams]
  )

const changeCatagory = (catagory,item)=>{
    router.push(pathname + '?' + createQueryString(catagory, item))
}

    return (
        [changeCatagory]
    );
};

export default useChangeParams;