import PaymentHeaderComponent from "@/components/userDashboard/PaymentHeaderComponent.jsx";
import AddressDetailsComponent from "@/components/userDashboard/AddressDetailsComponent.jsx";
import PaymentOptionsComponent from "@/components/userDashboard/PaymentOptionsComponent.jsx";

function Payment() {
    return (
        <>
            <div className="py-8 max-w-7xl mx-auto px-4 bg-neutral-800 my-10 rounded-lg">
                {/* Payment Header */}
                <PaymentHeaderComponent/>
                {/* Address Details */}
                <AddressDetailsComponent/>
                {/* Payment Options */}
                <PaymentOptionsComponent/>
            </div>
        </>
    );
}

export default Payment;