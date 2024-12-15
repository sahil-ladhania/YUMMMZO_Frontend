import axios from "axios";

const API_URL = "http://localhost:3000";

export const signup = async(userData) => {
    try{
        const response = await axios.post(`${API_URL}/signup` , userData);
        return response.data;
    }
    catch(error){
        throw new Error("Something went wrong : " + error);
    }
}

export const login = async(userData) => {
    try{
        const response = await axios.post(`${API_URL}/login` , userData , {
            withCredentials: true
        });
        return response.data;
    }
    catch(error){
        throw new Error("Something went wrong : " + error);
    }
}

export const changePassword = async(userData) => {
    try{
        const response = await axios.put(`${API_URL}/change-password` , userData , {
            withCredentials : true
        });
        console.log(response);
        return response.data;
    }
    catch(error){
        throw new Error("Something went wrong : " + error);
    }
}