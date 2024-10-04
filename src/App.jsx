import './styles/global.css'
import NavbarComponent from "@/components/userDashboard/common/NavbarComponent.jsx";
import FooterComponent from "@/components/userDashboard/common/FooterComponent.jsx";
import Home from "@/pages/user/Home.jsx";
import Restaurants from "@/pages/user/Restaurants.jsx";
import AboutUs from "@/pages/user/AboutUs.jsx";
import ContactUs from "@/pages/user/ContactUs.jsx";
import AddRestaurant from "@/pages/user/AddRestaurant.jsx";
import RegisterRestaurant from "@/pages/user/RegisterRestaurant.jsx";
import EmptyCart from "@/pages/user/EmptyCart.jsx";
import Error from "@/pages/user/Error.jsx";
import SignUp from "@/pages/user/SignUp.jsx";
import Login from "@/pages/user/Login.jsx";
import Menu from "@/pages/user/Menu.jsx";
import Checkout from "@/pages/user/Checkout.jsx";
import Payment from "@/pages/user/Payment.jsx";
import OrderTracking from "@/pages/user/OrderTracking.jsx";

function App() {
    return (
        <>
            {/* -----Navbar Component----- */}
            <NavbarComponent/>

            {/* -----Different Pages----- */}
            {/*<Home/>*/}
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

            {/* -----Footer Component----- */}
            <FooterComponent/>
        </>
    )
}

export default App
