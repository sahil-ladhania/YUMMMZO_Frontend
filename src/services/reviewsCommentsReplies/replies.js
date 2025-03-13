import axios from "axios";

const API_URL = "http://localhost:3000";

export const replyOnAComment = async({restaurantId , reviewId , commentId , formData}) => {
    try{
        const response = await axios.post(`${API_URL}/restaurants/${restaurantId}/${reviewId}/${commentId}/reply` , formData ,  {
            withCredentials : true
        });
        return response.data.reply;
    }
    catch(error){   
        throw new Error("Something went wrong : " + error.message);
    }
}

export const getAllRepliesOnAComment = async({restaurantId , commentId}) => {
    try{
        const response = await axios.get(`${API_URL}/restaurants/${restaurantId}/${commentId}/replies` , {
            withCredentials : true
        });
        return response.data.commentReplies;
    }
    catch(error){   
        throw new Error("Something went wrong : " + error.message);
    }
}