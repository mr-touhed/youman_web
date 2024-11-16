"use client"
import { baseURL } from '@/utils/baseURL';
import revalidateTag from '@/utils/revalided';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
const PartnerTable = ({partners}) => {
    const [partnersData,setPartnersData] = useState(partners)
    
    const handel_delete = async (id) => {
        try {
            const response =await fetch(`${baseURL}/single-partner/${id}`, {
              method:"DELETE",
              headers: {
                "content-type": "application/json"
              },
            })
            const result = await response.json();
                if(result.status.type){
                        const updateData = partnersData.filter(data => data._id !== id);
                        setPartnersData(updateData)
                        revalidateTag("partners")
                }
           return  toast('Successfully deleted partner!')
        } catch (error) {
          console.log(error);
        }
    }

    return (
        <div className="flex flex-col">
  <div className="p-6 overflow-x-auto ">
  <div className="p-1.5 min-w-full inline-block align-middle">
      <div className="border rounded-lg divide-y divide-gray-200">
      {/* <div className="py-3 px-4">
          <div className="relative max-w-xs">
            <label htmlFor="hs-table-search" className="sr-only">Search</label>
            <input type="text" name="hs-table-search" id="hs-table-search" className="py-2 px-3 ps-9 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="Search for items" />
            <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-3">
              <svg className="size-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </svg>
            </div>
          </div>
        </div> */}
        <div className="overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="py-3 px-4 pe-0">
                  
                </th>
                <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Brand</th>
                <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Catagory</th>
                <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">offers</th>
                <th scope="col" className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              
                {
                    partnersData.map( partner => (
                <tr key={partner._id}>
                <td  className="py-3 ps-4">
                            <Image src={partner.image.display_url}   quality={50} priority={true} alt={partner.name} width={100} height={100}/>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">{partner.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{partner.catagory}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                    <p>{partner?.offers?.offer1}</p>
                    <p>{partner?.offers?.offer2}</p>
                    <p>{partner?.offers?.offer3}</p>
                   
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                  <Link href={`/dashboard/edit-partner/${partner.name}`} className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none">Edit</Link>
                  <br/>
                  <button onClick={()=>handel_delete(partner._id)} type="button" className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none">Delete</button>
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
 
</div>
    );
};

export default PartnerTable;