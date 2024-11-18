import {Button} from "@/components/ui/button.jsx";
import {Link} from "react-router-dom";

function PartnerWithUsComponent() {
    return (
        <>
            <div className="max-w-7xl mx-auto px-4 py-8 text-center">
                <h2 className="text-2xl font-bold mb-4">Partner with Zomato at 0% commission for the 1st month!</h2>
                <div className="flex justify-center space-x-4">
                    <Link to="/user/register-restaurant">
                        <Button>Register Your Restaurant</Button>
                    </Link>
                    <Link to="/user/login">
                        <Button variant="outline">Login to View Your Existing Restaurants</Button>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default PartnerWithUsComponent;