import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button.jsx";
import { BiSolidDownArrow } from "react-icons/bi";
import { useEffect, useState } from "react";
import { createUserAddress, getAAddressForUser, getAllAddressesForUser } from "@/services/userAddress/userAddressService";
import { useDispatch, useSelector } from "react-redux";
import { setError, setIsLoading, setOrderStep, setSelectedAddress } from "@/redux/slices/orderSlice";
import { Badge } from "../ui/badge";

function DeliveryAddressComponent() {
    
    // useSelector and useDispatch
    const dispatch = useDispatch();
    const { savedAddresses , selectedAddress } = useSelector((store) => store.order);
    const { user } = useSelector((store) => store.auth);
    const userId = user ? user.userId : null;

    // State Variables
    const [formData , setFormData] = useState({
        buildingNumber : "",
        floorNumber : "",
        apartment : "",
        area : "",
        nearbyLandmark : "",
        city : "",
        state : "",
        postalCode : 0,
        country : "",
        addressType : ""
    })

    const [selectedAddressId , setSelectedAddressId] = useState(null);

    // Handler Functions
    const handleSelectAddress = async(value) => {
        setSelectedAddressId(value);  
        try {
            const selectedAddressDetails = await getAAddressForUser({ userId, userAddressId: value });
            dispatch(setSelectedAddress(selectedAddressDetails));
        }
        catch(error){
            dispatch(setError(error.message));
        }
        dispatch(setOrderStep(2));
    }

    const handleInputChange = (e) => {
        const {name , value} = e.target;
        console.log(name , value);
        setFormData({
            ...formData,
            [name] : value
        })
    }
    const handleAddressTypeChange = (value) => {
        setFormData({
            ...formData,
            addressType: value,
        });
    }

    const handleCreateAddress = async(e) => {
        e.preventDefault();
        try {
            dispatch(setIsLoading(true));
            const createdAddress = await createUserAddress({ userId , formData });
        }
        catch(error){
            dispatch(setError(error.message));
        }
        finally{
            dispatch(setIsLoading(false));
        }
        setFormData({
            buildingNumber : "",
            floorNumber : "",
            apartment : "",
            area : "",
            nearbyLandmark : "",
            city : "",
            state : "",
            postalCode : "",
            country : "",
            addressType : ""
        })
    }


    return (
        <>
            <div className="bg-neutral-700 roboto-regular p-4 rounded-lg shadow">
                <div className="flex flex-col mt-2">
                    {/* Show Selected Address */}
                    {
                        selectedAddress === "" ?
                            null
                            :
                            <Badge variant="secondary" className="mb-2 rounded-md h-14">
                                {selectedAddress.apartment + " , " + selectedAddress.area + " , " + selectedAddress.addressType}
                            </Badge>
                    }
                    {/* User Address Dropdown */}
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button className="mb-2 bg-white text-black hover:bg-white">
                                Choose Existing Address
                                <BiSolidDownArrow className="size-3 ml-2" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-80">
                            <DropdownMenuLabel>Saved Addresses</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuRadioGroup 
                                onValueChange={handleSelectAddress}
                            >
                                {
                                    savedAddresses.map((address) => (
                                        <DropdownMenuRadioItem 
                                            key={address.userAddressId} 
                                            value={address.userAddressId}
                                            className="hover:bg-neutral-300 cursor-pointer rounded-md px-4 py-2 flex flex-col items-start"
                                        >
                                            <span className="text-black">{address.apartment}, {address.area}</span>
                                            <span className="text-esm font-semibold text-black">({address.addressType})</span>
                                        </DropdownMenuRadioItem>
                                    ))
                                }
                            </DropdownMenuRadioGroup>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    {/* Add New Address Form */}
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button className="roboto-regular bg-black hover:bg-black">
                                Add New Address
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[600px] w-full">
                            <DialogHeader>
                                <DialogTitle>Add New Address</DialogTitle>
                                <DialogDescription>
                                    Fill out the address details below and save when you're done.
                                </DialogDescription>
                            </DialogHeader>
                            <div>
                                {/* Input Fields */}
                                <form className="grid gap-4 py-4">
                                    <div className="grid grid-cols-4 items-center gap-4">
                                        <Label htmlFor="buildingNumber" className="text-right">
                                            Building Number
                                        </Label>
                                        <Input 
                                            onChange={handleInputChange}
                                            type="number"
                                            name="buildingNumber"
                                            value={formData.buildingNumber}
                                            id="buildingNumber" 
                                            placeholder="Enter building number" 
                                            className="col-span-3" />
                                    </div>
                                    <div className="grid grid-cols-4 items-center gap-4">
                                        <Label htmlFor="floorNumber" className="text-right">
                                            Floor Number
                                        </Label>
                                        <Input 
                                            onChange={handleInputChange}
                                            type="number"
                                            name="floorNumber"
                                            value={formData.floorNumber}
                                            id="floorNumber" 
                                            placeholder="Enter floor number" 
                                            className="col-span-3" />
                                    </div>
                                    <div className="grid grid-cols-4 items-center gap-4">
                                        <Label htmlFor="apartment" className="text-right">
                                            Apartment
                                        </Label>
                                        <Input 
                                            onChange={handleInputChange}
                                            type="text"
                                            name="apartment"
                                            value={formData.apartment}
                                            id="apartment" 
                                            placeholder="Enter apartment name" 
                                            className="col-span-3" />
                                    </div>
                                    <div className="grid grid-cols-4 items-center gap-4">
                                        <Label htmlFor="area" className="text-right">
                                            Area
                                        </Label>
                                        <Input  
                                            onChange={handleInputChange}
                                            type="text"
                                            name="area"
                                            value={formData.area}
                                            id="area"
                                            placeholder="Enter area name" 
                                            className="col-span-3" />
                                    </div>
                                    <div className="grid grid-cols-4 items-center gap-4">
                                        <Label htmlFor="nearbyLandmark" className="text-right">
                                            Nearby Landmark
                                        </Label>
                                        <Input 
                                            onChange={handleInputChange}
                                            type="text"
                                            name="nearbyLandmark"
                                            value={formData.nearbyLandmark}
                                            id="nearbyLandmark" 
                                            placeholder="Enter nearby landmark" 
                                            className="col-span-3" />
                                    </div>
                                    <div className="grid grid-cols-4 items-center gap-4">
                                        <Label htmlFor="city" className="text-right">
                                            City
                                        </Label>
                                        <Input 
                                            onChange={handleInputChange}
                                            type="text"
                                            name="city"
                                            value={formData.city}
                                            id="city" 
                                            placeholder="Enter city name" 
                                            className="col-span-3" />
                                    </div>
                                    <div className="grid grid-cols-4 items-center gap-4">
                                        <Label htmlFor="state" className="text-right">
                                            State
                                        </Label>
                                        <Input 
                                            onChange={handleInputChange}
                                            type="text"
                                            name="state"
                                            value={formData.state}
                                            id="state" 
                                            placeholder="Enter state name" 
                                            className="col-span-3" />
                                    </div>
                                    <div className="grid grid-cols-4 items-center gap-4">
                                        <Label htmlFor="postalCode" className="text-right">
                                            Postal Code
                                        </Label>
                                        <Input 
                                            onChange={handleInputChange}
                                            type="number"
                                            name="postalCode"
                                            value={formData.postalCode === 0 ? "" : formData.postalCode}
                                            id="postalCode" 
                                            placeholder="Enter postal code" 
                                            className="col-span-3" />
                                    </div>
                                    <div className="grid grid-cols-4 items-center gap-4">
                                        <Label htmlFor="country" className="text-right">
                                            Country
                                        </Label>
                                        <Input 
                                            onChange={handleInputChange}
                                            type="text"
                                            name="country"
                                            value={formData.country}
                                            id="country"
                                            placeholder="Enter country name" 
                                            className="col-span-3" />
                                    </div>
                                    <div className="grid grid-cols-4 items-center gap-4">
                                        <Label htmlFor="addressType" className="text-right">
                                            Address Type
                                        </Label>
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button className="col-span-3 border bg-white text-black hover:bg-neutral-200">
                                                    Select Address Type
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent className="w-96">
                                                <DropdownMenuRadioGroup 
                                                    value={formData.addressType}
                                                    onValueChange={handleAddressTypeChange}
                                                    >
                                                    <DropdownMenuRadioItem name="addressType" value="HOME">Home</DropdownMenuRadioItem>
                                                    <DropdownMenuRadioItem name="addressType" value="OFFICE">Office</DropdownMenuRadioItem>
                                                    <DropdownMenuRadioItem name="addressType" value="OTHER">Other</DropdownMenuRadioItem>
                                                </DropdownMenuRadioGroup>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </div>
                                </form>
                            </div>
                            <DialogFooter>
                                <Button onClick={handleCreateAddress}>Save Address</Button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>
        </>
    );
}

export default DeliveryAddressComponent;