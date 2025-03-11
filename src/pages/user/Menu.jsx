import ImageHeaderComponent from "@/components/userDashboard/ImageHeaderComponent.jsx";
import RestaurantInfoComponent from "@/components/userDashboard/RestaurantInfoComponent.jsx";
import MenuCategoriesComponents from "@/components/userDashboard/MenuCategoriesComponents.jsx";
import MenuItemsComponents from "@/components/userDashboard/MenuItemsComponents.jsx";
import MenuTabsComponent from "@/components/userDashboard/MenuTabsComponent.jsx";
import ReviewsComponent from "@/components/userDashboard/ReviewsComponent.jsx";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getAllMenus, getAllRestaurantMenuItems } from "@/services/menus/menuFeed";
import { setMenus } from "@/redux/slices/menuFeedSlice";
import { getARestaurant } from "@/services/restaurants/restaurantFeed";
import { setFilteredMenuItems } from "@/redux/slices/menuItemsFilterSlice";
import { getAllReviewsForARestaurant } from "@/services/reviewsCommentsReplies/reviews";
import { setReviews } from "@/redux/slices/reviewsSlice";

function Menu() {

    // useDispatch and useSelector
    const dispatch = useDispatch();
    const {activeTab} = useSelector((store) => store.menuTabs);

    // useParams
    const { restaurantId } = useParams();

    // State Variables
    const [restaurantDetails , setRestaurantDetails] = useState(null);

    // useEffect
    useEffect(() => {
        let isMounted = true;
        const getMenusForRestaurant = async() => {
            try{
                const menus = await getAllMenus({ restaurantId });
                if(isMounted){
                    dispatch(setMenus(menus));
                }
            }
            catch(error){
                console.log(error);
            }
        }
        getMenusForRestaurant();
      return () => {
            isMounted = false;
      }
    }, []);

    useEffect(() => {
        let isMounted = true;
        const getRestaurant = async() => {
            try{
                const details = await getARestaurant({restaurantId});
                if(isMounted){
                    setRestaurantDetails(details);
                }
            }
            catch(error){
                console.log(error);
            }
        }
        getRestaurant();
      return () => {
        isMounted = false;
      }
    }, []);

    useEffect(() => {
        let isMounted = true;
        const getRestaurantMenuItems = async() => {
            try{
                const restaurantMenuItems = await getAllRestaurantMenuItems({restaurantId});
                if(isMounted){
                    dispatch(setFilteredMenuItems(restaurantMenuItems));
                }
            }
            catch(error){
                console.log(error);
            }
        }
        getRestaurantMenuItems();
        return () => {
            isMounted = false;
        }
    }, [])

    useEffect(() => {
      let isMounted = true;
      // logic
      const getAllReviews = async() => {
        try {
            const reviews = await getAllReviewsForARestaurant({restaurantId});
            if(isMounted){
                dispatch(setReviews(reviews));
            }   
        }
        catch (error) {
            console.log(error);
        }
      };
      getAllReviews();
      return () => {
        isMounted = false;
      }
    }, [restaurantId]);
    

    return (
        <div className="container mx-auto py-8">
            {/* Top Image Section */}
            <ImageHeaderComponent restaurantDetails={restaurantDetails}/>
            {/* Restaurant Info */}
            <RestaurantInfoComponent restaurantDetails={restaurantDetails}/>
            {/* Menu Tabs */}
            <MenuTabsComponent/>
            {/* Dynamic Tabs UI */}
            {
                activeTab === "order-online" 
                &&
                <>
                    {/* Menu Section */}
                    <div className="grid grid-cols-4 gap-8">
                        {/* Left Sidebar - Categories */}
                        <MenuCategoriesComponents />
                        {/* Right Sidebar - Items */}
                        <MenuItemsComponents />
                    </div>
                </>
            }
            {
                activeTab === "reviews"
                &&
                <>
                    {/* Reviews Section */}
                    <div className="w-full">
                        <ReviewsComponent restaurantDetails={restaurantDetails}/>
                    </div>   
                </>
            }
        </div>
    );
}

export default Menu;