"use client"

import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import { baseURL } from '@/utils/baseURL';
import revalidateTag from '@/utils/revalided';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
const TrandingList = () => {
    const [trendList,setTrendList] = useState([])
    const [change,setChange] = useState('')
   
    
    useEffect(()=>{
        const fetchList = async() =>{
            const response = await fetch(`${baseURL}/events`,{cache:"no-store",next:{tags:['tranding']}});
            const data = await response.json();
            setTrendList(data.result)
            console.log(data);
        }

        fetchList()
    },[change])

    const handelStatusChange = async (id,status) =>{
          try {
            const response = await fetch(`${baseURL}/events/status?id=${id}&update=${status}`,{
              method:"PUT",
              headers:{
                "content-type":"application/json"
              }
            })

            if(!response.ok){
              return toast(response.status.message)
            }else{
              const result =await  response.json();
             
              revalidateTag("tranding")
              revalidateTag("events")
              setChange(status)
              return toast(result.status.message);
            }
            
          } catch (error) {
            toast(error.message);
          }
    }

    const handel_delete = async (id) =>{
                try {
                  
                  Swal.fire({
                    title: "Are you sure?",
                    text: "You won't be able to revert this!",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Yes, delete it!"
                  }).then(async (result) => {
                    if (result.isConfirmed) {

                        const response = await fetch(`${baseURL}/events/${id}`,{
                          method:"DELETE",
                          headers:{
                            "content-type":"application/json"
                          }
                        })
                        const data = await  response.json();

                        if(data.status.type){
                          Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                          });
                          revalidateTag("tranding");
                          setChange(id)
                        }else{
                          toast(data.status.message);
                        }

                      
                    }
                  });

                } catch (error) {
                  toast(error.message);
                }
    }


    return (
        <div className="flex flex-col">
  <div className="p-6 overflow-x-auto ">
  <div className="p-1.5 min-w-full inline-block align-middle">
      <div className="border rounded-lg divide-y divide-gray-200">
      <div className="py-3 px-4">
          ____________________________
        </div>
        <div className="overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="py-3 px-4 pe-0">
                  
                </th>
                <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Name</th>
                <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Type</th>
                <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Venue</th>
                <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Date</th>
                <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Details</th>
                <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              
                {
                    trendList.map( event => (
                <tr key={event._id}>
                <td  className="py-3 ps-4">
                            <Image src={event.image.display_url}   quality={50} priority={true} alt={event.name} width={100} height={100}/>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">{event.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{event.type}</td>
                <td className="px-6 py-4  text-sm text-gray-800 max-w-[150px] ">
                    {event.venue}
                   
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                    {event.date}
                   
                </td>
                <td className="px-6 py-4  text-sm text-gray-800 max-w-[100px]">
                    {event.details.slice(0,65)}...
                   
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                <select  name="status"
            required
            value={event.status}
            onChange={(e) => handelStatusChange(event._id,e.target.value)}
            className="border p-2 "
            
            >
                        <option value="ongoing">Ongoing</option>
                        <option value="upcoming">Upcoming</option>
                        <option value="preceding">Preceding</option>
                </select>
                  <br/>
                  <div className='mt-4 space-x-4'>
                  <button onClick={()=>handel_delete(event._id)} type="button" className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-red-600 hover:text-red-800 disabled:opacity-50 disabled:pointer-events-none">Delete</button>
                  {/* <Link href={`/dashboard/trending/edit/${event._id}`} type="button" className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none">Update</Link> */}
                  </div>
                </td>
              </tr>
                    ))
                }
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
                  {/* <Toaster/> */}
</div>
    );
};

export default TrandingList;