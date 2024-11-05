"use client"

import { baseURL } from "@/utils/baseURL";
import { fetch_order } from "@/utils/fetchData";
import revalidateTag from "@/utils/revalided";
import { useEffect, useState } from "react";


const TableList = () => {
  const [list,setList ] = useState([])
   const [query,setQuery] = useState('process')
    const change_status = async (id,status) =>{
            try {
                const response = await fetch(`${baseURL}/update-payment-status/${id}?status=${status}`,{method:"PATCH"});
                const result = await response.json();
                if(result.status.type){
                    return revalidateTag(status)
                }else{
                    alert("some problems")
                }
            } catch (error) {
                console.log(error);
            }   
    }


    useEffect(()=>{
      const getOrderList =  async (item) =>{
        const data = await fetch_order(item,"query");
        setList(data?.data);
        revalidateTag('query')
      }
      console.log(query, "/////////");
      getOrderList(query)
    },[query])

    return (
        <div className="flex flex-col">
  <div className="p-6 overflow-x-auto ">
  <div className="p-1.5 min-w-full inline-block align-middle">
      <div className="border rounded-lg divide-y divide-gray-200">
      <div className="py-3 px-4">
                  XL downloader
        </div>
        <div className="overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                
                <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Invoice </th>
                <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Full Name </th>
                
                <th scope="col" className="px-6 py-3 text-xs font-medium text-gray-500 uppercase text-center">address & contact</th>
                <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">cardColor</th>
                <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">paymentID</th>
                <th scope="col" className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase">amount</th>
                <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">reffer</th>
                <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"> 
                  
                <select name="status" defaultValue={'process'} id="" onChange={(e)=>setQuery(e.target.value)}>
                              <option value="process">Process</option>
                              <option value="received">Received</option>
                              <option value="delivery">Delivery</option>
                              <option value="complete">Complete</option>
                              <option value="cancle">Cancle</option>
                      </select>

                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              
                {
                    list.map( order => (
                <tr key={order._id}>
                
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">{order.invoice_number}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium ">{order.fullname}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                    <p><span className='whitespace-nowrap font-semibold text-gray-800'>Address:</span> {order.address}</p>
                    <p><span className='whitespace-nowrap font-semibold text-gray-800'>email:</span> {order.email}</p>
                    <p><span className='whitespace-nowrap font-semibold text-gray-800'>mobile:</span> {order.mobile}</p>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                    {order.cardColor}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-end text-sm ">
                {order.paymentID}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-normal">
                {order.amount} TK
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                {order.reffer || "-"}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium ">
                      <select name="status" value={order.status} id="" onChange={(e)=>change_status(order._id,e.target.value)}>
                              <option value="process">Process</option>
                              <option value="received">Received</option>
                              <option value="delivery">Delivery</option>
                              <option value="cancle">Cancle</option>
                      </select>
                
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

export default TableList;