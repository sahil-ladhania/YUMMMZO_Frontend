import WhatsOnYourMindComponent from "@/components/userDashboard/WhatsOnYourMindComponent.jsx";
import TopBrandsComponent from "@/components/userDashboard/TopBrandsComponent.jsx";

function Home() {
    return (
        <>
            <div className="max-w-7xl mx-auto px-4">
                {/*  What's on your mind Section  */}
                <WhatsOnYourMindComponent/>
                {/*  Top Brands for you Section  */}
                <TopBrandsComponent/>
            </div>

        </>
    );
}

export default Home;