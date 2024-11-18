import {Button} from "@/components/ui/button.jsx";
import { Link } from "react-router-dom";
import {BellIcon} from "lucide-react";
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@radix-ui/react-dropdown-menu";

function OwnerNavbarComponent() {
    return (
        <>
            <nav className="flex justify-between items-center py-4 px-8 bg-white shadow-md">
                {/* Logo Section */}
                <div>
                    <Link className="text-xl font-bold" to="/owner/">YUMMMZO</Link>
                </div>
                {/* Nav Items Section */}
                <div className="flex space-x-8 items-center">
                    <Link className="cursor-pointer" to="/owner/manage-menu">Menu</Link>
                    <Link className="cursor-pointer" to="/owner/manage-orders">Orders</Link>
                    <Link className="cursor-pointer" to="/owner/analytics">Analytics</Link>
                    <Link className="cursor-pointer" to="/owner/notifications">
                        <Button variant="ghost">
                            <BellIcon className="w-6 h-6"/>
                        </Button>
                    </Link>
                </div>
                {/* Profile Dropdown Section */}
                <div>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="text-lg">Profile</Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuItem>My Profile</DropdownMenuItem>
                            <DropdownMenuItem>Settings</DropdownMenuItem>
                            <DropdownMenuItem>Logout</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </nav>
        </>
    );
}

export default OwnerNavbarComponent;