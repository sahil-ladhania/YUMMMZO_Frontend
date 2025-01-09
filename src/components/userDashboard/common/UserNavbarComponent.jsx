import {Button} from "@/components/ui/button.jsx";
import { Link, useNavigate } from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci";
import { CiSearch } from 'react-icons/ci';
import { useDispatch, useSelector } from "react-redux";
import { logoutFailure, logoutStart, logoutSuccessfull } from "@/redux/slices/authSlice";
import { logout } from "@/services/auth/authService";

function UserNavbarComponent() {
    // useNavigate
    const navigate = useNavigate();
    // useSelector and useDispatch
    const { isAuthenticated } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    // Handler Functions
    const handleLogout = async() => {
        // logoutStart() function for dispatch kro     
        dispatch(logoutStart());
        try{
            // call kro logout api ko jo backend mai jaa k controller ko call kr dega -> cookie clear hoga fir login screen pe redirect hoga user 
            const response = await logout();
            console.log(response);
            // ab logoutSuccessfull() Function ko dispatch kro
            dispatch(logoutSuccessfull());
            // ab user ko Login Page pe redirect kr do
            setTimeout(() => {
                navigate('/user/login');
            }, 2000);
        }
        catch(error){
            dispatch(logoutFailure(error.message)); // yaha agr koi error aya to logoutFailure() k ander error message pass kr rhe hai 
        }
    }
    return (
        <>
            {/* Navbar */}
            <nav className="h-32 flex items-center justify-between px-5">
                {/* Logo Section */}
                <div className="flex items-center">
                    <Link className="text-2xl font-bold text-orange-400 roboto-regular" to="/user/">YUMMMZO</Link>
                </div>
                {/* Nav Items Section */}
                <div className="px-10 bg-neutral-900 rounded-lg">
                    <ul className="flex space-x-8 items-center px-5 py-2">
                        <Link className="cursor-pointer font-medium hover:text-orange-400 roboto-regular" to="/user/restaurants">Restaurants</Link>
                        <Link className="cursor-pointer font-medium hover:text-orange-400 roboto-regular" to="/user/contact-us">Contact Us</Link>
                        <Link className="cursor-pointer font-medium hover:text-orange-400 roboto-regular" to="/user/add-restaurant">Add Restaurant</Link>
                        <Link className="cursor-pointer font-medium" to="/user/checkout">
                            <div className="relative">
                                <CiShoppingCart className="size-10 fill-orange-400" />
                                <span className="absolute top-0 right-0 bg-orange-400 text-black text-xs rounded-full px-1 roboto-regular">3</span>
                            </div>
                        </Link>
                        <CiSearch className="text-orange-400 text-2xl size-10 cursor-pointer" />
                    </ul>
                </div>
                {/* Sign in / Profile Section / Logout */}
                <div>
                    {
                        isAuthenticated ?
                        <Button onClick={handleLogout} className="bg-black text-white border border-orange-400 hover:bg-black roboto-regular">Logout</Button>
                        :
                        <Link to="/user/login">
                            <Button className="bg-black text-white border border-orange-400 hover:bg-black roboto-regular">Sign in</Button>
                        </Link>
                    }
                </div>
            </nav>
        </>
    );
}

export default UserNavbarComponent;