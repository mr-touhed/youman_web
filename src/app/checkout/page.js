import BackButton from "@/components/BackButton";
import CheckOutForm from "./CheckOutForm";


const CheckOutPage = () => {
    return (
        <div className="max-w-7xl mx-auto p-4">
                    <div className="h-12 border-b flex justify-center">
                                    <BackButton/>
                    </div>
                <CheckOutForm/>

        </div>
    );
};

export default CheckOutPage;