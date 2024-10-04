import {Button} from "@/components/ui/button.jsx";

function FiltersContainerComponent() {
    return (
        <>
            {/* Buttons Section */}
            <div className="flex flex-wrap gap-2 my-4">
                <Button>Filters</Button>
                <Button>Sort By</Button>
                <Button>Fast Delivery</Button>
                <Button>New on YUMMMZO</Button>
                <Button>Ratings 4.0+</Button>
                <Button>Pure Veg</Button>
                <Button>Rs.300 - Rs.600</Button>
                <Button>Less than Rs.300</Button>
            </div>
        </>
    );
}

export default FiltersContainerComponent;