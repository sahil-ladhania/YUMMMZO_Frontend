import axios from "axios";

const API_URL = "http://localhost:3000";

export const filterRestaurants = async({ searchText , filter , sortOption}) => {
    try{
        const response = await axios.get(`${API_URL}/restaurants/filter` , {
            params : {
                search: searchText,
                veg: filter.veg,
                priceRange : filter.priceRange,
                sort: sortOption
            }
        });
        console.log(response);
        return response.data;
    }
    catch(error){
        if(error.response){
            console.log("Error Response : " , error.response.data);
        }
        throw new Error("Something went wrong : " + error.message);
    }
}