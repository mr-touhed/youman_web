
import EditPartner from '@/components/productForm/EditPartner';
import { get_singel_product } from '@/utils/fetchData';


    
const Editpage = async ({params}) => {

    const  {id} = params
    const {partner} = await get_singel_product(id);
        

    return (
        <div className=''>
            <h2 className='text-2xl text-center'>Edit Partner </h2>
            <EditPartner privilege={partner}/>
        </div>
    );
};

export default Editpage;