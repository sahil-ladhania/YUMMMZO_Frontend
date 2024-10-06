import NotificationsHeaderComponent from "@/components/restaurantOwnerDashboard/NotificationsHeaderComponent.jsx";
import FilterNotificationsComponent from "@/components/restaurantOwnerDashboard/FilterNotificationsComponent.jsx";
import NotificationsListComponent from "@/components/restaurantOwnerDashboard/NotificationsListComponent.jsx";
import NotificationDetailsComponent from "@/components/restaurantOwnerDashboard/NotificationDetailsComponent.jsx";

function Notifications() {
    return (
        <>
            <div className="max-w-7xl mx-auto px-4">
                <NotificationsHeaderComponent/>
                <FilterNotificationsComponent/>
                <NotificationsListComponent/>
                <NotificationDetailsComponent/>
            </div>
        </>
    );
}

export default Notifications;