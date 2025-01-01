import {Button} from "@/components/ui/button.jsx";

function FiltersContainerComponent() {
    return (
        <>
            {/* Heading Section */}
            <h2 className="text-2xl py-4 text-neutral-400 roboto-regular font-semibold">
                Sort and Filter
            </h2>
            {/* Buttons Section */}
            <div className="flex flex-wrap gap-2 my-14">
                <Button className="bg-black text-white border border-orange-400 hover:bg-black roboto-regular">Filters</Button>
                <Button className="bg-black text-white border border-orange-400 hover:bg-black roboto-regular">Sort By</Button>
                <Button className="bg-black text-white border border-orange-400 hover:bg-black roboto-regular">Fast Delivery</Button>
                <Button className="bg-black text-white border border-orange-400 hover:bg-black roboto-regular">New on YUMMMZO</Button>
                <Button className="bg-black text-white border border-orange-400 hover:bg-black roboto-regular">Ratings 4.0+</Button>
                <Button className="bg-black text-white border border-orange-400 hover:bg-black roboto-regular">Pure Veg</Button>
                <Button className="bg-black text-white border border-orange-400 hover:bg-black roboto-regular">Rs.300 - Rs.600</Button>
                <Button className="bg-black text-white border border-orange-400 hover:bg-black roboto-regular">Less than Rs.300</Button>
                <Button className="bg-orange-400 text-black hover:bg-orange-400 roboto-regular">Clear Filters</Button>
            </div>
        </>
    );
}

export default FiltersContainerComponent;