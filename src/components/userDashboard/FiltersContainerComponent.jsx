import {Button} from "@/components/ui/button.jsx";
import { Input } from "../ui/input";
import {Popover,PopoverContent,PopoverTrigger} from "@/components/ui/popover";
import { IoIosArrowDown } from "react-icons/io";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setError, setFilter, setFilteredRestaurants, setLoading, setSearchText, setSortOption } from "@/redux/slices/restaurantsFilterSlice";
import { filterRestaurants } from "@/services/restaurants/filterRestaurants";

function FiltersContainerComponent() {

    // useSelector and useDispatch
    const dispatch = useDispatch();
    const { searchText , filter , sortOption } = useSelector((store) => store.filteredRestaurants);

    // State Variables
    const [searchQuery , setSearchQuery] = useState('');

    // Handler Functions
    const handleSearch = async (e) => {
        e.preventDefault();
        const query = e.target.value;
        setSearchQuery(query);
        dispatch(setSearchText(query));
        try {
            dispatch(setLoading(true));
            const response = await filterRestaurants({
                searchText: query,
                filter,
                sortOption,
            });
            dispatch(setFilteredRestaurants(response));
        } 
        catch (error) {
            dispatch(setError(error.message));
        } 
        finally {
            dispatch(setLoading(false));
        }
    };

    const handleFiltering = async (e) => {
        const { name, value } = e.target;
        let updatedFilter = { ...filter };
        if (name === 'filter') {
            if (value === 'pure-veg'){
                updatedFilter.veg = true;
            };
            if (value === '300-600'){
                updatedFilter.priceRange = '300-600';
            };
            if (value === '0-300'){
                updatedFilter.priceRange = '0-300';
            };
        }
        if (name === 'sort') {
            dispatch(setSortOption(value));
        }
        try {
            dispatch(setLoading(true));
            const filteredAndSortedRestaurants = await filterRestaurants({
                searchText,
                filter: updatedFilter,
                sortOption: name === 'sort' ? value : sortOption,
            });
            dispatch(setFilteredRestaurants(filteredAndSortedRestaurants));
        } 
        catch (error) {
            dispatch(setError(error.message));
        } 
        finally {
            dispatch(setLoading(false));
        }
    };

    const clearFilters = async() => {
        setSearchQuery('');
        dispatch(setSearchText(''));
        dispatch(setSortOption('Relevance(Default)'));
        dispatch(setFilter({
            veg: null,
            priceRange: ''
        }))
        try {
            dispatch(setLoading(true));
            const response = await filterRestaurants({
                searchText: '',
                filter: { 
                    veg: null, 
                    priceRange: '' 
                },
                sortOption: 'Relevance(Default)',
            });
            dispatch(setFilteredRestaurants(response));
        } 
        catch (error) {
            dispatch(setError(error.message));
        } 
        finally {
            dispatch(setLoading(false));
        }
    }

    useEffect(() => {
        let isMounted = true;
        const fetchRestaurants = async () => {
            try {
                dispatch(setLoading(true));
                const response = await filterRestaurants({
                    searchText: '',
                    filter: { veg: null, priceRange: '' },
                    sortOption: 'Relevance(Default)'
                });
                if (isMounted) {
                    dispatch(setFilteredRestaurants(response));
                }
            } 
            catch (error) {
                dispatch(setError(error.message));
            }
            finally {
                if (isMounted) {
                    dispatch(setLoading(false));
                }
            }
        };
        fetchRestaurants();
        return () => {
            isMounted = false;
        };
    }, []);

    return (
        <>
            {/* Heading Section */}
            <h2 className="text-2xl py-4 text-neutral-400 roboto-regular font-semibold">
                Sort and Filter
            </h2>
            {/* Search Section */}
            <div className="flex w-10/12">
                <Input 
                    className="w-10/12 mr-4" 
                    onChange={handleSearch}
                    name="search" 
                    type="search" 
                    value={searchQuery}
                    placeholder="search restaurants" 
                />
                <Button className="bg-orange-400 text-black hover:bg-orange-400 roboto-regular">Search</Button>
            </div>
            {/* Buttons Section */}
            <div className="flex flex-wrap gap-2 my-14">
                <Popover>
                    <PopoverTrigger asChild>
                        <Button className="bg-black text-white border border-orange-400 hover:bg-black roboto-regular">
                            Sort By
                            <IoIosArrowDown className="fill-white ml-2"/>
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="bg-black border-orange-400 h-auto w-auto flex flex-col gap-2">
                        <Button onClick={handleFiltering} name="sort" value="Relevance(Default)" className="bg-black text-white border border-orange-400 hover:bg-black roboto-regular">Relavance (Default)</Button>
                        <Button onClick={handleFiltering} name="sort" value="Cost:Low-High" className="bg-black text-white border border-orange-400 hover:bg-black roboto-regular">Cost : Low to High</Button>
                        <Button onClick={handleFiltering} name="sort" value="Cost:High-Low" className="bg-black text-white border border-orange-400 hover:bg-black roboto-regular">Cost : High to Low</Button>
                    </PopoverContent>
                </Popover>
                <Button onClick={handleFiltering} name="filter" value="pure-veg" className="bg-black text-white border border-orange-400 hover:bg-black roboto-regular">Pure Veg</Button>
                <Button onClick={handleFiltering} name="filter" value="300-600" className="bg-black text-white border border-orange-400 hover:bg-black roboto-regular">Rs.300 - Rs.600</Button>
                <Button onClick={handleFiltering} name="filter" value="0-300" className="bg-black text-white border border-orange-400 hover:bg-black roboto-regular">Less than Rs.300</Button>
                <Button onClick={clearFilters} className="bg-orange-400 text-black hover:bg-orange-400 roboto-regular">Clear Filters</Button>
            </div>
        </>
    );
}

export default FiltersContainerComponent;