import OrderHeaderComponent from "@/components/restaurantOwnerDashboard/OrderHeaderComponent.jsx";
import FilterSortComponent from "@/components/restaurantOwnerDashboard/FilterSortComponent.jsx";
import OrderListComponent from "@/components/restaurantOwnerDashboard/OrderListComponent.jsx";
import OrderDetailsComponent from "@/components/userDashboard/OrderDetailsComponent.jsx";
import UpdateOrderStatusComponent from "@/components/restaurantOwnerDashboard/UpdateOrderStatusComponent.jsx";

function OrderManagement() {
    return (
        <>
            <div className="max-w-7xl mx-auto px-4">
                <OrderHeaderComponent/>
                <FilterSortComponent/>
                <OrderListComponent/>
                <OrderDetailsComponent/>
                <UpdateOrderStatusComponent/>
            </div>
        </>
    );
}

export default OrderManagement;