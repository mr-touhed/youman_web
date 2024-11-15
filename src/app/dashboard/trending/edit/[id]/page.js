import { get_single_events } from '@/utils/fetchData';
import React from 'react';
import EditEvents from './_component/EditEvents';

const TrandingEditPage = async ({params}) => {
    console.log(params);
    const {id} = params;
 const {result} = await get_single_events(id);
 
    return (
        <div>
            {/* <EditEvents trending={result} /> */}
        </div>
    );
};

export default TrandingEditPage;