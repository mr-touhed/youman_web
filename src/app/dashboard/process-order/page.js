import TableList from '@/components/TableList';
import { fetch_order } from '@/utils/fetchData';
import React from 'react';


const PocessOrderPage = async () => {
    const oder_data = await fetch_order('pending','accept');
    return (
        <div>
            <TableList data = {oder_data?.data} status="accept"/>
        </div>
    );
};

export default PocessOrderPage;