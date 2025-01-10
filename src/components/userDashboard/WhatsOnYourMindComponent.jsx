import CuisineComponent from "@/components/userDashboard/CuisineComponent.jsx";
import { useSelector } from "react-redux";

function WhatsOnYourMindComponent() {
    // useSelector
    const userData = useSelector(state => state.user);
    const {firstName} = userData;
    return (
        <>
            <div className="pt-10 mb-20">
                {/* Whats on your mind Section  */}
                <h1 className="text-4xl text-white tracking-wider roboto-regular mb-6">Whats on your mind {firstName} ?</h1>
                {/* Cuisines Section */}
                <div className="flex flex-wrap">
                    {Array(18).fill(<CuisineComponent/>)}
                </div>
            </div>
        </>
    );
}

export default WhatsOnYourMindComponent; 