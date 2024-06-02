import { useEffect, useState } from "react";


const useDataFetching = (route) => {
    
    const [loading,setLoading] = useState(false);
    const [catagorys,setCatagorys] = useState([]);
    const [error,setError] = useState('');
    useEffect(()=>{
        const fetchCatagory = async () =>{
            
            
            try {
                setLoading(true)
                const response = await fetch(`/api/${route}`);
                
                const data = await response.json();
                setCatagorys(data)
                setLoading(false)
                
            } catch (error) {
                setError(error.massage)
                setLoading(false)
            }
        }
        fetchCatagory()
    },[route])
    return (
        [catagorys,loading,error]
    );
};

export default useDataFetching;