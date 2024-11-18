import OwnerNavbarComponent from "@/components/restaurantOwnerDashboard/common/OwnerNavbarComponent.jsx";
import OwnerFooterComponent from "@/components/restaurantOwnerDashboard/common/OwnerFooterComponent.jsx";
import {Outlet} from "react-router-dom";

function Owner() {
    return (
        <>
            <OwnerNavbarComponent/>
            {/* Owner Dashboard Pages*/}
            <main>
                <Outlet/>
            </main>
            <OwnerFooterComponent/>
        </>
    );
}

export default Owner;