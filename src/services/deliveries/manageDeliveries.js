import axios from "axios";

const API_URL = "http://localhost:3000";

export const getOrderDetailsForActiveDelivery = async({partnerId}) => {
    try{
        const response = await axios.get(`${API_URL}/partner/${partnerId}/get-orderId`);
        return response.data.orderDetails[0];
    }
    catch(error){   
        throw new Error("Something went wrong : " + error.message);
    }
}

export const getActiveOrderDetailsForPartner = async({partnerId , orderId}) => {
    try{
        const response = await axios.get(`${API_URL}/partner/${partnerId}/get-active-delivery/orders/${orderId}`);
        return response.data.activeDeliveryDetails[0]
    }
    catch(error){   
        throw new Error("Something went wrong : " + error.message);
    }
}

export const getAllDeliveriesDoneByPartner = async({partnerId}) => {
    try{
        const response = await axios.get(`${API_URL}/partner/${partnerId}/get-all-deliveries`);
        return response.data.allDeliveriesDetails;
    }
    catch(error){   
        throw new Error("Something went wrong : " + error.message);
    }
}

export const updateOrderStatusToOnTheWay = async({ partnerId , restaurantId , orderId , activeOrderDetails , orderStatus }) => {
    try{
        const formattedOrderData = {
            orderItems: activeOrderDetails.orderItems.map(item => ({
                orderItemId: item.orderItemId,
                orderId: item.orderId,
                menuItemId: item.menuItemId,
                quantity: item.quantity,
                itemPrice: item.itemPrice,
                totalPrice: item.totalPrice
            })),
            totalPrice: activeOrderDetails.totalPrice,
            orderStatus: orderStatus,
            userAddress: activeOrderDetails.userAddress,
            restaurantAddress: activeOrderDetails.restaurantAddress
        };
        const response = await axios.put(`${API_URL}/partner/${partnerId}/${restaurantId}/order-on-the-way/orders/${orderId}` , formattedOrderData);
        return response.data.updatedOrderDetails.orderStatus;
    }
    catch(error){
        if(error.response){
            console.log("Error Response : " , error.response.data);
        }
        throw new Error("Something went wrong : " + error.message);
    }
}

export const updateOrderStatusToDelivered = async({ partnerId , restaurantId , orderId , activeOrderDetails , orderStatus }) => {
    try{
        const formattedOrderData = {
            orderItems: activeOrderDetails.orderItems.map(item => ({
                orderItemId: item.orderItemId,
                orderId: item.orderId,
                menuItemId: item.menuItemId,
                quantity: item.quantity,
                itemPrice: item.itemPrice,
                totalPrice: item.totalPrice
            })),
            totalPrice: activeOrderDetails.totalPrice,
            orderStatus: orderStatus,
            userAddress: activeOrderDetails.userAddress,
            restaurantAddress: activeOrderDetails.restaurantAddress
        };
        const response = await axios.put(`${API_URL}/partner/${partnerId}/${restaurantId}/order-delivered/orders/${orderId}` , formattedOrderData);
        return response.data.updatedOrderDetails.orderStatus;
    }
    catch(error){
        if(error.response){
            console.log("Error Response : " , error.response.data);
        }
        throw new Error("Something went wrong : " + error.message);
    }
}