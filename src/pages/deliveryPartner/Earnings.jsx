import EarningsOverviewComponent from "@/components/deliveryPartnerDashboard/EarningsOverviewComponent.jsx";
import EarningsFilterComponent from "@/components/deliveryPartnerDashboard/EarningsFilterComponent.jsx";
import EarningsHistoryListComponent from "@/components/deliveryPartnerDashboard/EarningsHistoryListComponent.jsx";

function Earnings() {
    return (
        <>
            <div className="max-w-7xl mx-auto px-4 py-6">
                <EarningsOverviewComponent/>
                <EarningsFilterComponent/>
                <EarningsHistoryListComponent/>
            </div>
        </>
    );
}

export default Earnings;