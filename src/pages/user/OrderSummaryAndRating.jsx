import DeliveryPartnerRatingComponent from "@/components/userDashboard/DeliveryPartnerRatingComponent";
import OrderDetailsCardComponent from "@/components/userDashboard/OrderDetailsCardComponent";
import OrderedItemsListComponent from "@/components/userDashboard/OrderedItemsListComponent";
import RestaurantRatingComponent from "@/components/userDashboard/RestaurantRatingComponent";
import { 
  setError, 
  setIsLoading, 
  setOrderDate, 
  setOrderedItems,
  setRestaurantId, 
  setPartnerId, 
  setRestaurantAddress, 
  setTotalPrice, 
  setUserAddress, 
  setOrderStatus, 
  setRestaurantName,
  setPartnerName
} from "@/redux/slices/orderSummarySlice";
import { getDeliveryPartnerDetails, getOrderSummary, getRestaurantDetails } from "@/services/orderSummaryAndRatings/orderSummary";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function OrderSummaryAndRating() {

  // useDispatch and useSelector
  const dispatch = useDispatch();
  const { userId, orderId, orderStatus , restaurantId , partnerId } = useSelector((store) => store.orderSummary);

  // useEffect
  useEffect(() => {
    let isMounted = true;
    const getTheOrderSummary = async () => {
      try {
        dispatch(setIsLoading(true));
        const orderSummary = await getOrderSummary({ userId, orderId });
        if (isMounted) {
          if (orderSummary?.orderStatus) { 
            dispatch(setOrderStatus(orderSummary.orderStatus));
          }
          dispatch(setRestaurantId(orderSummary.restaurantId))
          dispatch(setPartnerId(orderSummary.deliveryPartnerId));
          dispatch(setTotalPrice(orderSummary.totalPrice));
          dispatch(setUserAddress(orderSummary.userAddress));
          dispatch(setRestaurantAddress(orderSummary.restaurantAddress));
          dispatch(setOrderedItems(orderSummary.orderItems));
          dispatch(setOrderDate(orderSummary.createdAt));
        }
      } 
      catch (error) {
        dispatch(setError(error));
      } 
      finally {
        dispatch(setIsLoading(false));
      }
    };
    getTheOrderSummary();
    return () => {
      isMounted = false;
    };
  }, [userId, orderId, dispatch]);

  useEffect(() => {
    let isMounted = true;
    if(!restaurantId){
      return;
    }
    const getTheRestaurantDetails = async () => {
      try {
        dispatch(setIsLoading(true));
        const restaurantDetails = await getRestaurantDetails({ restaurantId });
        if (isMounted) {
          if(restaurantDetails?.restaurantName){
            dispatch(setRestaurantName(restaurantDetails.restaurantName)); 
          }
        }
      } 
      catch (error) {
        dispatch(setError(error));
      } 
      finally {
        dispatch(setIsLoading(false));
      }
    };
    getTheRestaurantDetails();
    return () => {
      isMounted = false;
    };
  }, [restaurantId , dispatch]);

  useEffect(() => {
    let isMounted = true;
    if(!partnerId){
      return;
    }
    const getThePartnerDetails = async () => {
      try {
        dispatch(setIsLoading(true));
        const partnerDetails = await getDeliveryPartnerDetails({ partnerId });
        if (isMounted) {
          if (partnerDetails?.firstName) {
            dispatch(setPartnerName(`${partnerDetails.firstName} ${partnerDetails.lastName}`));
          }
        }
      } 
      catch (error) {
        dispatch(setError(error));
      } 
      finally {
        dispatch(setIsLoading(false));
      }
    };
    getThePartnerDetails();
    return () => {
      isMounted = false;
    };
  }, [partnerId , dispatch]);

  if (orderStatus === null || orderStatus === undefined || orderStatus === "") {
    return <h1 className="text-white">Loading...</h1>;
  }

  return (
    <>
      {
        orderStatus === "DELIVERED" ? 
          (
            <div className="max-w-7xl mx-auto px-4 py-8 text-white my-10 bg-neutral-900 rounded-lg space-y-8">
              <OrderDetailsCardComponent />
              <OrderedItemsListComponent />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <RestaurantRatingComponent />
                <DeliveryPartnerRatingComponent />
              </div>
            </div>
          ) 
          : 
          (
            <h1 className="text-white">Cant Access Now</h1>
          )
      }
    </>
  );
}

export default OrderSummaryAndRating;