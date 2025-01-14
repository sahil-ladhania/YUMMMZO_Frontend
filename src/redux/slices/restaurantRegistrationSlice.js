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
        setUserId : (state , action) => {
            state.userId = action.payload;
        },
        setStep : (state , action) => {
            state.step = action.payload;
        },
        setRestaurantName : (state , action) => {
            state.restaurantName = action.payload;
        },
        setOwnerDetails : (state , action) => {
            state.ownerDetails = { ...state.ownerDetails , ...action.payload };
        },
        setAddress : (state , action) => {
            state.address = { ...state.address , ...action.payload };
        },
        setRestaurantImage : (state , action) => { 
            state.restaurantImage = action.payload;
        },
        setCuisines : (state , action) => {
            state.cuisines = action.payload;
        },
        setOpeningTime : (state , action) => {
            state.openingTime = action.payload;
        },
        setClosingTime : (state , action) => {
            state.closingTime = action.payload;
        },
        setOpeningDays : (state , action) => {
            state.openingDays = action.payload;
        },
        setIsPureVeg : (state , action) => {
            state.isPureVeg = action.payload;
        },
        setPriceForTwo : (state , action) => {
            state.priceForTwo = action.payload;
        },
        setSubmitted : (state , action) => {
            state.submitted = action.payload;
        },
        setForm1Data : (state , action) => {
            state.restaurantName = action.payload;
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
            };
        },
        setForm2Data : (state , action) => {
            state.restaurantImage = action.payload;
            state.cuisines = action.payload;
            state.priceForTwo = action.payload;
            state.isPureVeg = action.payload;
            state.openingTime = action.payload;
            state.closingTime = action.payload;
            state.openingDays = action.payload;
        }
    }
})

export const { 
    restaurantRegistrationStart,
    restaurantRegistrationSuccess,
    restaurantRegistrationFailure,
    setUserId, 
    setStep, 
    setRestaurantName, 
    setOwnerDetails, 
    setAddress, 
    setRestaurantImage, 
    setCuisines, 
    setOpeningTime, 
    setClosingTime, 
    setOpeningDays, 
    setIsPureVeg, 
    setPriceForTwo, 
    setSubmitted,
    setForm1Data,
    setForm2Data
 } = restaurantRegistrationSlice.actions;
export default restaurantRegistrationSlice.reducer;