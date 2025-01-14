import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@radix-ui/react-dropdown-menu";
import { useSelector } from "react-redux";

function PartnerNavbarComponent() {

    // useSelector
    const {isAuthenticated , user} = useSelector((store) => store.auth);
    const userRole = user ? user.role : null;

    return (
        <>
            <nav className="bg-white shadow">
                <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                    {/* Logo Section */}
                    <div>
                        <Link className="text-xl font-bold" to="/partner/">Delivery Partner Dashboard</Link>
                    </div>
                    {/* Nav Items Section */}
                    <div className="flex space-x-8 items-center">
                        <Link className="cursor-pointer" to="/partner/active-orders">Active Orders</Link>
                        <Link className="cursor-pointer" to="/partner/current-delivery">Current Delivery</Link>
                        <Link className="cursor-pointer" to="/partner/earnings">Earnings</Link>
                    </div>
                    {
                        isAuthenticated && userRole === "COURIER" ?
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline">Profile</Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuItem>Settings</DropdownMenuItem>
                                <DropdownMenuItem>Logout</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                        :
                        <Button className="text-md bg-black border hover:bg-black">Login</Button>
                    }
                </div>
            </nav>
        </>
    );
}

export default PartnerNavbarComponent;