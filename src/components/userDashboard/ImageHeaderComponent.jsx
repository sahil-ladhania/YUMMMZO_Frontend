import { Input } from "@/components/ui/input"; // Import ShadCN Input component
import { Button } from "@/components/ui/button"; // Import ShadCN Button component
import { Popover, PopoverContent, PopoverTrigger } from "@radix-ui/react-popover";
import { IoIosArrowDown } from "react-icons/io";

function ImageHeaderComponent() {
  return (
    <>
      <div
        className="relative w-full h-64 rounded-md mb-6"
        style={{
          backgroundImage: `url('https://b.zmtcdn.com/data/pictures/0/20522030/cc8f83eb4e1cb9421c88bfb16fb7a82e_o2_featured_v2.jpg?output-format=webp')`,
        }}>
        <div className="absolute inset-0 bg-black/50 backdrop-blur-md rounded-md"></div>
        {/* Input Section */}
        <div className="absolute inset-0 flex flex-col justify-center items-center px-4">
          <div className="w-full max-w-lg">
            <Input
              type="text"
              placeholder="Search for menu items"
              className="w-full rounded-md text-md outline-none"
            />
          </div>
          {/* Sorting Buttons Section */}
          <div className="mt-4 flex gap-4">
            <Popover>
                <PopoverTrigger asChild>
                    <Button className="bg-black text-white  hover:bg-black roboto-regular">
                        Sort By Price
                        <IoIosArrowDown className="fill-white ml-2"/>
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="bg-neutral-900 h-auto w-auto flex flex-col gap-2 rounded-md mt-2">
                    <Button className="rounded-md m-2 bg-neutral-800 hover:bg-neutral-800 text-white  roboto-regular">Cost : Low to High</Button>
                    <Button className="rounded-md m-2 bg-neutral-800 hover:bg-neutral-800 text-white  roboto-regular">Cost : High to Low</Button>
                </PopoverContent>
            </Popover>
            <Popover>
                <PopoverTrigger asChild>
                    <Button className="bg-black text-white  hover:bg-black roboto-regular">
                        Sort By Category
                        <IoIosArrowDown className="fill-white ml-2"/>
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="bg-neutral-900 h-auto w-auto flex flex-col gap-2 rounded-md mt-2">
                    <Button className="rounded-md m-2 bg-neutral-800 hover:bg-neutral-800 text-white roboto-regular px-8">Main Course</Button>
                    <Button className="rounded-md m-2 bg-neutral-800 hover:bg-neutral-800 text-white  roboto-regular px-8">Appetizer</Button>
                    <Button className="rounded-md m-2 bg-neutral-800 hover:bg-neutral-800 text-white  roboto-regular px-8">Desert</Button>
                    <Button className="rounded-md m-2 bg-neutral-800 hover:bg-neutral-800 text-white  roboto-regular px-8">Beverage</Button>
                    <Button className="rounded-md m-2 bg-neutral-800 hover:bg-neutral-800 text-white roboto-regular px-8">Side</Button>
                </PopoverContent>
            </Popover>
            <Button className="bg-black text-white  hover:bg-black roboto-regular">Pure Veg</Button>
            <Button className="bg-black text-white  hover:bg-black roboto-regular">Sort By Availability</Button>
            <Button className="bg-orange-400 text-black  hover:bg-orange-400 roboto-regular">Clear Filters</Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ImageHeaderComponent;