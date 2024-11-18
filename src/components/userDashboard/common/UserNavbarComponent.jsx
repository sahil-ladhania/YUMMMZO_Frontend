import {Button} from "@/components/ui/button.jsx";
import { Link } from "react-router-dom";

function UserNavbarComponent() {
    return (
        <>
            {/* Navbar */}
            <nav className="h-24 flex items-center justify-between px-5">
                {/* Logo Section */}
                <div className="flex items-center">
                    <Link className="text-xl font-bold" to="/user/">YUMMMZO</Link>
                </div>
                {/* Nav Items Section */}
                <div>
                    <ul className="flex space-x-8 items-center">
                        <Link className="cursor-pointer" to="/user/restaurants">Restaurants</Link>
                        <Link className="cursor-pointer" to="/user/about-us">About Us</Link>
                        <Link className="cursor-pointer" to="/user/contact-us">Contact Us</Link>
                        <Link className="cursor-pointer" to="/user/add-restaurant">Add Restaurant</Link>
                        <Link className="cursor-pointer" to="/user/checkout">Cart</Link>
                    </ul>
                </div>
                {/* Sign in / Profile Section */}
                <div>
                    <Link to="/user/login">
                        <Button>Sign in</Button>
                    </Link>
                </div>
            </nav>
        </>
    );
}

export default UserNavbarComponent;