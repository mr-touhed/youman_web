import TableList from '@/components/TableList';
import { fetch_order } from '@/utils/fetchData';
import React from 'react';


const deliveryCard = async () => {
    const oder_data = await fetch_order('delivery','delivery');
    return (
        <div>
            <TableList data = {oder_data?.data} status="complete"/>
        </div>
    );
};

export default deliveryCard;