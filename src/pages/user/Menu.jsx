import ImageHeaderComponent from "@/components/userDashboard/ImageHeaderComponent.jsx";
import RestaurantInfoComponent from "@/components/userDashboard/RestaurantInfoComponent.jsx";
import MenuCategoriesComponents from "@/components/userDashboard/MenuCategoriesComponents.jsx";
import MenuItemsComponents from "@/components/userDashboard/MenuItemsComponents.jsx";
import MenuTabsComponent from "@/components/userDashboard/MenuTabsComponent.jsx";
import ReviewsComponent from "@/components/userDashboard/ReviewsComponent.jsx";

function Menu() {
    return (
        <div className="container mx-auto py-8">
            {/* Top Image Section */}
            <ImageHeaderComponent/>
            {/* Restaurant Info */}
            <RestaurantInfoComponent/>
            {/* Menu Tabs */}
            <MenuTabsComponent/>
            {/* Menu Section */}
            <div className="grid grid-cols-4 gap-8">
                {/* Left Sidebar - Categories */}
                <MenuCategoriesComponents />
                {/* Right Sidebar - Items */}
                <MenuItemsComponents />
            </div>
            {/* Reviews Section */}
            {/*<div className="w-full max-w-5xl mx-auto"> /!* Aligning width with Menu Tabs *!/*/}
            {/*    <ReviewsComponent/>*/}
            {/*</div>*/}
        </div>
    );
}

export default Menu;