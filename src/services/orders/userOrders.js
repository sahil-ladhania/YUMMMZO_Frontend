import axios from "axios";

const API_URL = "http://localhost:3000";

export const placeOrder = async({ userId , restaurantId , orderDetails }) => {
    try{
        const response = await axios.post(`${API_URL}/user/${userId}/restaurant/${restaurantId}/place-order` , orderDetails , 
            {withCredentials : true}
        );
        return response.data.orderDetails;
    }
    catch(error){
        if(error.response){
            console.log("Error Response : " , error.response.data);
        }
        throw new Error("Something went wrong : " + error.message);
    }
}