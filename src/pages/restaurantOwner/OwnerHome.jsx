import RestaurantRecentOrdersComponent from "@/components/restaurantOwnerDashboard/RestaurantRecentOrdersComponent.jsx";
import OwnerWelcomeSectionComponent from "@/components/restaurantOwnerDashboard/OwnerWelcomeSectionComponent.jsx";
import RestaurantRecentNotifications from "@/components/restaurantOwnerDashboard/RestaurantRecentNotifications.jsx";
import RestaurantQuickStatsComponent from "@/components/restaurantOwnerDashboard/RestaurantQuickStatsComponent.jsx";
import SalesChartComponent from "@/components/restaurantOwnerDashboard/SalesChartComponent.jsx";
import TopSellingItemsComponent from "@/components/restaurantOwnerDashboard/TopSellingItemsComponent.jsx";
import RestaurantCustomerFeedbackComponent from "@/components/restaurantOwnerDashboard/RestaurantCustomerFeedbackComponent.jsx";
import RestaurantPromotionsComponent from "@/components/restaurantOwnerDashboard/RestaurantPromotionsComponent.jsx";
import LandingPageComponent from "@/components/common/LandingPageComponent";
import { useDispatch, useSelector } from "react-redux";

function OwnerHome() {

    // useDispatch and useSelector
    const dispatch = useDispatch();
    const { isAuthenticated , user } = useSelector((store) => store.auth);
    const role = user ? user.role : null;
    

    return (
        <>
            {
                isAuthenticated && role === "VENDOR" ?
                    <div className="max-w-7xl mx-auto px-4 py-6 roboto-regular">
                        {/* Owner Welcome Section */}
                        <section className="mb-6">
                            <OwnerWelcomeSectionComponent/>
                        </section>
                        {/* Quick Stats Section */}
                        <section className="mb-6">
                            <RestaurantQuickStatsComponent/>
                        </section>
                        {/* Main Section - Recent Orders and Notifications */}
                        <section className="flex flex-col lg:flex-row lg:space-x-4 space-y-6 lg:space-y-0 mb-6">
                            <div className="w-full lg:w-1/2">
                                <RestaurantRecentOrdersComponent/>
                            </div>
                            <div className="w-full lg:w-1/2">
                                <RestaurantRecentNotifications/>
                            </div>
                        </section>
                        {/* Additional Components - Sales Chart, Top Selling Items, Feedback, Promotions */}
                        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                            {/* Sales Chart */}
                            <div>
                                <SalesChartComponent/>
                            </div>
                            {/* Top Selling Items */}
                            <div>
                                <TopSellingItemsComponent/>
                            </div>
                        </section>
                        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            {/* Customer Feedback */}
                            <div>
                                <RestaurantCustomerFeedbackComponent/>
                            </div>
                            {/* Promotions */}
                            <div>
                                <RestaurantPromotionsComponent/>
                            </div>
                        </section>
                    </div>
                :
                    <LandingPageComponent/>
            }
        </>
    );
}

export default OwnerHome;