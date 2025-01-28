import { useSelector } from "react-redux";

function ConfirmedOrderDetailsComponent() {

    // useSelector and useDispatch
    const { totalPrice } = useSelector((store) => store.order);
    const { gst , itemsTotal , restaurantName , restaurantImage , itemsToOrder } = useSelector((store) => store.checkout);


    return (
      <div className="bg-order-details-gradient p-6 rounded-lg shadow-lg mx-auto">
        <h4 className="font-semibold mb-6 text-black text-xl">Order Summary</h4>
        {/* Restaurant Info */}
        <div className="flex items-center mb-6">
          <img
            src={restaurantImage}
            alt="Restaurant"
            className="rounded-md mr-4 h-20 w-20"
          />
          <span className="font-medium text-lg text-black">{restaurantName}</span>
        </div>
        {/* Items List */}
        <div className="mb-6">
          <h5 className="font-medium text-lg text-black">Items</h5>
          <div className="space-y-4">
            <div className="flex flex-col justify-between items-start py-2">
                {
                    itemsToOrder.map((item) => {
                        return(
                                <div key={item.itemDetails.itemId} className="flex justify-between w-full py-2 border-b border-neutral-200">
                                    <span className="text-sm font-semibold text-black w-4/12">{item.itemDetails.itemName}</span>
                                    <span className="text-sm font-semibold text-black w-2/12">Quantity : {item.selectedQuantity}</span>
                                    <span className="ml-2 roboto-regular text-sm font-semibold w-20">
                                       Rs. {item.itemDetails.itemPrice}
                                    </span>
                                </div>
                        )
                    })
                }
            </div>
          </div>
        </div>
        {/* Bill Details */}
        <div className="border-t border-black mt-6 pt-4">
          <div className="flex justify-between py-2">
            <span className="roboto-regular text-sm font-bold">Item Total</span>
            <span className="roboto-regular text-sm font-bold">Rs. {itemsTotal}</span>
          </div>
          <div className="flex justify-between py-2">
            <span className="roboto-regular text-sm font-bold">Delivery Fee</span>
            <span className="roboto-regular text-sm font-bold">Rs.50</span>
          </div>
          <div className="flex justify-between py-2">
            <span className="roboto-regular text-sm font-bold">Platform Fee</span>
            <span className="roboto-regular text-sm font-bold">Rs.5</span>
          </div>
          <div className="flex justify-between py-2">
            <span className="roboto-regular text-sm font-bold">GST (5%)</span>
            <span className="roboto-regular text-sm font-bold">Rs. {gst}</span>
          </div>
          <div className="flex justify-between font-semibold mt-4">
            <span className="roboto-regular text-md font-bold">Total Paid</span>
            <span className="roboto-regular text-md font-bold">Rs. {totalPrice}</span>
          </div>
        </div>
      </div>
    );
  }
  
  export default ConfirmedOrderDetailsComponent;