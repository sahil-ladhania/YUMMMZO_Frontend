import axios from "axios";

const API_URL = "http://localhost:3000";

export const getOrderId = async({userId}) => {
    try{
        const response = await axios.get(`${API_URL}/user/${userId}/get-orderId` , {
            withCredentials : true
        });
        return response.data.orderId;
    }
    catch(error){   
        throw new Error("Something went wrong : " + error.message);
    }
}

export const getOrderSummary = async({userId , orderId}) => {
    try{
        const response = await axios.get(`${API_URL}/user/${userId}/orderDetails/${orderId}` , {
            withCredentials : true
        });
        return response.data.orderSummary;
    }
    catch(error){   
        throw new Error("Something went wrong : " + error.message);
    }
}

export const getRestaurantDetails = async({restaurantId}) => {
    try{
        const response = await axios.get(`${API_URL}/user/get-restaurant-details/${restaurantId}` , {
            withCredentials : true
        });
        return response.data.restaurantDetails;
    }
    catch(error){   
        throw new Error("Something went wrong : " + error.message);
    }
}

export const getDeliveryPartnerDetails = async({partnerId}) => {
    try{
        const response = await axios.get(`${API_URL}/user/get-delivery-partner-details/${partnerId}` , {
            withCredentials : true
        });
        return response.data.partnerDetails;
    }
    catch(error){   
        throw new Error("Something went wrong : " + error.message);
    }
}
