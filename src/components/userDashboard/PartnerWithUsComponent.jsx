import {Button} from "@/components/ui/button.jsx";
import {Link} from "react-router-dom";

function PartnerWithUsComponent() {
    return (
        <>
            <div className="max-w-7xl mx-auto px-4 py-8 text-center">
                <h2 className="text-4xl font-bold roboto-regular text-orange-400 mb-10">
                    Partner with YUMMMZO at 0% commission for the 1st month!
                </h2>
                <div className="flex justify-center space-x-4 my-4">
                    <Link to="/user/register-restaurant">
                        <Button className="text-white border border-orange-400 hover:bg-black bg-black roboto-regular">Register Your Restaurant</Button>
                    </Link>
                    <Link to="/user/login">
                        <Button className="text-black bg-orange-400 hover:bg-orange-400 border-none roboto-regular" variant="outline">Login to View Your Existing Restaurants</Button>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default PartnerWithUsComponent;