import CurrentDeliveryDetailsComponent from "@/components/deliveryPartnerDashboard/CurrentDeliveryDetailsComponent.jsx";
import MapComponentComponent from "@/components/deliveryPartnerDashboard/MapComponentComponent.jsx";
import UpdateOrderStatusComponent from "@/components/deliveryPartnerDashboard/UpdateOrderStatusComponent.jsx";
import ContactCustomerButtonComponent from "@/components/deliveryPartnerDashboard/ContactCustomerButtonComponent.jsx";

function CurrentDelivery() {
    return (
        <>
            <div className="max-w-7xl mx-auto px-4 py-6">
                <CurrentDeliveryDetailsComponent/>
                <MapComponentComponent/>
                <UpdateOrderStatusComponent/>
                <ContactCustomerButtonComponent/>
            </div>
        </>
    );
}

export default CurrentDelivery;