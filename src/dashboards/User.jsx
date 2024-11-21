import UserNavbarComponent from "@/components/userDashboard/common/UserNavbarComponent.jsx";
import UserFooterComponent from "@/components/userDashboard/common/UserFooterComponent.jsx";
import {Outlet} from "react-router-dom";

function User() {
    return (
        <>
            {/* Navbar */}
            <header className="w-full bg-red-500 text-white">
                <UserNavbarComponent />
            </header>
            {/* Body Content */}
            <div className="mx-auto max-w-7xl px-4 min-h-[calc(100vh-8rem)]">
                <main>
                    <Outlet />
                </main>
            </div>
            {/* Footer */}
            <footer className="w-full bg-red-500 text-white">
                <UserFooterComponent />
            </footer>
        </>
    );
}

export default User;