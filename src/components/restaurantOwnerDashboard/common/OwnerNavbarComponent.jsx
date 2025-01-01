import {Button} from "@/components/ui/button.jsx";
import { Link } from "react-router-dom";
import {BellIcon} from "lucide-react";
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@radix-ui/react-dropdown-menu";

function OwnerNavbarComponent() {
    return (
        <>
            <nav className="h-32 flex justify-between items-center py-4 px-8 shadow-md text-white roboto-regular">
                {/* Logo Section */}
                <div>
                    <Link className="text-xl font-bold text-orange-400" to="/owner/">YUMMMZO</Link>
                </div>
                {/* Nav Items Section */}
                <div className="flex space-x-8 items-center bg-neutral-900 rounded-lg px-10 py-4">
                    <Link className="cursor-pointer hover:bg-neutral-800 px-4 py-2 hover:rounded-lg" to="/owner/manage-menu">Menu</Link>
                    <Link className="cursor-pointer hover:bg-neutral-800 px-4 py-2 hover:rounded-lg" to="/owner/manage-orders">Orders</Link>
                    <Link className="cursor-pointer hover:bg-neutral-800 px-4 py-2 hover:rounded-lg" to="/owner/analytics">Analytics</Link>
                    <Link className="cursor-pointer" to="/owner/notifications">
                        <Button className="bg-neutral-800 hover:bg-neutral-800"> 
                            <BellIcon className="w-6 h-6"/>
                        </Button>
                    </Link>
                </div>
                {/* Profile Dropdown Section */}
                <div>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button className="text-md bg-black border border-orange-400 hover:bg-black">Profile</Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="mr-4 px-8 py-4 mt-2 h-auto bg-neutral-900 rounded-lg">
                            <DropdownMenuItem className="p-2 text-sm font-medium my-2 cursor-pointer hover:bg-neutral-700 hover:outline-none hover:rounded-lg">My Profile</DropdownMenuItem>
                            <DropdownMenuItem className="p-2 text-sm font-medium my-2 cursor-pointer hover:bg-neutral-700 hover:outline-none hover:rounded-lg">Settings</DropdownMenuItem>
                            <DropdownMenuItem className="p-2 text-sm font-medium my-2 cursor-pointer hover:bg-neutral-700 hover:outline-none hover:rounded-lg">Logout</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </nav>
        </>
    );
}

export default OwnerNavbarComponent;