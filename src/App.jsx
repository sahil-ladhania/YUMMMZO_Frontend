import './styles/global.css'
import UserNavbarComponent from "@/components/userDashboard/common/UserNavbarComponent.jsx";
import OwnerNavbarComponent from "@/components/restaurantOwnerDashboard/common/OwnerNavbarComponent.jsx";
import UserFooterComponent from "@/components/userDashboard/common/UserFooterComponent.jsx";
import UserHome from "@/pages/user/UserHome.jsx";
import Restaurants from "@/pages/user/Restaurants.jsx";
import AboutUs from "@/pages/user/AboutUs.jsx";
import ContactUs from "@/pages/user/ContactUs.jsx";
import AddRestaurant from "@/pages/user/AddRestaurant.jsx";
import RegisterRestaurant from "@/pages/user/RegisterRestaurant.jsx";
import EmptyCart from "@/pages/user/EmptyCart.jsx";
import Error from "@/pages/common/Error.jsx";
import SignUp from "@/pages/common/SignUp.jsx";
import Login from "@/pages/common/Login.jsx";
import Menu from "@/pages/user/Menu.jsx";
import Checkout from "@/pages/user/Checkout.jsx";
import Payment from "@/pages/user/Payment.jsx";
import OrderTracking from "@/pages/user/OrderTracking.jsx";
import OwnerFooterComponent from "@/components/restaurantOwnerDashboard/common/OwnerFooterComponent.jsx";
import OwnerHome from "@/pages/restaurantOwner/OwnerHome.jsx";
import ManageMenu from "@/pages/restaurantOwner/ManageMenu.jsx";
import OrderManagement from "@/pages/restaurantOwner/OrderManagement.jsx";
import Analytics from "@/pages/restaurantOwner/Analytics.jsx";
import Notifications from "@/pages/restaurantOwner/Notifications.jsx";
import RestaurantProfile from "@/pages/restaurantOwner/RestaurantProfile.jsx";

function App() {
    return (
        <>
            {/* -----Navbar Component----- */}
            {/*<UserNavbarComponent/>*/}
            <OwnerNavbarComponent/>

            {/* -----User Dashboard Different Pages----- */}
            {/*<UserHome/>*/}
            {/*<Restaurants/>*/}
            {/*<Menu/>*/}
            {/*<AboutUs/>*/}
            {/*<ContactUs/>*/}
            {/*<AddRestaurant/>*/}
            {/*<RegisterRestaurant/>*/}
            {/*<EmptyCart/>*/}
            {/*<Error/>*/}
            {/*<SignUp/>*/}
            {/*<Login/>*/}
            {/*<Checkout/>*/}
            {/*<Payment/>*/}
            {/*<OrderTracking/>*/}

            {/* -----Restaurant Owner Dashboard Different Pages----- */}
            {/*<OwnerHome/>*/}
            {/*<ManageMenu/>*/}
            {/*<OrderManagement/>*/}
            {/*<Analytics/>*/}
            {/*<Notifications/>*/}
            <RestaurantProfile/>

            {/* -----Footer Component----- */}
            {/*<UserFooterComponent/>*/}
            <OwnerFooterComponent/>
        </>
    )
}

export default App
