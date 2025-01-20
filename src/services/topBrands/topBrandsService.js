import axios from "axios";

const API_URL = "http://localhost:3000";

export const getTopBrands = async() => {
    try{
        const response = await axios.get(`${API_URL}/top-brands`);
        const topBrands = response.data.topBrands;
        return topBrands;
    }
    catch(error){
        throw new Error("Something went wrong : " + error.message);
    }
}