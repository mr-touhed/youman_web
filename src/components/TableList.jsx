"use client"

import { baseURL } from "@/utils/baseURL";
import revalidateTag from "@/utils/revalided";


const TableList = ({data, status}) => {
   
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
    return (
        <div className="flex flex-col">
  <div className="p-6 overflow-x-auto ">
  <div className="p-1.5 min-w-full inline-block align-middle">
      <div className="border rounded-lg divide-y divide-gray-200">
      <div className="py-3 px-4">
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
                <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"> process</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              
                {
                    data.map( order => (
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
                
                <button className="disabled:text-green-700 px-1 py-[3px] rounded-lg disabled:bg-green-200" disabled={status === "complete"} onClick={()=>change_status(order._id,status)}>{status}</button>
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