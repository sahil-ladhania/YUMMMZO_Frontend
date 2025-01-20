import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input.jsx";
import {Button} from "@/components/ui/button.jsx";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { restaurantRegistrationStart, setForm1Data, setStep, setUserId } from "@/redux/slices/restaurantRegistrationSlice";

function RestaurantInfoFormComponent() {
    
    // Selectors and Dispatch
    const dispatch = useDispatch();
    const {user} = useSelector((store) => store.auth);
    const userId = user ? user.userId : null;

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
        nearbyLandmark : "",
        state : "",
        postalCode : ""
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
        dispatch(setUserId(userId));
        dispatch(setForm1Data(form1));
        dispatch(setStep(2));
    }

    return (
        <>
            <div className="p-4 bg-neutral-900 rounded-lg">
                <h2 className="text-2xl font-bold mb-4 roboto-regular text-orange-400">Restaurant Information</h2>
                <form onSubmit={handleNext}>
                    {/* Restaurant Name Section */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1 roboto-regular text-white">Restaurant Name</label>
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
                    <h3 className="text-lg font-semibold mb-2 roboto-regular text-white">Owner Details</h3>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1 roboto-regular text-white">Name</label>
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
                        <label className="block text-sm font-medium mb-1 roboto-regular text-white">Email</label>
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
                        <label className="block text-sm font-medium mb-1 roboto-regular text-white">Contact Number</label>
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
                    <div className="mb-4 py-4">
                        <label className="block text-sm font-medium mb-1 roboto-regular text-white">Add Your Restaurants Location</label>
                        <div className="h-80 w-full rounded-lg mb-2 p-4 bg-neutral-800">
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
                        <Button className="roboto-regular" onClick={handleCurrentLocation} variant="outline">Use Current Location</Button>
                    </div>
                    {/* Restaurant Address Details Section */}
                    <h3 className="text-lg font-semibold mb-2 roboto-regular text-white">Restaurant Address Details</h3>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1 roboto-regular text-white">Shop No/Building No</label>
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
                        <label className="block text-sm font-medium mb-1 roboto-regular text-white">Floor</label>
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
                        <label className="block text-sm font-medium mb-1 roboto-regular text-white">Area</label>
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
                        <label className="block text-sm font-medium mb-1 roboto-regular text-white">City</label>
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
                        <label className="block text-sm font-medium mb-1 roboto-regular text-white">Nearby Landmark</label>
                        <Input 
                            onChange={handleChange}
                            type="text" 
                            name="nearbyLandmark"
                            value={form1.nearbyLandmark}
                            placeholder="Enter Nearby Landmark" 
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1 roboto-regular text-white">State</label>
                        <Select onValueChange={(value) => 
                            setForm1((prevForm) => ({
                                ...prevForm,
                                state : value
                            }))
                        }>
                            <SelectTrigger>
                                <SelectValue placeholder="State" />
                            </SelectTrigger>
                            <SelectContent className="bg-slate-200 absolute top-auto bottom-auto z-50">
                                <SelectItem value="andhra-pradesh">Andhra Pradesh</SelectItem>
                                <SelectItem value="arunachal-pradesh">Arunachal Pradesh</SelectItem>
                                <SelectItem value="assam">Assam</SelectItem>
                                <SelectItem value="bihar">Bihar</SelectItem>
                                <SelectItem value="chhattisgarh">Chhattisgarh</SelectItem>
                                <SelectItem value="goa">Goa</SelectItem>
                                <SelectItem value="gujarat">Gujarat</SelectItem>
                                <SelectItem value="haryana">Haryana</SelectItem>
                                <SelectItem value="himachal-pradesh">Himachal Pradesh</SelectItem>
                                <SelectItem value="jharkhand">Jharkhand</SelectItem>
                                <SelectItem value="karnataka">Karnataka</SelectItem>
                                <SelectItem value="kerala">Kerala</SelectItem>
                                <SelectItem value="madhya-pradesh">Madhya Pradesh</SelectItem>
                                <SelectItem value="maharashtra">Maharashtra</SelectItem>
                                <SelectItem value="manipur">Manipur</SelectItem>
                                <SelectItem value="meghalaya">Meghalaya</SelectItem>
                                <SelectItem value="mizoram">Mizoram</SelectItem>
                                <SelectItem value="nagaland">Nagaland</SelectItem>
                                <SelectItem value="odisha">Odisha</SelectItem>
                                <SelectItem value="punjab">Punjab</SelectItem>
                                <SelectItem value="rajasthan">Rajasthan</SelectItem>
                                <SelectItem value="sikkim">Sikkim</SelectItem>
                                <SelectItem value="tamil-nadu">Tamil Nadu</SelectItem>
                                <SelectItem value="telangana">Telangana</SelectItem>
                                <SelectItem value="tripura">Tripura</SelectItem>
                                <SelectItem value="uttar-pradesh">Uttar Pradesh</SelectItem>
                                <SelectItem value="uttarakhand">Uttarakhand</SelectItem>
                                <SelectItem value="west-bengal">West Bengal</SelectItem>
                                <SelectItem value="andaman-nicobar">Andaman and Nicobar Islands</SelectItem>
                                <SelectItem value="chandigarh">Chandigarh</SelectItem>
                                <SelectItem value="dadra-nagar-haveli">Dadra and Nagar Haveli</SelectItem>
                                <SelectItem value="daman-diu">Daman and Diu</SelectItem>
                                <SelectItem value="delhi">Delhi</SelectItem>
                                <SelectItem value="lakshadweep">Lakshadweep</SelectItem>
                                <SelectItem value="puducherry">Puducherry</SelectItem>
                                <SelectItem value="ladakh">Ladakh</SelectItem>
                                <SelectItem value="jammu-kashmir">Jammu and Kashmir</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1 roboto-regular text-white">Postal Code</label>
                        <Input 
                            onChange={handleChange}
                            type="number" 
                            name="postalCode"
                            value={form1.postalCode}
                            placeholder="Enter Postal Code" 
                            required
                        />
                    </div>
                    {/* Combined Button Section */}
                    <Button 
                        className="mt-4 roboto-regular bg-white text-black hover:bg-white" 
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