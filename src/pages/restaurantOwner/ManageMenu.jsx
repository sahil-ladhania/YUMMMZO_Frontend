import MenuHeaderComponent from "@/components/restaurantOwnerDashboard/MenuHeaderComponent.jsx";
import MenuOverviewComponent from "@/components/restaurantOwnerDashboard/MenuOverviewComponent.jsx";
import MenuManagementComponent from "@/components/restaurantOwnerDashboard/MenuManagementComponent.jsx";

function ManageMenu() {
    return (
        <>
            <div className="max-w-7xl mx-auto px-4 roboto-regular">
                <MenuHeaderComponent/>
                <MenuOverviewComponent/>
                <MenuManagementComponent/>
            </div>
        </>
    );
}

export default ManageMenu;