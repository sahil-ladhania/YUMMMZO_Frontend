import {Button} from "@/components/ui/button.jsx";
import { useSelector } from "react-redux";
import {Link, useNavigate} from "react-router-dom";

function PartnerWithUsComponent() {
    // useNavigate
    const navigate = useNavigate();

    // useSelector
    const { isAuthenticated , user} = useSelector((store) => store.auth);
    const role = user ? user.role : null;

    // Handler Function
    const handleRestautantRegistration = () => {
        if((isAuthenticated) && (role === "VENDOR")){
            setTimeout(() => {
                navigate("/user/register-restaurant");
            }, 1000);

        }
        else if((isAuthenticated) && (role !== "VENDOR")){
            alert("Not a Restaurant Owner !!!");
        }
        else{
            setTimeout(() => {
                navigate("/user/login");
            }, 1000);
        }
    }

    return (
        <>
            <div className="max-w-7xl mx-auto px-4 py-8 text-center">
                <h2 className="text-4xl font-bold roboto-regular text-orange-400 mb-10">
                    Partner with YUMMMZO at 0% commission for the 1st month!
                </h2>
                <div className="flex justify-center space-x-4 my-4">
                    <Button onClick={handleRestautantRegistration} className="text-white border border-orange-400 hover:bg-black bg-black roboto-regular">Register Your Restaurant</Button>
                    {
                        isAuthenticated && role === "VENDOR" ?
                        <Link to="/owner/">
                            <Button className="text-black bg-orange-400 hover:bg-orange-400 border-none roboto-regular" variant="outline">Go To Dashboard</Button>
                        </Link>
                        :
                        <Link to="/user/login">
                            <Button className="text-black bg-orange-400 hover:bg-orange-400 border-none roboto-regular" variant="outline">Login to View Your Existing Restaurants</Button>
                        </Link>
                    }
                </div>
            </div>
        </>
    );
}

export default PartnerWithUsComponent;