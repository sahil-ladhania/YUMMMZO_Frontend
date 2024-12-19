import axios from "axios";

const API_URL = "http://localhost:3000";

export const getOpenDays = async() => {
    try{
        const response = await axios.get(`${API_URL}/opening-days`);
        const openDays = response.data;
        return openDays;
    }
    catch(error){
        throw new Error("Something went wrong : " , error);
    }
}