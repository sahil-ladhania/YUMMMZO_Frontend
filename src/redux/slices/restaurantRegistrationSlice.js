import { createSlice } from "@reduxjs/toolkit"

export const initialState = {
    userId : null,
    step : 1,
    restaurantName : '',  
    ownerDetails : {      
        ownerName : '',
        ownerEmail : '',
        ownerPhoneNumber : ''
    },
    address : {           
        buildingNumber : '',
        floorNumber : '',
        area : '',
        nearbyLandmark : '',
        city : '',
        state : '',
        postalCode : '',
        country : 'India'
    },
    restaurantImage : '',           
    cuisines : [],                  
    openingTime : '',               
    closingTime : '',                    
    openingDays : [],                    
    isPureVeg : false,                   
    priceForTwo : 0,                     
    submitted : false,
    restaurantRegistrationLoading : false,
    restaurantRegistrationSuccess : false,
    restaurantRegistrationError : "", 
}

export const restaurantRegistrationSlice = createSlice({
    name : 'restaurant',
    initialState,
    reducers : {
        restaurantRegistrationStart : (state) => {
            state.restaurantRegistrationLoading = true;
            state.restaurantRegistrationSuccess = false;
            state.restaurantRegistrationError = "";
        },
        restaurantRegistrationSuccess : (state) => {
            state.restaurantRegistrationLoading = false;
            state.restaurantRegistrationSuccess = true;
        },
        restaurantRegistrationFailure : (state , action) => {
            state.restaurantRegistrationLoading = false;
            state.restaurantRegistrationError = action.payload;
        },
        setStep : (state , action) => {
            state.step = action.payload;
        },
        setUserId : (state , action) => {
            state.userId = action.payload;
        },
        setForm1Data : (state , action) => {
            state.restaurantName = action.payload.restaurantName;
            state.ownerDetails = {
                ownerName : action.payload.ownerName,
                ownerEmail : action.payload.ownerEmail,
                ownerPhoneNumber : action.payload.ownerPhoneNumber,
            };
            state.address = {
                buildingNumber : action.payload.shopNumber,
                floorNumber : action.payload.floor,
                area : action.payload.area,
                nearbyLandmark : action.payload.nearbyLandmark,
                city : action.payload.city,
                state : action.payload.state,
                postalCode : action.payload.postalCode,
                country : 'India'
            };
        },
        setForm2Data : (state , action) => {
            state.restaurantImage = action.payload.restaurantImageLink;
            state.cuisines = action.payload.cuisines;
            state.priceForTwo = action.payload.priceForTwo;
            state.isPureVeg = action.payload.isPureVeg;
            state.openingTime = action.payload.openingTime;
            state.closingTime = action.payload.closingTime;
            state.openingDays = action.payload.openingDays;
        }
    }
})

export const { 
    restaurantRegistrationStart,
    restaurantRegistrationSuccess,
    restaurantRegistrationFailure,
    setUserId, 
    setStep, 
    setForm1Data,
    setForm2Data
 } = restaurantRegistrationSlice.actions;
export default restaurantRegistrationSlice.reducer;