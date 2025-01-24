import ImageHeaderComponent from "@/components/userDashboard/ImageHeaderComponent.jsx";
import RestaurantInfoComponent from "@/components/userDashboard/RestaurantInfoComponent.jsx";
import MenuCategoriesComponents from "@/components/userDashboard/MenuCategoriesComponents.jsx";
import MenuItemsComponents from "@/components/userDashboard/MenuItemsComponents.jsx";
import MenuTabsComponent from "@/components/userDashboard/MenuTabsComponent.jsx";
import ReviewsComponent from "@/components/userDashboard/ReviewsComponent.jsx";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getAllMenus } from "@/services/menus/menuFeed";
import { setMenus, setSelectedMenu } from "@/redux/slices/menuFeedSlice";
import { getARestaurant } from "@/services/restaurants/restaurantFeed";

function Menu() {

    // useDispatch
    const dispatch = useDispatch();

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
                    dispatch(setSelectedMenu(menus[0]));
                }
            }
            catch(error){
                // dispatch 
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
                // dispatch
                console.log(error);
            }
        }
        getRestaurant();
      return () => {
        isMounted = false;
      }
    }, []);
    

    return (
        <div className="container mx-auto py-8">
            {/* Top Image Section */}
            <ImageHeaderComponent restaurantDetails={restaurantDetails}/>
            {/* Restaurant Info */}
            <RestaurantInfoComponent restaurantDetails={restaurantDetails}/>
            {/* Menu Tabs */}
            <MenuTabsComponent/>
            {/* Menu Section */}
            <div className="grid grid-cols-4 gap-8">
                {/* Left Sidebar - Categories */}
                <MenuCategoriesComponents />
                {/* Right Sidebar - Items */}
                <MenuItemsComponents />
            </div>
            {/* Reviews Section */}
            {/* <div className="w-full max-w-5xl mx-auto">
               <ReviewsComponent/>
            </div> */}
        </div>
    );
}

export default Menu;