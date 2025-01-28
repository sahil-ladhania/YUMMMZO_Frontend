import { setRestaurantAddress, setUserAddress } from "@/redux/slices/orderSlice";
import { getARestaurant } from "@/services/restaurants/restaurantFeed";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function AddressDetailsComponent() {

    // useSelector and useDispatch
    const dispatch = useDispatch();
    const { selectedAddress } = useSelector((store) => store.order);
    const { restaurantIdForCheckout , restaurantName } = useSelector((store) => store.checkout);
    const { user } = useSelector((store) => store.auth);
    const firstName = user ? user.firstName : null;
    const lastName = user ? user.lastName : null;

    // Getting the Current Time
    const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    // State Variables
    const [restaurantDetails , setRestaurantDetails] = useState({});

    // useEffect
    useEffect(() => {
        let isMounted = true;
        const getRestaurantDetails = async() => {
            // api call
            const getRestaurant = await getARestaurant({restaurantId : restaurantIdForCheckout});
            console.log(getRestaurant);
            if(isMounted){
                setRestaurantDetails(getRestaurant);
                dispatch(setRestaurantAddress(getRestaurant));
                dispatch(setUserAddress(selectedAddress));
            }
        }
        getRestaurantDetails();
        return () => {
            isMounted = false;
        }
    }, [])

    return (
        <>
            <div className="bg-white p-4 rounded-lg shadow mb-4 relative overflow-hidden">
                {/* Background Map Image */}
                <div className="absolute inset-0 bg-cover bg-center opacity-20" 
                     style={{ backgroundImage: 'url(https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2023/11/truco-secreto-google-maps-casi-nadie-conoce-puede-ayudarte-planificar-viajes-como-experto-3237494.jpg?tf=3840x)' }}>
                </div>

                {/* Content */}
                <div className="relative z-10">
                    <h3 className="font-semibold text-black roboto-regular">From Address</h3>
                    <p className="text-black text-sm roboto-regular">{firstName + " " + lastName}</p>
                    <p className="text-black text-sm roboto-regular">{selectedAddress.buildingNumber + " , " + selectedAddress.floorNumber + " , " + selectedAddress.area + " , " + selectedAddress.city + " , " + selectedAddress.state}</p>
                    <p className="text-black text-sm roboto-regular">{currentTime}</p>
                    <h3 className="font-semibold mt-4 text-black roboto-regular">To Address</h3>
                    <p className="text-black text-sm roboto-regular">{restaurantName}</p>
                    <p className="text-black text-sm roboto-regular">{restaurantDetails.buildingNumber + " , " + restaurantDetails.area + " , " + restaurantDetails.city}</p>
                </div>
            </div>
        </>
    );
}

export default AddressDetailsComponent;