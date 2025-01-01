import AnalyticsHeaderComponent from "@/components/restaurantOwnerDashboard/AnalyticsHeaderComponent.jsx";
import SalesOverviewComponent from "@/components/restaurantOwnerDashboard/SalesOverviewComponent.jsx";
import OrderTrendsComponent from "@/components/restaurantOwnerDashboard/OrderTrendsComponent.jsx";
import CustomerFeedbackComponent from "@/components/restaurantOwnerDashboard/CustomerFeedbackComponent.jsx";
import PerformanceMetricsComponent from "@/components/restaurantOwnerDashboard/PerformanceMetricsComponent.jsx";

function Analytics() {
    return (
        <>
            <div className="max-w-7xl mx-auto px-4 roboto-regular">
                <AnalyticsHeaderComponent/>
                <SalesOverviewComponent/>
                <OrderTrendsComponent/>
                <CustomerFeedbackComponent/>
                <PerformanceMetricsComponent/>
            </div>
        </>
    );
}

export default Analytics;