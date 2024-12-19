import axios from "axios";

const API_URL = "http://localhost:3000";

export const getAllCuisines = async() => {
    try{
        const response = await axios.get(`${API_URL}/cuisines`);
        const cuisines = response.data;
        return cuisines;
    }
    catch(error){
        throw new Error("Something went wrong : " + error);
    }
}