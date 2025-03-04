import axios from "axios";

const API_URL = "http://localhost:3000";

export const ratingRestaurant = async({userId , orderId , restaurantId , formData}) => {
    try{
        const response = await axios.post(`${API_URL}/user/${userId}/order/${orderId}/rate-restaurant/${restaurantId}` , formData , {
            withCredentials : true
        });
        return response.data.restaurantRating;
    }
    catch(error){   
        throw new Error("Something went wrong : " + error.message);
    }
}

export const ratingDeliveryPartner = async({userId , orderId , partnerId , formData}) => {
    try{
        const response = await axios.post(`${API_URL}/user/${userId}/order/${orderId}/rate-delivery-partner/${partnerId}` , formData , {
            withCredentials : true
        });
        return response.data.partnerRating;
    }
    catch(error){   
        throw new Error("Something went wrong : " + error.message);
    }
}

export const ratingOrderedItem = async({userId , orderId , orderedItemId , formData}) => {
    try{
        const response = await axios.post(`${API_URL}/user/${userId}/order/${orderId}/rate-ordered-item/${orderedItemId}` , formData , {
            withCredentials : true
        });
        return response.data.orderedItemRating;
    }
    catch(error){   
        throw new Error("Something went wrong : " + error.message);
    }
}
