import BrandComponent from "@/components/userDashboard/BrandComponent.jsx";

function TopBrandsComponent() {
    return (
        <>
            <div className="my-8">
                {/* Top Brands Sections */}
                <h1 className="text-xl font-bold">Top brands for you</h1>
                {/* Brands Section */}
                <div className="flex flex-wrap">
                    {Array(9).fill(<BrandComponent/>)}
                </div>
            </div>
        </>
    );
}

export default TopBrandsComponent;