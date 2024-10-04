import {Button} from "@/components/ui/button.jsx";

function NavbarComponent() {
    return (
        <>
            {/* Navbar */}
            <nav className="h-24 flex items-center justify-between px-5">
                {/* Logo Section */}
                <div className="flex items-center">
                    <img
                        className="h-20 w-auto"
                        src="https://1000logos.net/wp-content/uploads/2021/06/Zomato-logo.png"
                        alt="App Logo"
                    />
                </div>
                {/* Nav Items Section */}
                <div>
                    <ul className="flex space-x-8 items-center">
                        <li className="cursor-pointer">Restaurants</li>
                        <li className="cursor-pointer">About Us</li>
                        <li className="cursor-pointer">Contact Us</li>
                        <li className="cursor-pointer">Add Restaurant</li>
                        <li className="cursor-pointer">Cart</li>
                    </ul>
                </div>
                {/* Sign in / Profile Section */}
                <div>
                    <Button>Sign in</Button>
                </div>
            </nav>
        </>
    );
}

export default NavbarComponent;