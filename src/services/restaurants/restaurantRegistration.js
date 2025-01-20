import axios from "axios";

const API_URL = "http://localhost:3000";

export const registerRestaurant = async(formData) => {
    try{
        const response = await axios.post(`${API_URL}/restaurants` , formData);
        console.log(response);
        return response.data;
    }
    catch(error){
        if(error.response){
            console.log("Error Response : " , error.response.data);
        }
        throw new Error("Something went wrong : " + error.message);
    }
}