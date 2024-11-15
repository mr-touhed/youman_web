"use client"

import { baseURL } from "@/utils/baseURL";
import { deleteImageFromImgBB, uploadImageToImgBB } from "@/utils/imageupload";
import revalidateTag from "@/utils/revalided";
import Image from "next/image";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { catagorys } from "../../../public/data/data";
import { useRouter } from "next/navigation";

const EditPartner = ({privilege}) => {
    const route = useRouter()
    const [offer,setOffer] = useState(privilege);
    const [division,setdivision] = useState([]);
    const [selectDivision,setSelectDivision] = useState('');
    const [stateList,setStateList] = useState([]);
    const [image,setImage] = useState(null);
    const [loading,setLoading] = useState(false);
    const change_value = (e) =>{
      
        setOffer(prev => (
            {...prev, [e.target.name]: e.target.value}
        ))

    }
    const change_address = (e) => {
        setOffer(prev => ({
            ...prev, location:{... prev.location,[e.target.name]: e.target.value}
        }))
    }

    const change_offer = (e) => {
        setOffer(prev => ({
            ...prev, offers:{... prev.offers,[e.target.name]: e.target.value}
        }))
    }


    const handel_edit_partner = async (e) => {
        e.preventDefault();
        
        try {

            
            setLoading(true);
            let updateData;
            updateData = {...offer};
            if(image !== null && image.file){
                
                const imageUrl = await uploadImageToImgBB(image.file);
                if(imageUrl){
                    updateData.image = imageUrl
                }else{
                    alert("failed image upload")
                }
            }
            
            

           const response = await fetch(`${baseURL}/single-partner/${offer._id}`,{
            method:"PATCH",
            headers:{
                "content-type":"application/json"
            },
            body: JSON.stringify(updateData)
           })
           const result = await response.json();
           if(result.status.type){
                toast('Successfully updated partner!')
                revalidateTag("partners")
                setLoading(false)
               setTimeout(()=>{
                route.push('/dashboard/partner-list')
               },400)
           }
        } catch (error) {
            console.log("upload offer");
        }
    }
    

    useEffect(()=>{
            const get_division = async () =>{
                const fetch_division = await fetch(`${baseURL}/divisions`);
                const division = await fetch_division.json();
                setdivision(division.data)
            }

            get_division()
    },[])


    useEffect(()=>{
        const get_state = async () =>{
            const fetch_division = await fetch(`${baseURL}/divisions/${selectDivision}`);
            const stateInfo = await fetch_division.json();
            setStateList(stateInfo.data)
            
        }

        get_state()
    }, [selectDivision])
       
    return (
        <form onSubmit={handel_edit_partner}>
        <section className='flex flex-col gap-8 max-w-2xl mx-auto'>
            <div>
                    {offer.image?.display_url  &&<Image width={150} height={150}  src={ image?.img ||offer.image?.display_url} alt="product Image"/>}
                    <div>
                        <label htmlFor="image" className=" rounded-md  p-2 border bg-green-600 text-white text-xs shadow-lg">Change Image</label> <br/>
                    <input className="hidden"  accept="image/png,image/jpg,image/jpeg"  type="file" name="image"  id="image" onChange={(e) => setImage({file:e.target.files[0], img: e.target.files[0] ? URL.createObjectURL(e.target.files[0]) : null})}/>
                    </div>
            </div>
        <div className='flex flex-col w-full gap-1'>
            <label htmlFor="name" className='text-sm'>Partner&apos;s name <span className='text-red-400'>*</span></label>
            <input onChange={(e) => change_value(e)} type="text" name="name" required value={offer.name} placeholder="Partners Name"  className='border p-2'/>
        </div>
        
        <div className='flex flex-col w-full gap-1  my-4'>
        <label htmlFor="location" className='text-sm'>Address <span className='text-red-400'>*</span></label>
                
                <input type="text" name="address" required value={offer.location.address} onChange={(e)=> change_address(e)} className='border p-2 ' placeholder='adderss' />
        </div>
        <div className='flex flex-col w-full gap-1 '>
        <label htmlFor="location" className='text-sm'>City <span className='text-red-400'>*</span></label>
                
                <input type="text" name="city" required value={offer.location.city} onChange={(e)=> change_address(e)} className='border p-2 ' placeholder='city' />
        </div>
        <div className='w-full'>
        <label htmlFor="offer" className='text-sm'>Offer <span className='text-red-400'>*</span></label>
                <div className='flex '>
                    <input className='p-2 w-full border' type="text" name="offer1" value={offer.offers.offer1} placeholder='offer 1' onChange={(e)=> change_offer(e)}/>
                    <input className='p-2 w-full border'  type="text" name="offer2" value={offer.offers.offer2} placeholder='offer 2' onChange={(e)=> change_offer(e)}/>
                    <input className='p-2 w-full border'  type="text" name="offer3" value={offer.offers.offer3} placeholder='offer 3' onChange={(e)=> change_offer(e)}/>
                    
                </div>
        </div>
        
        <div className='flex flex-col w-full  gap-1'>
            <label htmlFor="name" className='text-sm'>Catagory <span className='text-red-400'>*</span></label>
                    <select className=' p-2 ' required name="catagory" id="" value={offer.catagory} onChange={(e) => change_value(e)}>
                                
                                    {
                                        catagorys.map((catagory,i)=> <option key={i} value={catagory}>{catagory}</option>)
                                    }
                                   
                                
                    </select>
        </div>
        
        
        <div className='flex flex-col w-full gap-1'>
            <label htmlFor="title" className='text-sm'> Details <span className='text-red-400'>*</span></label>
            <textarea required onChange={(e) =>   change_value(e)} type="text" name="details" value={offer.details} placeholder="Details"  className='border p-2 h-28' />
        </div>

                    <button type="submit" className="bg-green-700 p-2 text-white rounded-lg uppercase" >{loading ? "Loading...":"Update"}</button>
        </section>
       
</form>
    );
};

export default EditPartner;