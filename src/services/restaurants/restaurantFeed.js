import axios from "axios";

const API_URL = "http://localhost:3000";

export const getAllRestaurants = async() => {
    try{
        const response = await axios.get(`${API_URL}/restaurants`);
        const restaurants = response.data.restaurants;        
        return restaurants;
    }
    catch(error){   
        throw new Error("Something went wrong : " + error.message);
    }
}