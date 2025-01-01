import WhatsOnYourMindComponent from "@/components/userDashboard/WhatsOnYourMindComponent.jsx";
import TopBrandsComponent from "@/components/userDashboard/TopBrandsComponent.jsx";
import UserHeroComponent from "@/components/userDashboard/UserHeroComponent";

function UserHome() {
    return (
        <>
            <div className="max-w-8xl mx-auto px-4">
                {/* Hero Section -> Immediately grab the user’s attention. */}
                <UserHeroComponent/>
                {/*  What's on your mind Section  */}
                <WhatsOnYourMindComponent/>
                {/*  Top Brands for you Section  */}
                <TopBrandsComponent/>
            </div>
        </>
    );
}

export default UserHome;