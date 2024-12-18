import {Button} from "@/components/ui/button.jsx";
import { Input } from "@/components/ui/input.jsx";
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
// import { useDispatch } from "react-redux";

function MenuInfoFormComponent() {
    // Dispatch and Selctors
    // const dispatch = useDispatch();

    // State Variables

    // Handler Functions
    const handleChange = () => {
        
    }

    const handleRestaurantRegistration = () => {

    }

    return (
        <>
            <div className="p-4">
                <h2 className="text-xl font-bold mb-4">Menu and Other Operational Details</h2>
                <form onSubmit={handleRestaurantRegistration}>
                    {/* Add Restaurant Profile Image Section */}
                    <div className="mb-4">
                        <h3 className="text-lg font-semibold mb-2">Add Restaurant Profile Image</h3>
                        <p className="text-sm mb-2">This will be your restaurants profile picture on Zomato — so use your
                            best food shot!</p>
                        <div className="border-2 border-dashed border-gray-400 h-32 flex items-center justify-center">
                            <span className="text-gray-500">[Upload Profile Image]</span>
                        </div>
                    </div>

                    {/* Toggle Section for Pure Veg Restaurant */}
                    <div className="mb-4 flex items-center">
                        <Switch id="pureVeg" />
                        <Label htmlFor="pureVeg" className="ml-2 text-sm font-medium">
                            Is this a pure vegetarian restaurant?
                        </Label>
                    </div>

                    {/* Price for Two Section */}
                    <div className="mb-4">
                        <Label htmlFor="priceForTwo" className="block text-sm font-medium mb-1">
                            Average Price for Two
                        </Label>
                        <Input
                            id="priceForTwo"
                            type="number"
                            placeholder="Enter price for two"
                            className="w-1/3"
                            required
                        />
                        <p className="text-sm text-gray-500 mt-1">Enter an approximate price that two people would spend at your restaurant.</p>
                    </div>

                    {/* Select Up to 3 Cuisines Section */}
                    <div className="mb-4">
                        <h3 className="text-lg font-semibold mb-2">Select Up to 3 Cuisines</h3>
                        <p className="text-sm mb-2">Your restaurant will appear in searches for these cuisines.</p>
                        <div className="grid grid-cols-2 gap-2">
                            {/* Get the Cuisines from Backend and Show in the form of Button , so that user can select from diferent options */}
                            <Button variant="outline" className="w-full">Cuisine 1</Button>
                            <Button variant="outline" className="w-full">Cuisine 2</Button>
                            <Button variant="outline" className="w-full">Cuisine 3</Button>
                            <Button variant="outline" className="w-full">Cuisine 4</Button>
                            <Button variant="outline" className="w-full">Cuisine 5</Button>
                            <Button variant="outline" className="w-full">Cuisine 6</Button>
                        </div>
                    </div>
                    {/* Restaurant Delivery Timings Section */}
                    <div className="mb-4">
                        <h3 className="text-lg font-semibold mb-2">Restaurant Delivery Timings</h3>
                        <div className="mb-2">
                            <label className="block text-sm font-medium mb-1">Open Time</label>
                            <Input 
                                onChange={handleChange}
                                type="time" 
                                name=""
                                value=""
                                className="w-1/3" 
                                required
                            />
                        </div>
                        <div className="mb-2">
                            <label className="block text-sm font-medium mb-1">Close Time</label>
                            <Input 
                                onChange={handleChange}
                                type="time" 
                                name=""
                                value=""
                                className="w-1/3" 
                                required
                            />
                        </div>
                        <h4 className="text-md font-semibold mt-4 mb-2">Mark Open Days</h4>
                        {/* Get the open days from Backend so that use can select from the below options */}
                        <div className="grid grid-cols-2 gap-4">
                            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
                                <div key={day} className="flex items-center">
                                    <input type="checkbox" id={day} className="mr-2"/>
                                    <label htmlFor={day} className="text-sm">{day}</label>
                                </div>
                            ))}
                        </div>
                        <p className="text-sm text-gray-500">Dont forget to uncheck your off-day.</p>
                    </div>
                    {/* Combined Button Section */}
                    <Button className="mt-4" disabled>
                        Submit
                    </Button>
                </form>
            </div>
        </>
    );
}

export default MenuInfoFormComponent;