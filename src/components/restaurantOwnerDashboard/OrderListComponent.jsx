import OrderItemComponent from "@/components/restaurantOwnerDashboard/OrderItemComponent.jsx";
import { clearSelectedOrderDetails, setActiveOrders, setError, setLoading, setOrderDetailsToUpdate, setSelectedOrderDetails, setUpdatedOrderDetails, updateOrderStatus } from "@/redux/slices/ownerOrderManagementSlice";
import { acceptOrRejectOrderForARestaurant, assignDeliveryPartner, getAllActiveOrdersForARestaurant, getAOrderForARestaurant, UpdateOrderStatusToInProgress, UpdateOrderStatusToOutForDelivery } from "@/services/orders/ownerOrders";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function OrderListComponent() {

    // useSelector and useDispatch
    const dispatch = useDispatch();
    const { restaurantDetails , activeOrders } = useSelector((store) => store.ownerOrderManagement);
    const restaurantId = restaurantDetails[0] ? restaurantDetails[0].restaurantId : null;

    // Handler Functions
    const handleOpenOrderDetail = async(orderId) => {
        try {
            const response = await getAOrderForARestaurant({restaurantId , orderId});
            dispatch(setSelectedOrderDetails(response));
        }
        catch(error){
            dispatch(setError(error.message));
        }
    }

    const handleCloseOrderDetail = (orderId) => {
        dispatch(clearSelectedOrderDetails());
    }

    const handleAcceptOrder = async(orderId , e) => {
        const {value} = e.target;
        const orderStatus = value;
        try { 
            dispatch(setLoading(true));
            const response = await getAOrderForARestaurant({restaurantId , orderId});
            dispatch(setSelectedOrderDetails(response));
            dispatch(setOrderDetailsToUpdate(response));
            dispatch(updateOrderStatus({ 
                orderId, 
                status: orderStatus 
            }));
            const updatedOrderDetails = await acceptOrRejectOrderForARestaurant({restaurantId , orderId , orderStatusDetails: response , orderStatus});
            dispatch(setUpdatedOrderDetails(updatedOrderDetails));
        }
        catch(error){
            dispatch(setError(error.message));
        }
        finally{
            dispatch(setLoading(false));
        }
    }

    const handleRejectOrder = async(orderId , e) => {
        const {value} = e.target;
        const orderStatus = value;
        try {
            const response = await getAOrderForARestaurant({restaurantId , orderId});
            dispatch(setSelectedOrderDetails(response));
            dispatch(setOrderDetailsToUpdate(response));
            dispatch(updateOrderStatus({ 
                orderId, 
                status: orderStatus 
            }));
            const updatedOrderDetails = await acceptOrRejectOrderForARestaurant({restaurantId , orderId , orderStatusDetails: response , orderStatus});
            dispatch(setUpdatedOrderDetails(updatedOrderDetails));
        }
        catch(error){
            dispatch(setError(error.message));
        }
        finally{
            dispatch(setLoading(false));
        }
    }

    const handleUpdateToOrderInProgress = async(orderId , e) => {
        const {value} = e.target;
        const orderStatus = value;
        try {
            const response = await getAOrderForARestaurant({restaurantId , orderId});
            dispatch(setSelectedOrderDetails(response));
            dispatch(setOrderDetailsToUpdate(response));
            dispatch(updateOrderStatus({ 
                orderId, 
                status: orderStatus 
            }));
            const updatedOrderDetails = await UpdateOrderStatusToInProgress({restaurantId , orderId , orderStatusDetails: response , orderStatus});
            dispatch(setUpdatedOrderDetails(updatedOrderDetails));
        }
        catch(error){
            dispatch(setError(error.message));
        }
        finally{
            dispatch(setLoading(false));
        }
    }

    const handleUpdateToOrderOutForDelivery = async(orderId , e) => {
        const {value} = e.target;
        const orderStatus = value;
        try {
            const response = await getAOrderForARestaurant({restaurantId , orderId});
            dispatch(setSelectedOrderDetails(response));
            dispatch(setOrderDetailsToUpdate(response));
            dispatch(updateOrderStatus({ 
                orderId, 
                status: orderStatus 
            }));
            const userId = response.userId;
            const updatedOrderDetails = await UpdateOrderStatusToOutForDelivery({restaurantId , orderId , orderStatusDetails: response , orderStatus});
            dispatch(setUpdatedOrderDetails(updatedOrderDetails));
            const assignedDeliveryPartnerDetails = await assignDeliveryPartner({userId , restaurantId , orderId , orderStatusDetails: response , orderStatus});
        }
        catch(error){
            dispatch(setError(error.message));
        }
        finally{
            dispatch(setLoading(false));
        }
    }

    // useEffect
    useEffect(() => {
        let isMounted = true;
        const getAllOrders = async() => {
            try {
                const response = await getAllActiveOrdersForARestaurant({restaurantId});
                dispatch(setActiveOrders(response));
            }
            catch(error){
                dispatch(setError(error.message));
            }
        }
        getAllOrders();
        return () => {
            isMounted = false;
        }
    }, [restaurantId])

    return (
        <>
            <div className="space-y-4 mb-4 h-screen mt-20">
                {/* Placeholder for OrderItem components */}
                {
                    activeOrders?.map((order) => {
                        return (
                            <OrderItemComponent
                                handleOpenOrderDetail={() => handleOpenOrderDetail(order.orderId)}
                                handleCloseOrderDetail={() => handleCloseOrderDetail(order.orderId)}
                                handleAcceptOrder={(e) => handleAcceptOrder(order.orderId , e)}
                                handleRejectOrder={(e) => handleRejectOrder(order.orderId , e)}
                                handleUpdateToOrderInProgress={(e) => handleUpdateToOrderInProgress(order.orderId , e)}
                                handleUpdateToOrderOutForDelivery={(e) => handleUpdateToOrderOutForDelivery(order.orderId , e)}
                                key={order.orderId}
                                orderId= {order.orderId}
                                orderStatus={order.orderStatus}
                                totalPrice={order.totalPrice}
                            />        
                        )
                    })
                }
            </div>
        </>
    );
}

export default OrderListComponent;