import axios from "axios";

const API_URL = "http://localhost:3000";

export const getRestaurantId = async({ userId }) => {
    try{
        const response = await axios.get(`${API_URL}/restaurant/${userId}`);
        const restaurantId = response.data.restaurantId;
        return restaurantId;
    }
    catch(error){   
        throw new Error("Something went wrong : " + error.message);
    }
}

export const getAllMenus = async({ restaurantId }) => {
    try{
        const response = await axios.get(`${API_URL}/restaurants/${restaurantId}/menus`);
        const menusList = response.data.restaurantMenus;
        return menusList;
    }
    catch(error){   
        throw new Error("Something went wrong : " + error.message);
    }
}
