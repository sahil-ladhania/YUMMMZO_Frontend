import OwnerNavbarComponent from "@/components/restaurantOwnerDashboard/common/OwnerNavbarComponent.jsx";
import OwnerFooterComponent from "@/components/restaurantOwnerDashboard/common/OwnerFooterComponent.jsx";
import {Outlet} from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getARestaurantByuserId } from "@/services/restaurants/restaurantFeed";
import { setError, setRestaurantDetailsForOwner } from "@/redux/slices/ownerOrderManagementSlice";

function Owner() {

    // useDispatch and useSelector
    const dispatch = useDispatch();
    const { user } = useSelector((store) => store.auth);
    const userId = user ? user.userId : null;

    // useEffect
    useEffect(() => {
        let isMounted = true;
        const restaurantByUserId = async() => {
            try {
                // logic
                const response = await getARestaurantByuserId({userId});
                dispatch(setRestaurantDetailsForOwner(response));
            }
            catch(error){
                dispatch(setError(error.message));
            }
        }
        restaurantByUserId();
        return () => {
            isMounted = false;
        }
    }, [])



    return (
        <>
            <OwnerNavbarComponent/>
            {/* Owner Dashboard Pages*/}
            <main>
                <Outlet/>
            </main>
            <OwnerFooterComponent/>
        </>
    );
}

export default Owner;