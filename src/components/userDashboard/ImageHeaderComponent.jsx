import { Input } from "@/components/ui/input"; // Import ShadCN Input component
import { Button } from "@/components/ui/button"; // Import ShadCN Button component
import { Popover, PopoverContent, PopoverTrigger } from "@radix-ui/react-popover";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setError, setFilter, setFilteredMenuItems, setLoading, setSearchText, setSortByCategoryOption, setSortByPriceOption } from "@/redux/slices/menuItemsFilterSlice";
import { filterMenuItems } from "@/services/menus/filterMenuItems";
import { getAllRestaurantMenuItems } from "@/services/menus/menuFeed";

function ImageHeaderComponent({restaurantDetails}) {

  // useDispatch and useSelector
  const dispatch = useDispatch();
  const { filter , searchText , sortByPriceOption , sortByCategoryOption } = useSelector((store) => store.filteredMenuItems);

  // Retrieving Data
  const {restaurantImage , restaurantId} = restaurantDetails ?? {};

  // State Variables
  const [searchQuery , setSearchQuery] = useState('');

  // Handler Functions
  const handleSearch = async(e) => {
    e.preventDefault();
    const query = e.target.value;
    setSearchQuery(query);
    dispatch(setSearchText(query));
    try {
        dispatch(setLoading(true));
        const response = await filterMenuItems({
          restaurantId,
          searchText: query,
          filter,
          sortByPriceOption,
          sortByCategoryOption
        });
        dispatch(setFilteredMenuItems(response.filteredMenuItems));
    }
    catch(error){
      dispatch(setError(error.message));
    }
    finally{
      dispatch(setLoading(false));
    }
  }

  const handleFiltering = async(e) => {
    const { name , value } = e.target;
    console.log(name , value);
    let updatedFilter = { ...filter };
    console.log(updatedFilter);
    if(name === 'filter'){
      if(value === 'pure-veg'){
        updatedFilter.veg = true;
        dispatch(setFilter({
          veg : updatedFilter.veg,
          availability : updatedFilter.availability
        }))
      }
      if(value === 'availability'){
        updatedFilter.availability = true;
        dispatch(setFilter({
          veg : updatedFilter.veg,
          availability : updatedFilter.availability
        }))
      }
    }
    if(name === 'sort_by_price'){
      if(value === 'Cost:Low-High'){
        dispatch(setSortByPriceOption(value));
      }
      if(value === 'Cost:High-Low'){
        dispatch(setSortByPriceOption(value));
      }
    }
    if(name === 'sort_by_categories'){
      if(value === 'main-course'){
        dispatch(setSortByCategoryOption(value));
      }
      if(value === 'appetizer'){
        dispatch(setSortByCategoryOption(value));
      }
      if(value === 'desert'){
        dispatch(setSortByCategoryOption(value));
      }
      if(value === 'beverage'){
        dispatch(setSortByCategoryOption(value));
      }
      if(value === 'side'){
        dispatch(setSortByCategoryOption(value));
      }
    }
    try {
      dispatch(setLoading(true));
      const response = await filterMenuItems({
        restaurantId,
        searchText,
        filter : updatedFilter,
        sortByPriceOption: name === 'sort_by_price' ? value : sortByPriceOption,
        sortByCategoryOption: name === 'sort_by_categories' ? value : sortByCategoryOption
      }); 
      dispatch(setFilteredMenuItems(response.filteredMenuItems));
    }
    catch(error){
      dispatch(setError(error.message));
    }
    finally {
      dispatch(setLoading(false));
  }
  }

  const clearFilters = async() => {
    setSearchQuery('');
    dispatch(setSearchText(''));
    dispatch(setFilter({
      veg : null,
      availability : null
    }));
    dispatch(setSortByPriceOption(''));
    dispatch(setSortByCategoryOption(''));
    try {
        dispatch(setLoading(true));
        const response = await getAllRestaurantMenuItems({ restaurantId });
        dispatch(setFilteredMenuItems(response));
    }
    catch(error){
        dispatch(setError(error.message));
    }
    finally {
      dispatch(setLoading(false));
  }
  }

  return (
    <>
      <div
        className="relative w-full h-64 rounded-md mb-6"
        style={{
          backgroundImage: `url('${restaurantImage}')`,
        }}>
        <div className="absolute inset-0 bg-black/50 backdrop-blur-md rounded-md"></div>
        {/* Input Section */}
        <div className="absolute inset-0 flex flex-col justify-center items-center px-4">
          <div className="w-full max-w-lg">
            <Input
              onChange={handleSearch}
              type="search"
              name="search"
              value={searchQuery}
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
                    <Button 
                      onClick={handleFiltering} 
                      name="sort_by_price"
                      value="Cost:Low-High"
                      className="rounded-md m-2 bg-neutral-800 hover:bg-neutral-800 text-white  roboto-regular"
                    >
                      Cost : Low to High
                    </Button>
                    <Button 
                      onClick={handleFiltering} 
                      name="sort_by_price"
                      value="Cost:High-Low"
                      className="rounded-md m-2 bg-neutral-800 hover:bg-neutral-800 text-white  roboto-regular"
                      >
                        Cost : High to Low
                      </Button>
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
                    <Button 
                      onClick={handleFiltering} 
                      name="sort_by_categories"
                      value="MAIN_COURSE"
                      className="rounded-md m-2 bg-neutral-800 hover:bg-neutral-800 text-white roboto-regular px-8"
                    >
                      Main Course
                    </Button>
                    <Button 
                      onClick={handleFiltering}
                      name="sort_by_categories"
                      value="APPETIZER" 
                      className="rounded-md m-2 bg-neutral-800 hover:bg-neutral-800 text-white  roboto-regular px-8"
                    >
                      Appetizer
                    </Button>
                    <Button 
                      onClick={handleFiltering} 
                      name="sort_by_categories"
                      value="DESSERT"
                      className="rounded-md m-2 bg-neutral-800 hover:bg-neutral-800 text-white  roboto-regular px-8"
                    >
                      Desert
                    </Button>
                    <Button 
                      onClick={handleFiltering} 
                      name="sort_by_categories"
                      value="BEVERAGE"
                      className="rounded-md m-2 bg-neutral-800 hover:bg-neutral-800 text-white  roboto-regular px-8"
                    >
                      Beverage
                    </Button>
                    <Button 
                      onClick={handleFiltering} 
                      name="sort_by_categories"
                      value="SIDE"
                      className="rounded-md m-2 bg-neutral-800 hover:bg-neutral-800 text-white roboto-regular px-8"
                    >
                      Side
                    </Button>
                </PopoverContent>
            </Popover>
            <Button 
              onClick={handleFiltering}
              name="filter"
              value="pure-veg"
              className="bg-black text-white  hover:bg-black roboto-regular"
            >
              Pure Veg
            </Button>
            <Button 
              onClick={handleFiltering}
              name="filter"
              value="availability"
              className="bg-black text-white  hover:bg-black roboto-regular"
            >
              Sort By Availability
            </Button>
            <Button 
              onClick={clearFilters}
              className="bg-orange-400 text-black  hover:bg-orange-400 roboto-regular"
            >
              Clear Filters
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ImageHeaderComponent;