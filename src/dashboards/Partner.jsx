import PartnerNavbarComponent from "@/components/deliveryPartnerDashboard/common/PartnerNavbarComponent.jsx";
import PartnerFooterComponent from "@/components/deliveryPartnerDashboard/common/PartnerFooterComponent.jsx";
import {Outlet} from "react-router-dom";

function Partner() {
    return (
        <>
            <PartnerNavbarComponent/>
            {/* Partner Dashboard Pages*/}
            <main>
                <Outlet/>
            </main>
            <PartnerFooterComponent/>
        </>
    );
}

export default Partner;