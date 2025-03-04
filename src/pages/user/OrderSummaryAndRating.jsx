import DeliveryPartnerRatingComponent from "@/components/userDashboard/DeliveryPartnerRatingComponent";
import OrderDetailsCardComponent from "@/components/userDashboard/OrderDetailsCardComponent";
import OrderedItemsListComponent from "@/components/userDashboard/OrderedItemsListComponent";
import RestaurantRatingComponent from "@/components/userDashboard/RestaurantRatingComponent";
import { setError, setIsLoading, setOrderDate, setOrderedItems, setPartnerId, setRestaurantAddress, setTotalPrice, setUserAddress } from "@/redux/slices/orderSummarySlice";
import { getOrderSummary, getRestaurantDetails } from "@/services/orderSummaryAndRatings/orderSummary";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function OrderSummaryAndRating() {

  // useDispatch and useSelector
  const dispatch = useDispatch();
  const { userId , orderId } = useSelector((store) => store.orderSummary);

  // State Variables
  const [orderStatus, setOrderStatus] = useState("");
  const [restaurantId, setRestaurantId] = useState(null);

  // useEffect
  useEffect(() => {
    let isMounted = true;
    const getTheOrderSummary = async() => {
      try{
        dispatch(setIsLoading(true));
        const orderSummary = await getOrderSummary({userId , orderId});
        if(isMounted){
          console.log(orderSummary);
          setRestaurantId(orderSummary.restaurantId);
          dispatch(setRestaurantId(orderSummary.restaurantId));
          dispatch(setPartnerId(orderSummary.deliveryPartnerId));
          dispatch(setTotalPrice(orderSummary.totalPrice));
          dispatch(setOrderStatus(orderSummary.orderStatus));
          dispatch(setUserAddress(orderSummary.userAddress));
          dispatch(setRestaurantAddress(orderSummary.restaurantAddress));
          dispatch(setOrderedItems(orderSummary.orderItems));
          dispatch(setOrderDate(orderSummary.createdAt))
          setOrderStatus(orderSummary.orderStatus);
        }
      }
      catch(error){
        dispatch(setError(error));
      }
      finally{
        dispatch(setIsLoading(false));
      }
    }
    getTheOrderSummary();
    return () => {
      isMounted = false;
    }
  },[]);

  useEffect(() => {
    let isMounted = true;
    const getTheRestaurantDetails = async() => {
      if(!restaurantId){
        return;
      }
      try{
        const restaurantDetails = await getRestaurantDetails({restaurantId});
        console.log(restaurantDetails);
      }
      catch(error){
        dispatch(setError(error));
      }
      finally{
        dispatch(setIsLoading(false));
      }
    }
    getTheRestaurantDetails();
    return () => {
      isMounted = false;
    }
  },[restaurantId]);

  return (
    <>
      {
        orderStatus === "DELIVERED" ?
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
        :
        <h1 className="text-white">Cant Accesss Now</h1>
      }
    </>
  )
}

export default OrderSummaryAndRating;