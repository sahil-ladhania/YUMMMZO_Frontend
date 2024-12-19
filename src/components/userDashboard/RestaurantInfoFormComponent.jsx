import { Input } from "@/components/ui/input.jsx";
import {Button} from "@/components/ui/button.jsx";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { restaurantRegistrationStart, setForm1Data, setStep } from "@/redux/slices/restaurantRegistrationSlice";

function RestaurantInfoFormComponent() {
    // Selectors and Dispatch
    const dispatch = useDispatch();

    // State Variables
    const [location , setLocation] = useState([12.9716, 77.5946]);
    const [form1 , setForm1] = useState({
        restaurantName : "",
        ownerName : "",
        ownerEmail : "",
        ownerPhoneNumber : "",
        shopNumber : "",
        floor : "",
        area : "",
        city : "",
        nearbyLandmark : ""
    });

    // Handler Function 
    const handleCurrentLocation = () => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
                setLocation([latitude , longitude]);
            },
            (error) => {
                console.log("Error Getting the Location : " , error.message);
            }
        )
    }
    const CenterMapOnLocation = () => {
        const map = useMap();
        map.setView(location , map.getZoom());
        return null;
    }

    const validateForm1 = () => {
        return (form1.restaurantName && form1.ownerName && form1.ownerEmail && form1.ownerPhoneNumber && form1.shopNumber && form1.floor && form1.area && form1.city && form1.nearbyLandmark);
    }

    const handleChange = (e) => {
        e.preventDefault();
        const {name , value} = e.target;
        setForm1({
            ...form1,
            [name] : value
        })
    }

    const handleNext = (e) => {
        e.preventDefault();
        console.log(form1);
        dispatch(restaurantRegistrationStart());
        dispatch(setForm1Data(form1));
        dispatch(setStep(2));
    }

    return (
        <>
            <div className="p-4">
                <h2 className="text-xl font-bold mb-4">Restaurant Information</h2>
                <form onSubmit={handleNext}>
                    {/* Restaurant Name Section */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1">Restaurant Name</label>
                        <Input
                            onChange={handleChange}
                            type="text" 
                            name="restaurantName"
                            value={form1.restaurantName}
                            placeholder="Enter Restaurant Name" 
                            required
                        />
                    </div>
                    {/* Owner Details Section */}
                    <h3 className="text-lg font-semibold mb-2">Owner Details</h3>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1">Name</label>
                        <Input 
                            onChange={handleChange}
                            type="text" 
                            name="ownerName"
                            value={form1.ownerName}
                            placeholder="Enter Your Name" 
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1">Email</label>
                        <Input 
                            onChange={handleChange}
                            type="email" 
                            name="ownerEmail"
                            value={form1.ownerEmail}
                            placeholder="Enter Your Email" 
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1">Contact Number</label>
                        <Input 
                            onChange={handleChange}
                            type="tel" 
                            name="ownerPhoneNumber"
                            value={form1.ownerPhoneNumber}
                            placeholder="Enter Your Contact Number" 
                            required
                        />
                    </div>
                    {/* Map Section */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1">Add Your Restaurants Location</label>
                        <div className="h-80 w-full bg-gray-200 mb-2">
                            <MapContainer center={location} zoom={13} style={{ height: "100%", width: "100%" }} scrollWheelZoom={false}>
                                <TileLayer
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                />
                                <Marker position={location}>
                                    <Popup>Bengaluru</Popup>
                                </Marker>
                                <CenterMapOnLocation/>
                            </MapContainer>
                        </div>
                        <Button onClick={handleCurrentLocation} variant="outline">Use Current Location</Button>
                    </div>
                    {/* Restaurant Address Details Section */}
                    <h3 className="text-lg font-semibold mb-2">Restaurant Address Details</h3>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1">Shop No/Building No</label>
                        <Input 
                            onChange={handleChange}
                            type="text" 
                            name="shopNumber"
                            value={form1.shopNumber}
                            placeholder="Enter Shop No/Building No" 
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1">Floor</label>
                        <Input 
                            onChange={handleChange}
                            type="text" 
                            name="floor"
                            value={form1.floor}
                            placeholder="Enter Floor" 
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1">Area</label>
                        <Input 
                            onChange={handleChange}
                            type="text" 
                            name="area"
                            value={form1.area}
                            placeholder="Enter Area" 
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1">City</label>
                        <Input 
                            onChange={handleChange}
                            type="text" 
                            name="city"
                            value={form1.city}
                            placeholder="Enter City" 
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1">Nearby Landmark</label>
                        <Input 
                            onChange={handleChange}
                            type="text" 
                            name="nearbyLandmark"
                            value={form1.nearbyLandmark}
                            placeholder="Enter Nearby Landmark" 
                            required
                        />
                    </div>
                    {/* Combined Button Section */}
                    <Button 
                        className="mt-4" 
                        disabled={!validateForm1()}
                    >
                        Next
                    </Button>
                </form>
            </div>
        </>
    );
}

export default RestaurantInfoFormComponent;