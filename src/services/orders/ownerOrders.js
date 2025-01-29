import axios from "axios";

const API_URL = "http://localhost:3000";

export const getAllActiveOrdersForARestaurant = async({restaurantId}) => {
    try{
        const response = await axios.get(`${API_URL}/owner/${restaurantId}/orders`);
        return response.data.orders;
    }
    catch(error){   
        throw new Error("Something went wrong : " + error.message);
    }
}

export const getAOrderForARestaurant = async({restaurantId , orderId}) => {
    try{
        const response = await axios.get(`${API_URL}/owner/${restaurantId}/orders/${orderId}`);
        return response.data.order;
    }
    catch(error){   
        throw new Error("Something went wrong : " + error.message);
    }
}

export const acceptOrRejectOrderForARestaurant = async({ restaurantId , orderId , orderStatusDetails , orderStatus }) => {
    try{
        const formattedOrderData = {
            orderItems: orderStatusDetails.orderItems.map(item => ({
                menuItemId: item.menuItemId,
                quantity: item.quantity,
                itemPrice: item.itemPrice,
                totalPrice: item.totalPrice
            })),
            totalPrice: orderStatusDetails.totalPrice,
            orderStatus: orderStatus,
            userAddress: orderStatusDetails.userAddress,
            restaurantAddress: orderStatusDetails.restaurantAddress
        };
        const response = await axios.put(`${API_URL}/owner/${restaurantId}/orders/accept-or-reject/${orderId}` , formattedOrderData);
        return response.data.orderStatus;
    }
    catch(error){
        if(error.response){
            console.log("Error Response : " , error.response.data);
        }
        throw new Error("Something went wrong : " + error.message);
    }
}

export const UpdateOrderStatusToInProgress = async({ restaurantId , orderId , orderStatusDetails , orderStatus }) => {
    try{
        const formattedOrderData = {
            orderItems: orderStatusDetails.orderItems.map(item => ({
                menuItemId: item.menuItemId,
                quantity: item.quantity,
                itemPrice: item.itemPrice,
                totalPrice: item.totalPrice
            })),
            totalPrice: orderStatusDetails.totalPrice,
            orderStatus: orderStatus,
            userAddress: orderStatusDetails.userAddress,
            restaurantAddress: orderStatusDetails.restaurantAddress
        };
        const response = await axios.put(`${API_URL}/owner/${restaurantId}/orders/update-order-status-to-in-progress/${orderId}` , formattedOrderData);
        return response.data.orderStatus;
    }
    catch(error){
        if(error.response){
            console.log("Error Response : " , error.response.data);
        }
        throw new Error("Something went wrong : " + error.message);
    }
}

export const UpdateOrderStatusToOutForDelivery = async({ restaurantId , orderId , orderStatusDetails , orderStatus }) => {
    try{
        const formattedOrderData = {
            orderItems: orderStatusDetails.orderItems.map(item => ({
                menuItemId: item.menuItemId,
                quantity: item.quantity,
                itemPrice: item.itemPrice,
                totalPrice: item.totalPrice
            })),
            totalPrice: orderStatusDetails.totalPrice,
            orderStatus: orderStatus,
            userAddress: orderStatusDetails.userAddress,
            restaurantAddress: orderStatusDetails.restaurantAddress
        };
        const response = await axios.put(`${API_URL}/owner/${restaurantId}/orders/update-order-status-to-out-for-delivery/${orderId}` , formattedOrderData);
        return response.data.orderStatus;
    }
    catch(error){
        if(error.response){
            console.log("Error Response : " , error.response.data);
        }
        throw new Error("Something went wrong : " + error.message);
    }
}
