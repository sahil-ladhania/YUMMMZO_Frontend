import axios from "axios";

const API_URL = "http://localhost:3000";

export const filterMenuItems = async({ restaurantId , searchText , filter , sortByPriceOption , sortByCategoryOption }) => {
    try{
        const response = await axios.get(`${API_URL}/restaurants/${restaurantId}/menu/filter` , {
            params : {
                search : searchText,
                veg : filter.veg,
                availability : filter.availability,
                sort_by_price : sortByPriceOption,
                sort_by_category : sortByCategoryOption
            }
        });
        return response.data;
    }
    catch(error){   
        throw new Error("Something went wrong : " + error.message);
    }
}
