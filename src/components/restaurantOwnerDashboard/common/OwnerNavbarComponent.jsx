import {Button} from "@/components/ui/button.jsx";
import {BellIcon} from "lucide-react";
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@radix-ui/react-dropdown-menu";

function OwnerNavbarComponent() {
    return (
        <>
            <nav className="flex justify-between items-center py-4 px-8 bg-white shadow-md">
                {/* Logo Section */}
                <div>
                    <h1 className="text-xl font-bold">YUMMMZO</h1> {/* Replace with your logo */}
                </div>
                {/* Nav Items Section */}
                <div className="flex space-x-6">
                    <Button variant="link" className="text-lg">Menu</Button>
                    <Button variant="link" className="text-lg">Orders</Button>
                    <Button variant="link" className="text-lg">Analytics</Button>
                    <Button variant="ghost">
                        <BellIcon className="w-6 h-6"/>
                    </Button>
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