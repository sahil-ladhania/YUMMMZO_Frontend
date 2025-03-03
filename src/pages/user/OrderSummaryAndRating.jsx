import DeliveryPartnerRatingComponent from "@/components/userDashboard/DeliveryPartnerRatingComponent";
import OrderDetailsCardComponent from "@/components/userDashboard/OrderDetailsCardComponent";
import OrderedItemsListComponent from "@/components/userDashboard/OrderedItemsListComponent";
import RestaurantRatingComponent from "@/components/userDashboard/RestaurantRatingComponent";

function OrderSummaryAndRating() {
  return (
    <>
        <div className="max-w-7xl mx-auto px-4 py-8 text-white my-10 bg-neutral-900 rounded-lg space-y-8">
            {/* Order Details */}
            <OrderDetailsCardComponent/>
            {/* Ordered Items List */}
            <OrderedItemsListComponent/>
            {/* Rating Sections */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <RestaurantRatingComponent />
                <DeliveryPartnerRatingComponent/>
            </div>
        </div>
    </>
  )
}

export default OrderSummaryAndRating;