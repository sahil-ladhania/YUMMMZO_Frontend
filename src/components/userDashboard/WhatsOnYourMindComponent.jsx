import CuisineComponent from "@/components/userDashboard/CuisineComponent.jsx";

function WhatsOnYourMindComponent() {
    return (
        <>
            <div className="pt-10 mb-20">
                {/* Whats on your mind Section  */}
                <h1 className="text-4xl text-white tracking-wider roboto-regular mb-6">Whats on your mind ?</h1>
                {/* Cuisines Section */}
                <div className="flex flex-wrap">
                    {Array(18).fill(<CuisineComponent/>)}
                </div>
            </div>
        </>
    );
}

export default WhatsOnYourMindComponent; 