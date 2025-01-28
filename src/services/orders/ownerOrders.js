import axios from "axios";

const API_URL = "http://localhost:3000";

export const getAllActiveOrdersForARestaurant = async({restaurantId}) => {
    try{
        const response = await axios.get(`${API_URL}/owner/${restaurantId}/orders`);
        console.log(response);
    }
    catch(error){   
        throw new Error("Something went wrong : " + error.message);
    }
}

export const getAOrderForARestaurant = async({restaurantId , orderId}) => {
    try{
        const response = await axios.get(`${API_URL}/owner/${restaurantId}/orders/${orderId}`);
        console.log(response);
    }
    catch(error){   
        throw new Error("Something went wrong : " + error.message);
    }
}

export const acceptOrRejectOrderForARestaurant = async({ restaurantId , orderId , orderStatusDetails }) => {
    try{
        const response = await axios.put(`${API_URL}/owner/${restaurantId}/orders/accept-or-reject/${orderId}` , orderStatusDetails);
        console.log(response);
    }
    catch(error){
        if(error.response){
            console.log("Error Response : " , error.response.data);
        }
        throw new Error("Something went wrong : " + error.message);
    }
}

export const UpdateOrderStatusToInProgress = async({ restaurantId , orderId , orderStatusDetails }) => {
    try{
        const response = await axios.put(`${API_URL}/owner/${restaurantId}/orders/update-order-status-to-in-progress/${orderId}` , orderStatusDetails);
        console.log(response);
    }
    catch(error){
        if(error.response){
            console.log("Error Response : " , error.response.data);
        }
        throw new Error("Something went wrong : " + error.message);
    }
}

export const UpdateOrderStatusToOutForDelivery = async({ restaurantId , orderId , orderStatusDetails }) => {
    try{
        const response = await axios.put(`${API_URL}/owner/${restaurantId}/orders/update-order-status-to-out-for-delivery/${orderId}` , orderStatusDetails);
        console.log(response);
    }
    catch(error){
        if(error.response){
            console.log("Error Response : " , error.response.data);
        }
        throw new Error("Something went wrong : " + error.message);
    }
}
