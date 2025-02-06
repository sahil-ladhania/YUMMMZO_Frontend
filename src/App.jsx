import './styles/global.css'
import {BrowserRouter, Routes , Route} from "react-router-dom";
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
import ChangePassword from "@/pages/common/ChangePassword.jsx";
import Menu from "@/pages/user/Menu.jsx";
import Checkout from "@/pages/user/Checkout.jsx";
import Payment from "@/pages/user/Payment.jsx";
import OrderTracking from "@/pages/user/OrderTracking.jsx";
import OwnerHome from "@/pages/restaurantOwner/OwnerHome.jsx";
import ManageMenu from "@/pages/restaurantOwner/ManageMenu.jsx";
import OrderManagement from "@/pages/restaurantOwner/OrderManagement.jsx";
import Analytics from "@/pages/restaurantOwner/Analytics.jsx";
import Notifications from "@/pages/restaurantOwner/Notifications.jsx";
import RestaurantProfile from "@/pages/restaurantOwner/RestaurantProfile.jsx";
import PartnerHome from "@/pages/deliveryPartner/PartnerHome.jsx";
import ActiveOrders from "@/pages/deliveryPartner/ActiveOrders.jsx";
import CurrentDelivery from "@/pages/deliveryPartner/CurrentDelivery.jsx";
import Earnings from "@/pages/deliveryPartner/Earnings.jsx";
import Profile from "@/pages/deliveryPartner/Profile.jsx";
import User from "@/dashboards/User.jsx";
import Owner from "@/dashboards/Owner.jsx";
import Partner from "@/dashboards/Partner.jsx";
import { Provider } from 'react-redux'
import { store , persistor } from './redux/store.js'
import { PersistGate } from 'redux-persist/integration/react';

function App() {
    return (
        // Wrapping the App with Provider and passing the Redux store as Props to Provider Component.
        <Provider store={store}>
            {/* PersistGate delays the rendering of the app's UI until the persisted state has been retrieved and rehydrated. */}
            <PersistGate loading={<h1 className='text-white text-4xl'>Loading...</h1>} persistor={persistor}>
                <BrowserRouter>
                    <Routes>
                        {/* User Dashboard Routes*/}
                        <Route path="user" element={<User/>}>
                            <Route index path="" element={<UserHome/>}/>
                            <Route path="restaurants" element={<Restaurants/>}/>
                            <Route path="add-restaurant" element={<AddRestaurant/>}/>
                            <Route path="register-restaurant" element={<RegisterRestaurant/>}/>
                            <Route path="about-us" element={<AboutUs/>}/>
                            <Route path="contact-us" element={<ContactUs/>}/>
                            <Route path="signup" element={<SignUp/>}/>
                            <Route path="login" element={<Login/>}/>
                            <Route path="change-password" element={<ChangePassword/>}/>
                            <Route path="restaurant/:restaurantId/menu" element={<Menu/>}/>
                            <Route path="empty-cart" element={<EmptyCart/>}/>
                            <Route path="checkout" element={<Checkout/>}/>
                            <Route path="payment" element={<Payment/>}/>
                            <Route path="order-tracking" element={<OrderTracking/>}/>
                            <Route path="error" element={<Error/>}/>
                        </Route>
                        {/* Vendor Dashboard Routes*/}
                        <Route path="owner" element={<Owner/>}>
                            <Route index path="" element={<OwnerHome/>}/>
                            <Route path="manage-menu" element={<ManageMenu/>}/>
                            <Route path="manage-orders" element={<OrderManagement/>}/>
                            <Route path="analytics" element={<Analytics/>}/>
                            <Route path="notifications" element={<Notifications/>}/>
                            <Route path="profile" element={<RestaurantProfile/>}/>
                        </Route>
                        {/* Courier Dashboard Routes*/}
                        <Route path="partner" element={<Partner/>}>
                            <Route index path="" element={<PartnerHome/>}/>
                            <Route path="active-orders" element={<ActiveOrders/>}/>
                            <Route path="current-delivery" element={<CurrentDelivery/>}/>
                            <Route path="earnings" element={<Earnings/>}/>
                            <Route path="profile" element={<Profile/>}/>
                        </Route>
                        {/* Error Route */}
                        <Route path="*" element={<Error/>}/>
                    </Routes>
                </BrowserRouter>
            </PersistGate>
        </Provider>
    )
}

export default App
