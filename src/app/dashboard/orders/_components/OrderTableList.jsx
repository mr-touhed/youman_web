"use client"
import { format } from 'date-fns';
import { baseURL } from "@/utils/baseURL";
import { fetch_order } from "@/utils/fetchData";
import revalidateTag from "@/utils/revalided";
import { useEffect, useState } from "react";
import ExcelDownLoader from './ExcelDownLoader';


const OrderTableList = () => {
  const [storeData,setStoreData] = useState([])
  const [list,setList ] = useState([]);
  const [update,setUpdate] = useState('')
   const [query,setQuery] = useState('Received');
    const [search,setSearch] = useState('');
    const [bySearch,setBysearch] = useState('invoice')
   function formatDate(timestamp) {
    // Convert the timestamp (in milliseconds) to a Date object
    const date = new Date(timestamp);
  
    // Format the date to "dd/MM/yyyy"
    return format(date, 'dd/MM/yyyy');
  }


    const change_status = async (id,status) =>{

            try {
                const response = await fetch(`${baseURL}/update-payment-status/${id}?status=${status}`,{method:"PATCH"});
                const result = await response.json();
                console.log(result);
                if(result.status.type){
                        
                        setUpdate(id)
                        revalidateTag('order')
                }else{
                    alert("some problems")
                }
            } catch (error) {
                console.log(error);
            }   
    }


    useEffect(()=>{
      const getOrderList =  async (item) =>{
        const data = await fetch_order(item,"order");
        setList(data?.data);
        setStoreData(data?.data);
        revalidateTag('order')
        console.log(data?.data);
      }
     
      getOrderList(query)
    },[query,update])
   

    const searchinput = (e)=>{
        if(e.target.value === ""){
          setList(storeData);
          setSearch(e.target.value)
        }else{
          setSearch(e.target.value)
        }
       
    }


    const handelSearch = (e) =>{
        e.preventDefault();
       
       

        if(bySearch === "invoice"){
            const text = search.toLowerCase()
            const result = storeData.filter(data => data.invoice_number.toLowerCase() === text);
            if(result.length > 0){
              setList(result)
            }
        }else if (bySearch === "mobile"){
          const text = search.toLowerCase();
          const result = storeData.filter(data => data.mobile.toLowerCase() === text);
          if(result.length > 0){
            setList(result)
          }

        }else if (bySearch === "paymentId"){
          const text = search.toLowerCase();
          const result = storeData.filter(data => data.paymentID.toLowerCase() === text);
          if(result.length > 0){
            setList(result)
          }
        }

    }

    return (
        <div className="flex flex-col">
  <div className="p-6 overflow-x-auto ">
  <div className="p-1.5 min-w-full inline-block align-middle">
      <div className="border rounded-lg divide-y divide-gray-200">
      <div className="py-3 px-4 grid grid-cols-2 items-center">
                        <section>

                        <form onSubmit={handelSearch} className='space-x-2 text-base'>
                              <select  name="Bysearch" value={bySearch} id="Bysearch" onChange={(e)=>setBysearch(e.target.value)}>
                                    <option value="invoice">Invoice</option>
                                    <option value="mobile">Mobile</option>
                                    <option value="paymentId">Payment Id</option>
                              </select>
                              <input type="search" required name="" value={search} onChange={(e)=>{ searchinput(e)}} id="" className='border p-1' />
                              <input type="submit" value="search" className='cursor-pointer' />
                          </form>
                        </section>
                          <ExcelDownLoader data={list} query={query}/>
                  
        </div>
        <div className="overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                
                <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Date </th>
                <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Invoice </th>
                <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Full Name </th>
                
                <th scope="col" className="px-6 py-3 text-xs font-medium text-gray-500 uppercase text-center">address & contact</th>
                <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">cardColor</th>
                <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">paymentID</th>
                <th scope="col" className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase">amount</th>
                <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">reffer</th>
                <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"> 
                  
                <select name="status" defaultValue={'Received'} id="" onChange={(e)=>setQuery(e.target.value)}>
                              <option value="Received">Received</option>
                              <option value="Processing">Processing</option>
                              <option value="Delivered">Delivered</option>
                              <option value="Cancelled">Cancelled</option>
                              
                      </select>

                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              
                {
                    list.map( order => (
                <tr key={order._id}>
                
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">{order?.date && formatDate(order?.date)}</td>
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
                      <select name="status" value={order.card_status} id="" onChange={(e)=>change_status(order._id,e.target.value)}>
                                <option value="Received">Received</option>
                              <option value="Processing">Processing</option>
                              <option value="Delivered">Delivered</option>
                              <option value="Cancelled">Cancelled</option>
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

export default OrderTableList;