import {Button} from "@/components/ui/button.jsx";
import { Link } from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci";
import { CiSearch } from 'react-icons/ci';

function UserNavbarComponent() {
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
                {/* Sign in / Profile Section */}
                <div>
                    <Link to="/user/login">
                        <Button className="bg-black text-white border border-orange-400 hover:bg-black roboto-regular">Sign in</Button>
                    </Link>
                </div>
            </nav>
        </>
    );
}

export default UserNavbarComponent;