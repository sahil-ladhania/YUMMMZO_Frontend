import axios from "axios";

const API_URL = "http://localhost:3000";

export const getActiveOrderDetailsForPartner = async({partnerId}) => {
    try{
        const response = await axios.get(`${API_URL}/partner/${partnerId}/get-orderId`);
        return response.data.orderDetails[0];
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

export const updateOrderStatusToOnTheWay = async({ partnerId , restaurantId , orderId , orderStatusDetails , orderStatus }) => {
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
        const response = await axios.put(`${API_URL}/partner/${partnerId}/${restaurantId}/order-on-the-way/orders/${orderId}` , formattedOrderData);
        return response.data.orderStatus;
    }
    catch(error){
        if(error.response){
            console.log("Error Response : " , error.response.data);
        }
        throw new Error("Something went wrong : " + error.message);
    }
}