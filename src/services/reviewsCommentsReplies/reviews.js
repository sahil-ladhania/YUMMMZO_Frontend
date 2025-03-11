import axios from "axios";

const API_URL = "http://localhost:3000";

export const getAllReviewsForARestaurant = async({restaurantId}) => {
    try{
        const response = await axios.get(`${API_URL}/restaurants/${restaurantId}/reviews` , {
            withCredentials : true
        });
        return response.data.reviews;
    }
    catch(error){   
        throw new Error("Something went wrong : " + error.message);
    }
}