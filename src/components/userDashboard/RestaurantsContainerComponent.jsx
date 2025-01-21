import RestaurantCardComponent from "@/components/userDashboard/RestaurantCardComponent.jsx";
import { setRestaurantsFeed } from "@/redux/slices/restaurantsFeedSlice";
import { getAllRestaurants } from "@/services/restaurants/restaurantFeed";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function RestaurantsContainerComponent() {

    // useSelector and useDispatch
    const dispatch = useDispatch();
    const { filteredRestaurantsList } = useSelector((store) => store.filteredRestaurants);

    // useEffect
    useEffect(() => {
        let isMounted = true;
        // logic
        const getRestaurants = async() => {
            try{
                const restaurantsList = await getAllRestaurants();                
                if(isMounted){
                    dispatch(setRestaurantsFeed(restaurantsList));
                }
            }
            catch(error){
                console.log("Error Getting Restaurants : " , error.message);
            }
        }
        getRestaurants();
        return () => {
            isMounted = false;
        }
    }, []);

    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-20">
                {/* Restaurants Section */}
                {
                    filteredRestaurantsList.map((restaurant) => (
                        <RestaurantCardComponent 
                            key={restaurant.restaurantId}
                            restaurantImage = {restaurant.restaurantImage}
                            restaurantName = {restaurant.restaurantName}
                            area = {restaurant.area}
                            city = {restaurant.city}
                            priceForTwo={restaurant.priceForTwo}
                        />
                    ))
                }
            </div>
        </>
    );
}

export default RestaurantsContainerComponent;
