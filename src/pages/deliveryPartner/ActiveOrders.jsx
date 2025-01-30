import DeliveryStatsOverviewComponent from "@/components/deliveryPartnerDashboard/DeliveryStatsOverviewComponent.jsx";
import ActiveOrdersOverviewComponent from "@/components/deliveryPartnerDashboard/DeliveriesOverviewComponent.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setActiveOrderDetails, setError, setIsLoading } from "@/redux/slices/deliveryManagementSlice";
import { getActiveOrderDetailsForPartner } from "@/services/deliveries/manageDeliveries";

function ActiveOrders() {

    // useSelector and useDispatch
    const dispatch = useDispatch();
    const {partnerId} = useSelector((store) => store.deliveryManagement);

    // useEffect
    useEffect(() => {
        let isMounted = true;
        const getActiveOrderDetails = async() => {
            try {
                dispatch(setIsLoading(true));
                const response = await getActiveOrderDetailsForPartner({partnerId});
                dispatch(setActiveOrderDetails(response));
            }
            catch(error){
                dispatch(setError(error.message));
            }
            finally{
                dispatch(setIsLoading(false));
            }
        }
        getActiveOrderDetails();
        return () => {
            isMounted = false;
        }
    }, []);

    return (
        <>
            <div className="max-w-7xl mx-auto px-4 py-6">
                <DeliveryStatsOverviewComponent/>
                <ActiveOrdersOverviewComponent/>
            </div>
        </>
    );
}

export default ActiveOrders;