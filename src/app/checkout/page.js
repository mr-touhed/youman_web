import CheckOutForm from "./CheckOutForm";
import PaymentSuccess from "./PaymentSuccess";


const CheckOutPage = ({searchParams}) => {
    const  {track,order} = searchParams
    
    if(track && order === "success"){
        return <PaymentSuccess track={track}/>
    }
    return (
        <div className="max-w-7xl mx-auto p-4">
                    
                <CheckOutForm/>
                

        </div>
    );
};

export default CheckOutPage;