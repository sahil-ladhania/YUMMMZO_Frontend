import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@radix-ui/react-dropdown-menu";
import { useDispatch, useSelector } from "react-redux";
import { logoutFailure, logoutStart, logoutSuccessfull } from "@/redux/slices/authSlice";
import { logout } from "@/services/auth/authService";

function PartnerNavbarComponent() {

    // useNavigate
    const navigate = useNavigate();

    // useSelector and useDispatch
    const {isAuthenticated , user} = useSelector((store) => store.auth);
    const userRole = user ? user.role : null;
    const dispatch = useDispatch();

    // Handler Function
    const handleLogout = async() => {
        dispatch(logoutStart());
        try{
            const response = await logout();
            dispatch(logoutSuccessfull());
            setTimeout(() => {
                navigate('/user/login');
            }, 2000);
        }   
        catch(error){
            dispatch(logoutFailure(error.message)); 
        }
    }

    return (
        <>
            <nav className="h-32 flex justify-between items-center py-4 px-8 shadow-md text-white roboto-regular">
                {/* Logo Section */}
                <div>
                    <Link className="text-xl font-bold text-orange-400" to="/partner/">YUMMMZO</Link>
                </div>
                {/* Nav Items Section */}
                {
                    isAuthenticated && userRole === "COURIER" ?
                        <div className="flex space-x-8 items-center bg-neutral-900 rounded-lg px-10 py-4">
                            <Link className="cursor-pointer hover:bg-neutral-800 px-4 py-2 hover:rounded-lg" to="/partner/active-orders">Active Delivery</Link>
                            <Link className="cursor-pointer hover:bg-neutral-800 px-4 py-2 hover:rounded-lg" to="/partner/current-delivery">Current Delivery</Link>
                            <Link className="cursor-pointer hover:bg-neutral-800 px-4 py-2 hover:rounded-lg" to="/partner/earnings">Earnings</Link>
                        </div>
                        :
                        <div className="flex space-x-8 items-center bg-neutral-900 rounded-lg px-10 py-4">
                            <Link className="cursor-pointer hover:bg-neutral-800 px-4 py-2 hover:rounded-lg">Active Delivery</Link>
                            <Link className="cursor-pointer hover:bg-neutral-800 px-4 py-2 hover:rounded-lg">Current Delivery</Link>
                            <Link className="cursor-pointer hover:bg-neutral-800 px-4 py-2 hover:rounded-lg">Earnings</Link>
                        </div>
                }
                {/* Profile Dropdown Section */}
                {
                        isAuthenticated && userRole === "COURIER" ?
                        <div>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button className="text-md bg-black border border-orange-400 hover:bg-black">Profile</Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="mr-4 px-8 py-4 mt-2 h-auto bg-neutral-900 rounded-lg">
                                    <DropdownMenuItem className="p-2 text-sm font-medium my-2 cursor-pointer hover:bg-neutral-700 hover:outline-none hover:rounded-lg">Settings</DropdownMenuItem>
                                    <DropdownMenuItem onClick={handleLogout} className="p-2 text-sm font-medium my-2 cursor-pointer hover:bg-neutral-700 hover:outline-none hover:rounded-lg">Logout</DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                        :
                        <Link to="/user/login">
                            <Button className="text-md bg-black border border-orange-400 hover:bg-black">Login</Button>
                        </Link>
                    }
            </nav>
        </>
    );
}

export default PartnerNavbarComponent;