import CuisineComponent from "@/components/userDashboard/CuisineComponent.jsx";

function WhatsOnYourMindComponent() {
    return (
        <>
            <div className="my-8">
                {/* Whats on your mind Section  */}
                <h1 className="text-xl font-bold">What's on your mind ?</h1>
                {/* Cuisines Section */}
                <div className="flex flex-wrap">
                    {Array(9).fill(<CuisineComponent/>)}
                </div>
            </div>
        </>
    );
}

export default WhatsOnYourMindComponent;