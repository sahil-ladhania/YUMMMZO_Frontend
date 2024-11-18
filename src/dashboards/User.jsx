import UserNavbarComponent from "@/components/userDashboard/common/UserNavbarComponent.jsx";
import UserFooterComponent from "@/components/userDashboard/common/UserFooterComponent.jsx";
import {Outlet} from "react-router-dom";

function User() {
    return (
        <>
            <UserNavbarComponent/>
            {/* User Dashboard Pages*/}
            <main>
                <Outlet/>
            </main>
            <UserFooterComponent/>
        </>
    );
}

export default User;