import TableList from '@/components/TableList';
import { fetch_order } from '@/utils/fetchData';
import React from 'react';


const receivedOrderPage = async () => {
    const oder_data = await fetch_order('accept','delivery');
    return (
        <div>
            <TableList data = {oder_data?.data} status="delivery"/>
        </div>
    );
};

export default receivedOrderPage;