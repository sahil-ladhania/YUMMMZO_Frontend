import WelcomeMessageComponent from "@/components/deliveryPartnerDashboard/WelcomeMessageComponent.jsx";
import DeliveryStatsOverviewComponent from "@/components/deliveryPartnerDashboard/DeliveryStatsOverviewComponent.jsx";
import RecentNotificationsComponent from "@/components/deliveryPartnerDashboard/RecentNotificationsComponent.jsx";
import { useDispatch, useSelector } from "react-redux";
import LandingPageComponent from "@/components/common/LandingPageComponent";
import { useEffect } from "react";
import { setDeliveriesDoneList, setError, setIsLoading, setPartnerId } from "@/redux/slices/deliveryManagementSlice";
import DeliveriesDoneComponent from "@/components/restaurantOwnerDashboard/DeliveriesDoneComponent";
import { getAllDeliveriesDoneByPartner } from "@/services/deliveries/manageDeliveries";

function PartnerHome() {

    // useSelector and useDispatch
    const dispatch = useDispatch();
    const { isAuthenticated , user } = useSelector((store) => store.auth);
    const {partnerId} = useSelector((store) => store.deliveryManagement);
    const role = user ? user.role : null;
    const userId = user ? user.userId : null;

    // useEffect
    useEffect(() => {
        dispatch(setPartnerId(userId));
    }, [userId]);

    useEffect(() => {
        let isMounted = true;
        const getAllDeliveries = async() => {
            try {
                dispatch(setIsLoading(true));
                const response = await getAllDeliveriesDoneByPartner({partnerId});
                dispatch(setDeliveriesDoneList(response));
            }
            catch(error){
                dispatch(setError(error.message));
            }
            finally{
                dispatch(setIsLoading(false));
            }
        }
        getAllDeliveries();
        return () => {
            isMounted = false;
        }
    }, [])



    return (
        <>
            {
                    isAuthenticated && role === "COURIER" ?
                    <div className="max-w-7xl mx-auto px-4 py-6">
                        <WelcomeMessageComponent/>
                        <DeliveryStatsOverviewComponent/>
                        <DeliveriesDoneComponent/>
                        <RecentNotificationsComponent/>
                    </div>
                    :
                    <LandingPageComponent/>
            }
        </>
    );
}

export default PartnerHome;