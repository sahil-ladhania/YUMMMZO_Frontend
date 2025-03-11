import axios from "axios";

const API_URL = "http://localhost:3000";

export const directCommentOnReview = async({restaurantId , reviewId , formData}) => {
    try{
        const response = await axios.post(`${API_URL}/restaurants/${restaurantId}/${reviewId}/comment` , formData , {
            withCredentials : true
        });
        return response.data.comment;
    }
    catch(error){   
        throw new Error("Something went wrong : " + error.message);
    }
}

export const getAllDirectCommentsOnAReview = async({restaurantId , reviewId}) => {
    try{
        const response = await axios.get(`${API_URL}/restaurants/${restaurantId}/${reviewId}/comments` , {
            withCredentials : true
        });
        return response.data.directComments;
    }
    catch(error){   
        throw new Error("Something went wrong : " + error.message);
    }
}