import axios from "axios";

const API_URL = "http://localhost:3000";

export const signup = async(userData) => {
    try{
        const response = await axios.post(`${API_URL}/signup` , userData);
        console.log("signup api call kr dia , ab return kr ra response");
        return response.data;
    }
    catch(error){
        throw new Error("Something went wrong : " + error);
    }
}

export const login = async(userData) => {
    try{
        const response = await axios.post(`${API_URL}/login` , userData , {
            withCredentials: true // ye option ni hoga to cookies frontend pe store hi ni hoga -> aur backend pe b credentials : ture hona chayia cors config mai -> Kyuki by default cookies are not sent with cross-origin requests.
        });
        console.log("login api call kr dia , ab return kr ra response");
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

export const logout = async() => {
    try{
        const response = await axios.post(`${API_URL}/logout` , {} , {
            withCredentials: true 
        });
        console.log(response);
        return response.data;
    }
    catch(error){
        throw new Error("Something went wrong : " + error);
    }
}