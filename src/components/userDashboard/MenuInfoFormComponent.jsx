import {Button} from "@/components/ui/button.jsx";
import { Input } from "@/components/ui/input.jsx";
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { useEffect, useState } from "react";
import { getAllCuisines } from "@/services/cuisines/cuisineService.js";
import { getOpenDays } from "@/services/openDays/openDaysService.js";
import { uploadImageToCloudnary } from "@/services/cloudnary/imagesServices.js";
import { useDispatch } from "react-redux";
import { restaurantRegistrationStart, setForm2Data } from "@/redux/slices/restaurantRegistrationSlice";

function MenuInfoFormComponent() {
    // Dispatch and Selctors
    const dispatch = useDispatch();

    // State Variables
    const [form2 , setForm2] = useState({
        restaurantImageLink : "",
        isPureVeg : false,
        priceForTwo : "",
        cuisines : [],
        openingTime : "",
        closingTime : "",
        openingDays : []
    });
    const [cuisines , setCuisines] = useState([]);
    const [openDays , setOpenDays] = useState([]); 

    // Handler Functions
    const handleChange = async(e) => {
        e.preventDefault();
        const {name , value , type , files} = e.target; 
        if(type === 'file'){
            const imageFile = files[0];
            if(imageFile){
                try{
                    const imageLink = await uploadImageToCloudnary({imageFile});
                    setForm2({
                        ...form2,
                        restaurantImageLink : imageLink
                    })
                }   
                catch(error){
                    throw new Error("Error uploading image : " , error);
                }
            }
        }
        else{
            setForm2({
                ...form2,
                [name] : value
            });
        }
    }

    const validateForm2 = () => {
        return (form2.restaurantImageLink && form2.priceForTwo && form2.cuisines.length > 0 && form2.openingTime && form2.closingTime && form2.openingDays.length > 0);
    }

    const handleRestaurantRegistration = (e) => {
        e.preventDefault();
        console.log(form2);
        dispatch(restaurantRegistrationStart());
        dispatch(setForm2Data(form2));
        console.log(form2);
    }

    // UseEffect for Cuisines
    useEffect(() => {
        let isMounted = true;
        const getCuisines = async() => {
            const response = await getAllCuisines();
            const cuisines = response.cuisines;
            if(isMounted){
                setCuisines(cuisines);
            }
        }
        getCuisines();
        return () => {
            isMounted = false;
        }
    }, [])

    // UseEffect for Open Days
    useEffect(() => {
        let isMounted = true;
        const getOpeningDays = async() => {
            const response = await getOpenDays();
            const openDays = response.openDays;
            if(isMounted){
                setOpenDays(openDays);
            }
        }
        getOpeningDays();
        return () => {
            isMounted = false;
        }
    }, [])

    return (
        <>
            <div className="p-4 bg-neutral-900 rounded-lg">
                <h2 className="text-2xl font-bold mb-4 roboto-regular text-orange-400">Menu and Other Operational Details</h2>
                <form onSubmit={handleRestaurantRegistration}>
                    {/* Add Restaurant Profile Image Section */}
                    <div className="mb-4 py-4">
                        <h3 className="text-lg font-semibold mb-2 roboto-regular text-white">Add Restaurant Profile Image</h3>
                        <p className="text-sm mb-2 roboto-regular text-neutral-300">
                            This will be your restaurants profile picture on YUMMMZO — so use your
                            best food shot!
                        </p>
                        <div className="rounded-lg py-10 px-4 roboto-regular text-white bg-neutral-800">
                            <Label htmlFor="picture">Upload Picture</Label>
                            <Input
                                className="mt-2 text-red-800 font-medium"
                                onChange={handleChange}
                                id="picture" 
                                name="restaurantImageLink" 
                                type="file" 
                                accept="image/*" 
                                required
                            />
                        </div>
                    </div>
                    {/* Toggle Section for Pure Veg Restaurant */}
                    <div className="mb-4 flex items-center roboto-regular text-white py-4">
                        <Switch 
                            id="pureVeg" 
                            name="isPureVeg"
                        />
                        <Label htmlFor="isPureVeg" className="ml-2 text-lg font-medium roboto-regular text-neutral-300">
                            Is this a pure vegetarian restaurant?
                        </Label>
                    </div>
                    {/* Price for Two Section */}
                    <div className="mb-4 py-4 h-auto flex flex-col justify-between">
                        <div>
                            <Label htmlFor="priceForTwo" className="block text-lg font-medium mb-1 roboto-regular text-white py-2">
                                Average Price for Two
                            </Label>
                            <Input
                                onChange={handleChange}
                                name="priceForTwo"
                                type="number"
                                placeholder="Enter price for two"
                                className="w-1/3"
                                min="1"
                                max="10000"
                                required
                            />
                        </div>
                        <p className="text-sm mt-2 roboto-regular text-neutral-300">Enter an approximate price that two people would spend at your restaurant.</p>
                    </div>
                    {/* Select Up to 3 Cuisines Section */}
                    <div className="mb-4 py-4">
                        <h3 className="text-lg font-semibold mb-2 roboto-regular text-white">Select Up to 3 Cuisines</h3>
                        <p className="text-sm mb-2 roboto-regular text-neutral-300">Your restaurant will appear in searches for these cuisines.</p>
                        <div className="grid grid-cols-2 gap-2 roboto-regular bg-neutral-800 p-4 rounded-lg text-white">
                            {
                                cuisines.map((cuisine) => (
                                    <div key={cuisine.cuisineId} className="flex items-center">
                                        <input 
                                            onChange={handleChange}
                                            name="cuisines"
                                            type="checkbox" 
                                            value={cuisine.cuisineId}
                                            id={`cuisine-${cuisine.cuisineId}`} 
                                            className="mr-2"
                                        />
                                        <label htmlFor={`cuisine-${cuisine.cuisineId}`} className="text-sm roboto-regular">{cuisine.name}</label>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    {/* Restaurant Delivery Timings Section */}
                    <div className="mb-4 ">
                        <div className="py-4">
                            <h3 className="text-lg font-semibold mb-2 roboto-regular text-white">Restaurant Delivery Timings</h3>
                            <div className="mb-2 py-4 bg-neutral-800 p-4 rounded-lg">
                                <label className="block text-sm font-medium mb-1 roboto-regular text-neutral-300">Open Time</label>
                                <Input 
                                    onChange={handleChange}
                                    type="time" 
                                    name="openingTime"
                                    value={form2.openingTime}
                                    className="w-auto text-black" 
                                    required
                                />
                            </div>
                            <div className="mb-2 py-4 bg-neutral-800 p-4 rounded-lg">
                                <label className="block text-sm font-medium mb-1 roboto-regular text-neutral-300">Close Time</label>
                                <Input 
                                    onChange={handleChange}
                                    type="time" 
                                    name="closingTime"
                                    value={form2.closingTime}
                                    className="w-auto" 
                                    required
                                />
                            </div>
                        </div>
                        {/* Restaurant Opening Days Section */}
                        <div className="py-4"> 
                            <h4 className="text-lg font-semibold mt-4 mb-2 roboto-regular text-white">Mark Open Days</h4>
                            <div className="grid grid-cols-2 gap-4 py-4 bg-neutral-800 p-4 rounded-lg">
                                {
                                    openDays.map((openDay) => (
                                        <div key={openDay.openingDayId} className="flex items-center">
                                            <input 
                                                onChange={handleChange}
                                                name="openingDays"
                                                type="checkbox" 
                                                value={openDay.openingDayId} 
                                                className="mr-2"
                                            />
                                            <label htmlFor={openDay.openingDayId} className="text-sm roboto-regular text-white">{openDay.day}</label>
                                        </div>
                                    ))
                                }
                            </div>
                            <p className="text-sm text-neutral-300 roboto-regular py-2">Dont forget to uncheck your off-day.</p>
                        </div>
                    </div>
                    {/* Combined Button Section */}
                    <Button 
                        className="mt-4 bg-white text-black hover:bg-white"
                        disabled={!validateForm2()}
                    >
                        Submit
                    </Button>
                </form>
            </div>
        </>
    );
}

export default MenuInfoFormComponent;