import axios from "axios";

const API_URL = "http://localhost:3000";

export const createUserAddress = async({userId , formData}) => {
    try{
        const response = await axios.post(`${API_URL}/user/${userId}/address` , formData);
        return response.data.userAddress;
    }
    catch(error){
        if(error.response){
            console.log("Error Response : " , error.response.data);
        }
        throw new Error("Something went wrong : " + error.message);
    }
}

export const getAllAddressesForUser = async(userId) => {
    try{
        const response = await axios.get(`${API_URL}/user/${userId}/addresses`);
        const userAddresses = response.data.userAddresses;
        return userAddresses;
    }
    catch(error){   
        throw new Error("Something went wrong : " + error.message);
    }
}

export const getAAddressForUser = async({userId , userAddressId}) => {
    try{
        const response = await axios.get(`${API_URL}/user/${userId}/address/${userAddressId}`);
        return response.data.userAddress;
    }
    catch(error){   
        throw new Error("Something went wrong : " + error.message);
    }
}