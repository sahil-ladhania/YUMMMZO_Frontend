import axios from 'axios';

const API_URL = "http://localhost:3000";

export const signUp = async(userData) => {
    try{
        const response = await axios.post(`${API_URL}/signup`, userData);
        console.log(response);
        console.log(response.data);
        return response.data;
    }
    catch(error){
        throw new Error(error.response?.data?.message || "Something went wrong");
    }
}

export const authenticateUser = async (userData) => {
    try{
        const response = await axios.post(`${API_URL}/login`, userData);
        console.log(response);
        console.log(response.data);
        return response.data;
    }
    catch(error){
        throw new Error(error.response?.data?.message || "Something went wrong");
    }
}